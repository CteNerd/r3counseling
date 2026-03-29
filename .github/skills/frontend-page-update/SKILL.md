---
name: 'frontend-page-update'
description: 'Workflow for updating R3 Counseling frontend pages and page-level styling. Use when asked to change site copy, counselor bios, offerings, retreat pages, events, resources, responsive layout, navigation, or SEO-sensitive public content in src/ and public/.'
---

# Frontend Page Update

Use this skill for public-site page work in the React app.

Review the existing page, nearby CSS, and any related route before editing. This repo favors localized, content-first changes over broad abstractions.

## Workflow

1. Identify the route, page folder, and any related component folders.
2. Review the matching CSS file before changing markup so layout assumptions are clear.
3. Keep the current framework constraints: React 17, React Router v5, Ant Design v4.
4. Make the smallest change that satisfies the request.
5. Check whether the change affects navigation, SEO text, images, alt text, or structured data.
6. Validate with the frontend build or relevant tests when practical.

## Repository Notes

- Route definitions are centralized in `src/App.tsx`.
- Many content areas live under `src/pages/` or under `src/components/professionalBio/` and `src/components/Offerings/`.
- Styling is usually plain CSS next to the edited feature.
- Static deployment artifacts belong in `public/`; generated artifacts in `build/` should usually be left alone.

## Reference

Use the checklist in [references/checklist.md](./references/checklist.md) during implementation and final review.