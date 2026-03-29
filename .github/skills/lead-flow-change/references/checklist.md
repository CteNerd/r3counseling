# Lead Flow Change Checklist

## Contract Review

- What fields does the frontend send?
- Which fields are required by the backend?
- What user-facing messages appear for validation and failure states?
- Are success and error response shapes unchanged or intentionally updated?

## Operational Review

- Does the change affect `REACT_APP_API_URL` or captcha configuration?
- Does the backend need new environment variables, secrets, or IAM permissions?
- Does DynamoDB schema or index usage change?
- Does SES behavior or sender configuration change?

## Verification

- Build backend after handler or service changes.
- Validate the frontend form if payload or validation changed.
- Call out anything that still requires real AWS or browser validation.