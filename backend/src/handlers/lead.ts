import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { randomBytes } from "crypto";

const ddb = new DynamoDBClient({});
const ses = new SESClient({});
const sm = new SecretsManagerClient({});

const TABLE_NAME = process.env.TABLE_NAME!;
const NOTIFY_TO = (process.env.NOTIFY_TO || "").split(",").map(s => s.trim()).filter(Boolean);
const FROM_EMAIL = process.env.FROM_EMAIL!;
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

export const handler = async (event: any) => {
  try {
    const { name, email, message, captchaToken } = JSON.parse(event.body || "{}");
    
    if (!name || !email) return json(400, { error: "invalid_input" });

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(400, { error: "invalid_email" });
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
    await ddb.send(new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        leadId: { S: leadId },
        name: { S: name },
        email: { S: email },
        message: { S: message || "" },
        createdAt: { S: createdAt },
        ip: { S: ip },
        userAgent: { S: userAgent }
      }
    }));

    // Send notification email
    if (NOTIFY_TO.length > 0 && FROM_EMAIL) {
      console.log(`Sending email to: ${NOTIFY_TO.join(', ')} from: ${FROM_EMAIL}`);
      
      try {
        await ses.send(new SendEmailCommand({
          Source: FROM_EMAIL,
          Destination: { ToAddresses: NOTIFY_TO },
          Message: {
            Subject: { Data: "New Lead Submitted - R3 Counseling" },
            Body: { 
              Text: { 
                Data: `A new lead has been submitted on the R3 Counseling website.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message || "No message provided"}\n\nSubmitted: ${createdAt}\nIP: ${ip}\nUser Agent: ${userAgent}\n\nLead ID: ${leadId}` 
              } 
            }
          }
        }));
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the whole request if email fails
      }
    } else {
      console.log(`Email not sent. NOTIFY_TO: ${NOTIFY_TO}, FROM_EMAIL: ${FROM_EMAIL}`);
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