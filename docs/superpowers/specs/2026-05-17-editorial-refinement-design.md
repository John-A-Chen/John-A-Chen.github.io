# Editorial Refinement — Design Spec
Date: 2026-05-17

## Goal

Make the portfolio feel like a thoughtful, intentional site rather than a generic vibe-coded template. The reference aesthetic is clean techy company sites (Apple, NVIDIA, Sony, Google Store): dark background, monumental typography, images doing the heavy lifting, very little decorative UI chrome.

The constraint is: keep it simple. This is a portfolio with projects. We are not adding features or restructuring pages — only refining the CSS in `assets/css/styles.css`.

## Core Principles

1. **Remove visual noise** — borders only where they earn their place; surfaces separated by contrast, not lines.
2. **Scale up what matters** — type as a visual element, not just labels; headlines dominate.
3. **Generous whitespace** — sections breathe; elements don't crowd each other.
4. **Images lead, UI follows** — project cards let the image be the thing you actually see.

## Changes

### Typography

- Hero `h1` `line-height`: `0.98` → `0.92` — tighter stacking at large size, more confident
- Section `h2` font-size: bump via `clamp` upper bound by ~0.3rem, add more `margin-bottom` (`0.72rem` → `1.1rem`) so headings introduce rather than label
- `eyebrow` `letter-spacing`: `0.04em` → `0.08em` — clearer hierarchy separation from body text
- No font changes — IBM Plex Mono / IBM Plex Sans / Space Grotesk stay as-is

### Surfaces & Borders

- Default `--border` value: `rgba(188, 214, 238, 0.3)` → `rgba(188, 214, 238, 0.10)` — near-invisible by default, separation comes from background contrast
- Card `box-shadow` gets a slightly more pronounced soft shadow to define edges without a visible border line
- Hover border color: `rgba(132, 205, 255, 0.62)` → `rgba(132, 205, 255, 0.45)` — subtle accent, not a global brightening
- Focus area panels on home page (`.focus-panels .info-panel` or equivalent): remove box treatment, replace with a `3px` left border accent line in `--accent` color — editorial block style

### Project Cards

- `project-card-media` aspect ratio: `16 / 10` → `3 / 2` — slightly taller, images have more visual weight
- `project-card-body` padding: `1.25rem` → `1.5rem` — roomier feel
- `project-card-body h3` font-size: add explicit `font-size: 1.1rem` to ensure title reads clearly in 3-column grid
- Card `border-radius` (`--radius: 22px`): no change — keep rounded feel

### Spacing

- `.section` padding: `3.4rem 0` → `4.5rem 0` — sections breathe more
- `.hero-section` padding-top: `4.7rem` → `6rem` — headline gets more room at top
- `.hero-copy` padding: `2.5rem` → `3rem` — slightly more interior air

## Scope

- **Only file changed:** `assets/css/styles.css`
- **No HTML changes**
- **No layout or grid changes** — same structure, same columns, same components
- **No new dependencies**

## Success Criteria

- The site reads as intentional and refined, not assembled from a UI kit
- Project images are the visual focus of the portfolio grid
- Typography hierarchy is immediately clear: eyebrow → heading → body
- Borders/chrome feel like they belong rather than boxing everything in
- A person who did HTML/CSS in high school can read the diff and understand every change
