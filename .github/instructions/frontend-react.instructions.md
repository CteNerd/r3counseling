---
description: 'Frontend guidance for R3 Counseling React pages, components, CSS, routing, SEO, and content updates. Use when editing files under src/ or public/ for the public website.'
applyTo: 'src/**/*.{ts,tsx,css},public/**/*.{html,txt,xml}'
---

# Frontend React Instructions

## Framework Constraints

- Keep changes compatible with React 17.
- Keep routing compatible with React Router v5. Use `Switch`, `Route`, `Link`, and `BrowserRouter` patterns already in the repo.
- Keep Ant Design usage compatible with v4 components and props.

## Structure

- Route-level pages live in `src/pages/`.
- Shared or semi-shared UI lives in `src/components/`.
- Styling is primarily plain CSS and is usually co-located with the page or component being edited.
- Avoid introducing CSS-in-JS, Tailwind, or a new design system unless explicitly requested.

## Page and Content Work

- Preserve the counseling practice voice and credibility. Prefer clear, direct copy and avoid filler text.
- When changing an offering, bio, retreat, or event page, review adjacent files in the same folder first because content and styling are often split.
- Keep mobile layout intact. Many pages are content-heavy and can break on narrow screens if spacing or image sizing changes.
- If adding or changing images, use the existing assets structure under `src/assets/` and prefer meaningful alt text.

## SEO and Accessibility

- Do not remove existing schema, semantic landmarks, or route-level SEO behavior without a reason.
- Use descriptive link text where practical.
- Preserve heading hierarchy and form labels.
- If a change alters navigation or a public route, consider whether sitemap, redirects, or canonical behavior should also be updated.

## Implementation Bias

- Prefer small edits inside the current page structure over a full component rewrite.
- Reuse existing layout and class naming patterns from the touched area.
- If a request touches the lead form, confirm whether the backend contract also needs an update.