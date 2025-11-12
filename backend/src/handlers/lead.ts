import { DynamoDBClient, PutItemCommand, QueryCommand } from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { randomBytes } from "crypto";
import { EmailTemplates } from "../services/emailTemplates";

const ddb = new DynamoDBClient({});
const ses = new SESClient({});
const sm = new SecretsManagerClient({});

const TABLE_NAME = process.env.TABLE_NAME!;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Tiff's email for lead messages
const FROM_EMAIL = process.env.FROM_EMAIL!;
const FROM_EMAIL_SECRET_ARN = process.env.FROM_EMAIL_SECRET_ARN;
const TURNSTILE_SECRET_ARN = process.env.TURNSTILE_SECRET_ARN;

// Simple ID generator using crypto
function generateId(): string {
  return randomBytes(12).toString('base64url');
}

let cachedCaptchaSecret: string | null = null;
async function getCaptchaSecret(): Promise<string | null> {
  if (!TURNSTILE_SECRET_ARN) return null;
  if (cachedCaptchaSecret !== null) return cachedCaptchaSecret;
  
  try {
    const result = await sm.send(new GetSecretValueCommand({ SecretId: TURNSTILE_SECRET_ARN }));
    cachedCaptchaSecret = result.SecretString || "";
    return cachedCaptchaSecret;
  } catch {
    cachedCaptchaSecret = "";
    return "";
  }
}

let cachedFromEmail: string | null = null;
async function getFromEmail(): Promise<string> {
  // If FROM_EMAIL_SECRET_ARN is not set, fall back to environment variable
  if (!FROM_EMAIL_SECRET_ARN) return FROM_EMAIL;
  
  // Return cached value if available
  if (cachedFromEmail !== null) return cachedFromEmail;
  
  try {
    const result = await sm.send(new GetSecretValueCommand({ SecretId: FROM_EMAIL_SECRET_ARN }));
    cachedFromEmail = result.SecretString || FROM_EMAIL;
    return cachedFromEmail;
  } catch (error) {
    console.warn('Failed to retrieve FROM_EMAIL from Secrets Manager, falling back to environment variable:', error);
    cachedFromEmail = FROM_EMAIL;
    return FROM_EMAIL;
  }
}

export const handler = async (event: any) => {
  try {
    const { firstName, lastName, name, email, message, captchaToken } = JSON.parse(event.body || "{}");
    
    // Support both old format (name) and new format (firstName + lastName)
    const fullName = firstName && lastName ? `${firstName} ${lastName}`.trim() : name;
    
    if (!fullName || !email) return json(400, { error: "invalid_input" });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(400, { error: "invalid_email" });
    }

    // Use the user's email for notifications
    const notifyToEmails = [email];

    console.log(`Debug - email from payload: ${JSON.stringify(email)}, notifyToEmails: ${JSON.stringify(notifyToEmails)}`);

    // Check for duplicate email submissions (within last 24 hours)
    try {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
      const existingLeads = await ddb.send(new QueryCommand({
        TableName: TABLE_NAME,
        IndexName: "email-index",
        KeyConditionExpression: "email = :email",
        FilterExpression: "createdAt > :oneDayAgo",
        ExpressionAttributeValues: {
          ":email": { S: email },
          ":oneDayAgo": { S: oneDayAgo }
        }
      }));

      if (existingLeads.Items && existingLeads.Items.length > 0) {
        console.log(`Duplicate submission detected for email: ${email}`);
        return json(400, { error: "duplicate_submission", message: "You have already submitted a lead recently. Please wait 24 hours before submitting again." });
      }
    } catch (error) {
      console.warn("Failed to check for duplicates (proceeding anyway):", error);
      // Don't fail the request if duplicate check fails
    }

    // Verify captcha if secret is available
    const secret = await getCaptchaSecret();
    if (secret) {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: String(captchaToken || "") })
      }).then(r => r.json() as Promise<{ success: boolean }>);
      if (!verify.success) return json(400, { error: "captcha_failed" });
    }

    // Generate ID using crypto instead of nanoid
    const leadId = generateId();
    const createdAt = new Date().toISOString();
    const ip = event.requestContext?.http?.sourceIp || "unknown";
    const userAgent = event.headers?.["user-agent"] || "unknown";

    // Store lead in DynamoDB
    const item: any = {
      leadId: { S: leadId },
      name: { S: fullName },
      email: { S: email },
      message: { S: message || "" },
      createdAt: { S: createdAt },
      ip: { S: ip },
      userAgent: { S: userAgent }
    };
    
    // Store firstName and lastName separately if provided
    if (firstName) {
      item.firstName = { S: firstName };
    }
    if (lastName) {
      item.lastName = { S: lastName };
    }
    
    await ddb.send(new PutItemCommand({
      TableName: TABLE_NAME,
      Item: item
    }));

    // Send notification email
    if (notifyToEmails.length > 0) {
      const fromEmail = await getFromEmail();
      console.log(`Sending notification email to: ${notifyToEmails.join(', ')} from: ${fromEmail}`);
      
      const htmlTemplate = EmailTemplates.getLeadNotificationTemplate({
        name: fullName,
        email,
        message: message || "",
        createdAt,
        ip,
        userAgent,
        leadId
      });
      
      try {
        await ses.send(new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: notifyToEmails },
          Message: {
            Subject: { Data: "New Lead Submitted - R3 Counseling" },
            Body: { 
              Html: { Data: htmlTemplate },
              Text: { 
                Data: `A new lead has been submitted on the R3 Counseling website.\n\nName: ${fullName}\nEmail: ${email}\n\nSubmitted: ${createdAt}\nIP: ${ip}\nUser Agent: ${userAgent}\n\nLead ID: ${leadId}` 
              } 
            }
          }
        }));
        console.log('Notification email sent successfully');
      } catch (emailError) {
        console.error('Failed to send notification email:', emailError);
        // Don't fail the whole request if email fails
      }
    } else {
      console.log(`Notification email not sent. email from payload: ${JSON.stringify(email)}, processed emails: ${JSON.stringify(notifyToEmails)}`);
    }

    // Send separate message email to admin (Tiff) if message exists and admin email is configured
    if (message && ADMIN_EMAIL) {
      const fromEmail = await getFromEmail();
      console.log(`Sending message email to admin: ${ADMIN_EMAIL} from: ${fromEmail}`);
      
      const htmlTemplate = EmailTemplates.getAdminMessageTemplate({
        name: fullName,
        email,
        message,
        createdAt,
        leadId
      });
      
      try {
        await ses.send(new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: [ADMIN_EMAIL] },
          Message: {
            Subject: { Data: `New Message from ${fullName} - R3 Counseling` },
            Body: { 
              Html: { Data: htmlTemplate },
              Text: { 
                Data: `You have received a new message from a lead on the R3 Counseling website.\n\nFrom: ${fullName} (${email})\n\nMessage:\n${message}\n\n---\nSubmitted: ${createdAt}\nLead ID: ${leadId}` 
              } 
            }
          }
        }));
        console.log('Admin message email sent successfully');
      } catch (emailError) {
        console.error('Failed to send admin message email:', emailError);
        // Don't fail the whole request if email fails
      }
    } else if (message && !ADMIN_EMAIL) {
      console.log('Message provided but ADMIN_EMAIL not configured');
    }

    return json(200, { ok: true, leadId });
  } catch (e) {
    console.error("Lead handler error:", e);
    return json(500, { error: "server_error" });
  }
};

function json(statusCode: number, body: any) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    },
    body: JSON.stringify(body)
  };
}