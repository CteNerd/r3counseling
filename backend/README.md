# R3 Counseling Backend

AWS Lambda backend for the R3 Counseling contact form. Handles form submissions, validates input, stores leads in DynamoDB, and sends email notifications via SES.

## Features

- **Contact Form Processing**: Validates and processes contact form submissions
- **DynamoDB Storage**: Stores lead information with unique IDs
- **Email Notifications**: Sends notifications via AWS SES
- **Captcha Verification**: Optional Cloudflare Turnstile integration
- **Security**: Input validation, disposable email blocking, CORS support
- **Secrets Management**: Uses AWS SSM Parameter Store and Secrets Manager

## Prerequisites

- Node.js 20+ and npm
- AWS CLI configured with appropriate permissions
- Serverless Framework
- AWS Account with access to:
  - Lambda
  - DynamoDB
  - SES
  - SSM Parameter Store
  - Secrets Manager
  - API Gateway

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure AWS Secrets

Create the following parameters in AWS SSM Parameter Store:

```bash
# Notification recipient emails (comma-separated)
aws ssm put-parameter \
  --name "/r3counseling/notify_to" \
  --value "admin@r3counseling.com,notifications@r3counseling.com" \
  --type "String"

# From email address (must be verified in SES)
aws ssm put-parameter \
  --name "/r3counseling/from_email" \
  --value "noreply@r3counseling.com" \
  --type "String"
```

Create the Turnstile secret in AWS Secrets Manager:

```bash
# Optional: Cloudflare Turnstile secret key
aws secretsmanager create-secret \
  --name "/r3counseling/turnstile_secret" \
  --secret-string "your-turnstile-secret-key"
```

### 3. Verify SES Email

Before deploying, ensure your from-address is verified in AWS SES:

```bash
aws ses verify-email-identity --email-address noreply@r3counseling.com
```

## Deployment

### Local Development

```bash
# Build TypeScript
npm run build

# Package for deployment (without deploying)
npm run package
```

### Production Deployment

```bash
# Deploy to AWS
npm run deploy
```

### CI/CD Deployment

The project includes a GitHub Actions workflow (`.github/workflows/backend-deploy.yml`) that automatically deploys when changes are made to the `/backend` folder.

#### Required GitHub Secrets

Add the following secret to your GitHub repository:

- `AWS_ROLE_ARN`: The ARN of an AWS IAM role that GitHub Actions can assume

#### Setting up AWS OIDC for GitHub Actions

1. Create an OIDC identity provider in AWS IAM
2. Create a role that trusts the GitHub OIDC provider
3. Attach the necessary policies for Lambda, DynamoDB, SES, etc.
4. Add the role ARN to GitHub secrets

## API Endpoints

### POST /lead

Processes contact form submissions.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services",
  "captchaToken": "optional-turnstile-token"
}
```

#### Response

Success (200):
```json
{
  "ok": true,
  "leadId": "unique-lead-id"
}
```

Error (400):
```json
{
  "error": "invalid_input" | "invalid_email" | "captcha_failed"
}
```

Error (500):
```json
{
  "error": "server_error"
}
```

## Environment Variables

The Lambda function uses the following environment variables (automatically set by serverless.yml):

- `TABLE_NAME`: DynamoDB table name for storing leads
- `NOTIFY_TO`: Comma-separated list of notification recipients
- `FROM_EMAIL`: SES from-address for notifications
- `TURNSTILE_SECRET_ARN`: ARN of Turnstile secret in Secrets Manager

## Database Schema

### DynamoDB Table: Contacts

```
leadId (String, Primary Key) - Unique identifier for the lead
name (String) - Contact's name
email (String) - Contact's email address
message (String) - Contact's message
createdAt (String) - ISO timestamp
ip (String) - Client IP address
userAgent (String) - Client user agent
```

## Security

- Input validation for all fields
- Email format validation
- Optional captcha verification
- IP and user agent logging
- Secrets stored in AWS SSM/Secrets Manager
- CORS configuration for frontend domain
- No sensitive data in environment variables or code

## Monitoring

- CloudWatch logs for all Lambda executions
- Error logging with detailed context
- DynamoDB and SES metrics available in CloudWatch

## Cost Optimization

- DynamoDB configured with PAY_PER_REQUEST billing
- Lambda only runs when requests are made
- SES charges per email sent
- Minimal cold start times with Node.js runtime

## Troubleshooting

### Common Issues

1. **SES Email Not Sending**: Verify the from-address is confirmed in SES
2. **Permission Errors**: Ensure the Lambda execution role has required permissions
3. **CORS Errors**: Check that the API Gateway CORS settings match your frontend domain
4. **Secret Not Found**: Verify SSM parameters and Secrets Manager entries exist

### Logs

Check CloudWatch Logs for detailed error information:

```bash
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/r3counseling-backend"
```

## Contributing

1. Make changes in the `/backend` directory
2. Test locally with `npm run build`
3. Commit changes - CI/CD will automatically deploy to AWS
4. Monitor CloudWatch logs for any deployment issues