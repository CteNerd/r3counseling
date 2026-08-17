---
name: 'add-events-page-entry'
description: 'Workflow for adding a new event flyer to the R3 Counseling Events page (src/pages/events/index.tsx). Use when asked to add, update, or retire an event/flyer image on the public Events page, including recurring virtual support groups and one-off in-person events.'
---

# Add Events Page Entry

Use this skill whenever a new event flyer needs to be added to the public Events page. It captures the current pattern used on that page so additions stay consistent, accessible, and SEO-friendly without re-deriving the approach each time.

## Workflow

1. **Get the flyer image on disk.** Chat-attached images cannot be saved directly by the agent — ask the user to save/drag the file into the repo (e.g. `src/assets/images/2026/`) if it isn't already there. Use `file_search` to confirm the exact path before continuing.
2. **Rename the file** to a filesystem-safe, descriptive name with no spaces or special characters (e.g. `NatureAndNurture2026.png`), matching the style of existing files in that folder.
3. **Read [src/pages/events/index.tsx](../../../src/pages/events/index.tsx) first** to see the current top-of-file imports and the most recently added event `<article>` block — always copy the newest pattern, not an older one.
4. **Add the import** for the new image near the other `src/assets/images/2026/...` imports.
5. **Add a description constant** (e.g. `EventNameDescription`) above `export default function Events()` holding the shared alt/aria/modal text. Do not inline the same string in both `onClick` and `onKeyDown` — that duplication was called out in a prior PR review; always reuse the constant.
6. **Add a new `<article>` block** inside `events-row`, following this shape:
   - `className="events-col"`
   - `onClick` / `onKeyDown` (Enter or Space) both calling `openModal(image, descriptionConstant)`
   - `tabIndex={0}`, `role="button"`
   - `aria-label` ending in "Press Enter or Space to view full flyer."
   - `itemScope itemType="https://schema.org/Event"`
   - `<meta itemProp="name" .../>`, `<meta itemProp="startDate" .../>`, `<meta itemProp="endDate" .../>` using ISO 8601 with the `-04:00`/`-05:00` offset matching EDT/EST for the event's actual date
   - `<img src={...} alt={descriptionConstant} itemProp="image" />`
   - Place newest/upcoming events near the top of `events-row`, matching current ordering (most current events first).
7. **Older, already-past one-off events** use a simpler plain `<div className="events-col">` without schema markup — only use the full `<article>`/schema pattern for current or upcoming events.
8. **Validate**: run `npm run build` from the repo root and confirm no new TypeScript/ESLint errors in `src/pages/events/index.tsx`.
9. **Clean up stray duplicate images** left at the repo root from the attachment/rename step — confirm with `grep_search` that the old filename isn't referenced anywhere before deleting.

## Branch / PR Convention

- Pull latest `main` before branching: `git checkout main && git pull origin main`.
- Branch name: `feat/<event-name>-event` (e.g. `feat/nature-nurture-2026-event`).
- Commit message: short summary line, then bullets for image add + wiring + accessibility/schema notes.
- Open a PR against `main` with a `## Summary` and `## Validation` section.
- Wait ~5 minutes after PR creation before polling for Copilot review comments, then address, reply, and resolve each thread before merging (see user's general PR workflow notes).

## Common Review Feedback To Avoid Up Front

- Don't duplicate the alt/description string across `onClick` and `onKeyDown` — use a shared constant (see step 5).
- Don't guess an event's `endDate` without a stated duration; estimate reasonably (e.g. 60–90 min) and say so isn't necessary in code, but keep it plausible.
- Keep the image `alt` text descriptive of the flyer content, not just the event name.
