import { nanoid } from "nanoid";
import fetch from "node-fetch";

// Mock implementations for local testing
class MockDynamoDBClient {
  async send(command: any) {
    console.log("🗄️  [MOCK DynamoDB] Storing lead:", command.input?.Item);
    return { success: true };
  }
}

class MockSESClient {
  async send(command: any) {
    console.log("📧 [MOCK SES] Sending email notification:", {
      to: command.input?.Destination?.ToAddresses,
      subject: command.input?.Message?.Subject?.Data,
      body: command.input?.Message?.Body?.Text?.Data
    });
    return { MessageId: "mock-message-id" };
  }
}

class MockSecretsManagerClient {
  async send(command: any) {
    console.log("🔐 [MOCK Secrets Manager] Getting secret:", command.input?.SecretId);
    return { SecretString: null }; // Skip captcha for local testing
  }
}

const ddb = new MockDynamoDBClient();
const ses = new MockSESClient();
const sm = new MockSecretsManagerClient();

const TABLE_NAME = process.env.TABLE_NAME || "local-contacts";
const NOTIFY_TO = (process.env.NOTIFY_TO || "test@example.com").split(",").map(s => s.trim()).filter(Boolean);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Tiff's email for lead messages
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@r3counseling.com";
const TURNSTILE_SECRET_ARN = process.env.TURNSTILE_SECRET_ARN;

let cachedCaptchaSecret: string | null = null;
async function getCaptchaSecret(): Promise<string | null> {
  if (!TURNSTILE_SECRET_ARN) return null;
  if (cachedCaptchaSecret) return cachedCaptchaSecret;
  const res = await sm.send({ input: { SecretId: TURNSTILE_SECRET_ARN } });
  cachedCaptchaSecret = res.SecretString || null;
  return cachedCaptchaSecret;
}

export const handler = async (event: any) => {
  console.log("🚀 [LOCAL] Lead handler called with:", JSON.stringify(event, null, 2));
  
  try {
    const { name, email, message, captchaToken } = JSON.parse(event.body || "{}");
    
    console.log("📝 [LOCAL] Processing lead submission:", { name, email, message: message?.substring(0, 50) + "..." });
    
    if (!name || !email) {
      console.log("❌ [LOCAL] Invalid input - missing name or email");
      return json(400, { error: "invalid_input" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("❌ [LOCAL] Invalid email format");
      return json(400, { error: "invalid_email" });
    }

    // Skip captcha verification for local testing
    const secret = await getCaptchaSecret();
    console.log("🔐 [LOCAL] Captcha secret:", secret ? "Found" : "Not configured - skipping verification");

    const leadId = nanoid();
    const createdAt = new Date().toISOString();
    const ip = event.requestContext?.http?.sourceIp || "127.0.0.1";
    const userAgent = event.headers?.["user-agent"] || "local-testing";

    // Store lead in mock DynamoDB
    await ddb.send({
      input: {
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
      }
    });

    // Send mock notification email
    if (NOTIFY_TO.length > 0 && FROM_EMAIL) {
      await ses.send({
        input: {
          Source: FROM_EMAIL,
          Destination: { ToAddresses: NOTIFY_TO },
          Message: {
            Subject: { Data: "New Lead Submitted - R3 Counseling (LOCAL TEST)" },
            Body: { 
              Text: { 
                Data: `A new lead has been submitted on the R3 Counseling website.\n\nName: ${name}\nEmail: ${email}\n\nSubmitted: ${createdAt}\nIP: ${ip}\nUser Agent: ${userAgent}\n\nLead ID: ${leadId}` 
              } 
            }
          }
        }
      });
    }

    // Send separate mock message email to admin (Tiff) if message exists and admin email is configured
    if (message && ADMIN_EMAIL && FROM_EMAIL) {
      await ses.send({
        input: {
          Source: FROM_EMAIL,
          Destination: { ToAddresses: [ADMIN_EMAIL] },
          Message: {
            Subject: { Data: `New Message from ${name} - R3 Counseling (LOCAL TEST)` },
            Body: { 
              Text: { 
                Data: `You have received a new message from a lead on the R3 Counseling website.\n\nFrom: ${name} (${email})\n\nMessage:\n${message}\n\n---\nSubmitted: ${createdAt}\nLead ID: ${leadId}` 
              } 
            }
          }
        }
      });
    }

    console.log("✅ [LOCAL] Lead processed successfully:", { leadId, createdAt });
    return json(200, { ok: true, leadId });
  } catch (e) {
    console.error("❌ [LOCAL] Lead handler error:", e);
    return json(500, { error: "server_error" });
  }
};

function json(statusCode: number, body: any) {
  return {
    statusCode,
    headers: { 
      "content-type": "application/json", 
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "Content-Type",
      "access-control-allow-methods": "POST, OPTIONS"
    },
    body: JSON.stringify(body)
  };
}
