# R3 Counseling Copilot Instructions

## Repo Shape

This repository contains two apps that should be treated separately during implementation:

- Frontend website in `src/`, `public/`, and related assets.
- Backend lead-processing service in `backend/`.

Always identify which side of the repo a request touches before proposing or making edits.

## Frontend Expectations

- Preserve compatibility with React 17, React Router v5, and Ant Design v4.
- Keep route work aligned with `src/App.tsx`, which uses `BrowserRouter`, `Switch`, and `Route`.
- Prefer editing the existing page or component and its adjacent CSS file instead of creating new abstraction layers.
- Keep marketing pages readable and editable by humans. Avoid over-componentizing page-specific content.
- Maintain responsive behavior for both desktop and mobile layouts.
- Keep accessibility in mind for forms, links, alt text, and heading order.
- Respect existing SEO and structured-data patterns when changing routes or key landing pages.

## Backend Expectations

- Keep backend changes inside `backend/` unless the request is explicitly end-to-end.
- Preserve the current Serverless and AWS SDK v3 patterns.
- Keep Lambda handlers explicit about validation, response codes, and side effects.
- Avoid changing lead storage, captcha behavior, or SES email behavior without reviewing user-visible impact.
- If a backend change requires a frontend payload change, update both sides together.

## File Placement

- Public site pages belong under `src/pages/`.
- Reusable site UI belongs under `src/components/`.
- Page or component styling usually belongs in a nearby `.css` file.
- Backend handlers belong in `backend/src/handlers/`.
- Backend supporting logic such as email templates belongs in `backend/src/services/`.
- Generated frontend output in `build/` should not be manually edited unless the user specifically asks for it.

## Validation

- For frontend-only changes, prefer validating with the root build or targeted tests if available.
- For backend-only changes, prefer validating with `backend` build or existing backend tests.
- For end-to-end lead-flow changes, verify the payload contract between `LeadForm.tsx` and `backend/src/handlers/lead.ts`.
- If the repo lacks strong automated coverage for the change, state that plainly in the final summary.

## Change Style

- Make the smallest change that solves the request.
- Match the local naming, formatting, and file organization already present in the touched area.
- Avoid framework upgrades, mass renames, or broad style rewrites unless specifically requested.
- When introducing new Copilot customization files in this repo, keep them specific to R3 Counseling rather than generic boilerplate.