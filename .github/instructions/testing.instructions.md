---
description: 'Testing guidance for R3 Counseling frontend and backend changes. Use when editing tests or when implementing features that should be validated with existing build and test commands.'
applyTo: 'src/**/*.test.{ts,tsx},src/setupTests.ts,backend/test/**/*.ts'
---

# Testing Instructions

## Frontend

- Frontend tests run through Create React App.
- Prefer targeted component or behavior tests over snapshots for UI changes.
- Keep tests compatible with the repo's current React Testing Library setup.
- For route or content-page edits, a production build may be more realistic validation than adding fragile tests to static content.

## Backend

- Backend test coverage is currently light. Strengthen tests around validation, payload handling, and response codes when behavior changes.
- Mock AWS integrations rather than relying on live services in unit tests.
- Keep tests focused on the observable contract of the handler.

## What to Verify

- Frontend-only UI change: build success and any affected component behavior.
- Backend-only API change: backend build success and affected handler responses.
- Lead-flow change: request payload shape, validation errors, and success path across frontend and backend.

## Reporting

- If you could not run a realistic end-to-end test, say so directly.
- Distinguish between automated verification, local build verification, and unverified assumptions.