interface LeadNotificationData {
  name: string;
  email: string;
  message?: string;
  createdAt: string;
  ip: string;
  userAgent: string;
  leadId: string;
}

interface AdminMessageData {
  name: string;
  email: string;
  message: string;
  createdAt: string;
  leadId: string;
}

export class EmailTemplates {
  private static getBaseTemplate(content: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>R3 Counseling</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Georgia', 'Times New Roman', serif;
            background-color: #f5f5f5;
            color: #333333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #839abf 0%, #e4b099 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .logo {
            width: 80px;
            height: 80px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('https://r3counseling.com/logo192.png');
            background-size: 60px 60px;
            background-repeat: no-repeat;
            background-position: center;
            font-size: 32px;
            font-weight: bold;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 2px;
        }
        .header p {
            margin: 10px 0 0;
            font-size: 14px;
            opacity: 0.9;
            letter-spacing: 1px;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 25px;
            color: #839abf;
        }
        .details-section {
            background-color: #faf8f5;
            border-left: 4px solid #e4b099;
            padding: 20px;
            margin: 25px 0;
            border-radius: 4px;
        }
        .detail-row {
            margin-bottom: 12px;
            font-size: 15px;
        }
        .detail-label {
            font-weight: bold;
            color: #839abf;
            display: inline-block;
            min-width: 120px;
        }
        .detail-value {
            color: #333333;
        }
        .message-section {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 6px;
            margin: 25px 0;
            border: 1px solid #e0e0e0;
        }
        .message-label {
            font-weight: bold;
            color: #839abf;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .message-content {
            line-height: 1.6;
            color: #333333;
            font-size: 15px;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #839abf;
            color: white;
            text-align: center;
            padding: 30px;
            font-size: 14px;
        }
        .footer p {
            margin: 5px 0;
            opacity: 0.9;
        }
        .contact-info {
            margin-top: 15px;
            font-size: 13px;
        }
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
        .metadata {
            font-size: 12px;
            color: #666666;
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 4px;
            margin-top: 25px;
        }
        .metadata strong {
            color: #839abf;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo"></div>
            <h1>R3 COUNSELING</h1>
            <p>RELEASE • RESTORE • REDEFINE</p>
        </div>
        ${content}
        <div class="footer">
            <p><strong>Tiffany Luke, LPC, CPCS, TCYH, CYT 300</strong></p>
            <p>Certified Professional Clinical Supervisor</p>
            <p>Certified Holistic Therapist</p>
            <p>EMDRIA Certified, EMDR Clinician</p>
            <p>Founder, Release Restore Redefine Counseling, LLC</p>
            <div class="contact-info">
                <p>📧 tiffanyluke.lpc@counselingsecure.com</p>
                <p>🌐 https://r3counseling.com</p>
                <p>📞 706-750-8906</p>
            </div>
            <div style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
                <p><strong>IF YOU ARE IN A MENTAL HEALTH CRISIS AND NEED SUPPORT PLEASE CONTACT 988 SUICIDE CRISIS LINE AVAILABLE 24/7</strong></p>
            </div>
        </div>
    </div>
</body>
</html>`;
  }

  public static getLeadNotificationTemplate(data: LeadNotificationData): string {
    const content = `
        <div class="content">
            <div class="greeting">New Lead Submission</div>
            <p>A new lead has been submitted on the R3 Counseling website.</p>
            
            <div class="details-section">
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${data.name}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${data.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Submitted:</span>
                    <span class="detail-value">${new Date(data.createdAt).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Lead ID:</span>
                    <span class="detail-value">${data.leadId}</span>
                </div>
            </div>

            ${data.message ? `
            <div class="message-section">
                <div class="message-label">Message Preview:</div>
                <div class="message-content">${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}</div>
            </div>
            ` : ''}
        </div>`;

    return this.getBaseTemplate(content);
  }

  public static getAdminMessageTemplate(data: AdminMessageData): string {
    const content = `
        <div class="content">
            <div class="greeting">New Message from ${data.name}</div>
            <p>You have received a new message from a lead on the R3 Counseling website.</p>
            
            <div class="details-section">
                <div class="detail-row">
                    <span class="detail-label">From:</span>
                    <span class="detail-value">${data.name}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${data.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Submitted:</span>
                    <span class="detail-value">${new Date(data.createdAt).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      timeZoneName: 'short'
                    })}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Lead ID:</span>
                    <span class="detail-value">${data.leadId}</span>
                </div>
            </div>

            <div class="message-section">
                <div class="message-label">Message:</div>
                <div class="message-content">${data.message}</div>
            </div>

            <div class="divider"></div>
            <p style="font-style: italic; color: #666;">This message was sent through the contact form on your R3 Counseling website. Please respond directly to ${data.email} to continue the conversation.</p>
        </div>`;

    return this.getBaseTemplate(content);
  }
}