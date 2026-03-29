---
description: 'Backend guidance for the R3 Counseling Serverless TypeScript API. Use when editing Lambda handlers, email templates, tests, or deployment-related backend files under backend/.'
applyTo: 'backend/src/**/*.ts,backend/test/**/*.ts,backend/serverless*.yml,backend/README.md'
---

# Backend Serverless Instructions

## Runtime and Scope

- This backend is a TypeScript Serverless project deployed to AWS Lambda.
- Core integrations include DynamoDB, SES, Secrets Manager, and optional Cloudflare Turnstile verification.
- Keep backend changes scoped to `backend/` unless the request is explicitly end to end.

## Handler Conventions

- Keep request parsing, validation, and response generation explicit.
- Preserve existing response shapes and status codes unless the change requires a contract update.
- When changing input fields, review the matching frontend caller, especially `src/components/LeadForm.tsx`.
- Prefer simple helper extraction over large abstractions in small handlers.

## AWS Integration Expectations

- Use the AWS SDK v3 command-client pattern already present in the codebase.
- Be cautious with Secrets Manager lookups, cached values, and email delivery behavior.
- Do not weaken captcha verification, duplicate-submission checks, or lead persistence rules without an explicit reason.
- Keep logs useful for debugging but avoid introducing sensitive data exposure beyond the repo's current behavior.

## Deployment and Config

- Backend builds and deploys independently from the frontend.
- Keep Node.js assumptions aligned with the backend package and workflow configuration.
- If a change requires new environment variables, IAM permissions, or secrets, document that in the final response and update backend documentation when appropriate.

## Testing Bias

- Prefer validating backend changes with `npm run build` in `backend/` at minimum.
- Add or adjust backend tests when the change modifies validation or response behavior.
- If test coverage is incomplete, call out what remains manual or unverified.