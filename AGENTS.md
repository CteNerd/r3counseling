# AGENTS.md

## Project Overview

R3 Counseling is a marketing website and lead-capture system for a counseling practice. The repository has two distinct applications:

- Frontend: a Create React App site in `src/` deployed to GitHub Pages.
- Backend: a Serverless AWS Lambda project in `backend/` that processes leads, stores them in DynamoDB, and sends SES emails.

Most work in this repo falls into one of these buckets:

- Updating public-facing content pages, bios, offerings, events, and landing pages.
- Adjusting layout and styling in co-located CSS files.
- Changing the contact or appointment flow end to end across frontend and backend.
- Maintaining SEO, structured data, and deployment behavior.

## Repository Structure

```text
.
├── src/                  # React app source
│   ├── components/       # Reusable UI, bios, offerings, side nav, lead form
│   ├── pages/            # Route-level pages
│   └── assets/           # Images and other static assets used by the app
├── public/               # Static files copied into the build
├── backend/              # Serverless TypeScript backend for lead capture
│   ├── src/handlers/     # Lambda handlers
│   ├── src/services/     # Email templates and supporting logic
│   └── test/             # Backend tests
├── build/                # Generated frontend output, do not hand-edit unless requested
└── .github/              # Deploy workflows plus Copilot customization files
```

## Technology Notes

- Frontend uses React 17, TypeScript, React Router v5, and Ant Design v4.
- Frontend styling is mostly plain CSS, usually co-located with a page or component.
- The main router lives in `src/App.tsx` and still uses `Switch` and `Route` from React Router v5.
- Backend uses TypeScript, Serverless Framework, AWS SDK v3, DynamoDB, SES, and Secrets Manager.
- Frontend and backend have separate package manifests and separate runtime assumptions.

## Working Conventions

- Preserve the current framework versions and patterns unless the user explicitly asks for an upgrade.
- For frontend routing, stay compatible with React Router v5. Do not introduce v6-only APIs.
- Keep styling changes localized to the existing page or component CSS file when possible.
- Prefer focused edits over broad refactors. This repo is content-heavy and many files are page-specific.
- Treat `build/` as generated output. Prefer changing `src/` or `public/` instead.
- For lead-flow work, review both `src/components/LeadForm.tsx` and `backend/src/handlers/lead.ts` before making assumptions.

## Commands

Frontend from the repository root:

```bash
npm install
npm start
npm run build
npm test -- --watch=false
```

Backend from `backend/`:

```bash
npm install
npm run build
npm run dev:local
npm run test:direct
npm run deploy
```

## Delivery Expectations

- For page/content work, preserve the established voice and the current visual language unless a redesign is requested.
- For backend changes, keep validation explicit and avoid silent behavior changes to lead capture or email delivery.
- If a change affects environment variables, deployment, or secrets, call that out clearly.
- When tests are missing, say what was validated and what remains unverified.