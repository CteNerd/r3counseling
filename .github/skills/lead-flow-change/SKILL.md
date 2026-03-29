---
name: 'lead-flow-change'
description: 'Workflow for R3 Counseling contact and appointment lead-flow changes. Use when modifying LeadForm, request payloads, backend lead handlers, SES email templates, DynamoDB persistence, duplicate checks, captcha verification, or deployment/config tied to lead capture.'
---

# Lead Flow Change

Use this skill for end-to-end changes to the R3 Counseling lead capture path.

Treat the frontend form and backend handler as one contract. Do not change one side without checking the other.

## Workflow

1. Inspect the current frontend caller, especially `src/components/LeadForm.tsx`.
2. Inspect the backend handler and supporting services in `backend/src/`.
3. Define the payload contract and error behavior before editing.
4. Implement the minimum coordinated changes across frontend and backend.
5. Review operational impact: environment variables, secrets, SES sender setup, DynamoDB indexes, deployment workflow.
6. Validate with backend build and, when practical, a frontend build or targeted tests.

## Repository Notes

- Frontend uses `REACT_APP_API_URL` and optional Turnstile site key configuration.
- Backend lead handling currently lives in `backend/src/handlers/lead.ts`.
- Email rendering support lives in `backend/src/services/emailTemplates.ts`.
- Backend deploys independently through the workflow under `.github/workflows/backend-deploy.yml`.

## Reference

Use the checklist in [references/checklist.md](./references/checklist.md) when making or reviewing lead-flow changes.