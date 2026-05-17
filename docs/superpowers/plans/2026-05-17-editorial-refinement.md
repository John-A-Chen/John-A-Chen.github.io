# Editorial Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine `assets/css/styles.css` so the portfolio reads as intentional and premium rather than generic — less visual chrome, stronger typography, more breathing room, images as the focal point of project cards.

**Architecture:** All changes are isolated to `assets/css/styles.css`. No HTML, JS, or layout changes. Each task targets a named section of the spec (typography, surfaces, cards, spacing) and produces a diff that can be read and understood independently.

**Tech Stack:** Static CSS, GitHub Pages, no build step — open `index.html` directly in a browser to verify.

---

> **Note on testing:** This is CSS-only. There are no unit tests to write. Each task ends with a visual verification step: open the relevant page in a browser and confirm the change looks right before committing.

---

### Task 1: Eyebrow letter-spacing

**Files:**
- Modify: `assets/css/styles.css` (around line 183–189)

The `.eyebrow` class (and shared monospace label styles) currently has `letter-spacing: 0.04em`. Increasing this separates eyebrow text more visually from body text, sharpening the hierarchy.

- [ ] **Step 1: Apply the change**

Find this rule (around line 183):
```css
.brand-subtitle,
.footer-copy,
.project-card-meta,
.mono-label,
.eyebrow {
  color: var(--muted);
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

Change `letter-spacing: 0.04em` → `letter-spacing: 0.08em`.

- [ ] **Step 2: Verify visually**

Open `index.html` in a browser. The "Focus Areas" eyebrow above the home page heading and "Portfolio" eyebrow on `portfolio.html` should have slightly more spaced-out caps, clearly distinct from paragraph text.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: increase eyebrow letter-spacing for cleaner hierarchy"
```

---

### Task 2: Typography — headline line-height and h2 size

**Files:**
- Modify: `assets/css/styles.css` (around line 479–511)

Two changes here: tighter `line-height` on the hero `h1` (makes large type stack more confidently) and a larger upper bound on `h2` size with more margin below it (headings feel like they're introducing sections, not just labeling them).

- [ ] **Step 1: Tighten hero h1 line-height**

Find this rule (around line 479):
```css
.hero-copy h1,
.section-heading h2,
.project-hero h1,
.content-section h2 {
  margin: 0 0 0.72rem;
  font-family: "Space Grotesk", sans-serif;
  line-height: 0.98;
  letter-spacing: -0.04em;
}
```

Change `line-height: 0.98` → `line-height: 0.92` and `margin: 0 0 0.72rem` → `margin: 0 0 1.1rem`.

- [ ] **Step 2: Bump section h2 upper clamp**

Find this rule (around line 508):
```css
.section-heading h2,
.content-section h2 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
}
```

Change the upper bound: `clamp(1.9rem, 4vw, 2.6rem)` → `clamp(1.9rem, 4vw, 3rem)`.

- [ ] **Step 3: Verify visually**

Open `index.html`. The "John Alfred Chen" hero heading should sit tighter (letters closer vertically). Open `portfolio.html` — the "Project Archive" heading should be slightly larger and have more air below it before the subtitle text.

- [ ] **Step 4: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: tighter headline line-height, larger h2 with more breathing room"
```

---

### Task 3: Section and hero spacing

**Files:**
- Modify: `assets/css/styles.css` (around lines 83–85, 439–441, 471–476)

Three spacing bumps: section padding, hero top padding, and hero-copy interior padding. Sections currently feel compressed — these changes give the layout more monumental air.

- [ ] **Step 1: Section padding**

Find (around line 83):
```css
.section {
  padding: 3.4rem 0;
}
```

Change to:
```css
.section {
  padding: 4.5rem 0;
}
```

- [ ] **Step 2: Hero section top padding**

Find (around line 439):
```css
.hero-section {
  padding-top: 4.7rem;
}
```

Change to:
```css
.hero-section {
  padding-top: 6rem;
}
```

- [ ] **Step 3: Hero copy interior padding**

Find (around line 471):
```css
.hero-copy {
  padding: 2.5rem;
  display: grid;
  align-content: start;
  gap: 0.7rem;
}
```

Change `padding: 2.5rem` → `padding: 3rem`.

- [ ] **Step 4: Verify visually**

Open `index.html`. The hero section should have noticeably more space above the headline. Scroll down — sections should feel less packed together, more like distinct moments on the page rather than one continuous block.

- [ ] **Step 5: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: increase section, hero, and card padding for more breathing room"
```

---

### Task 4: Reduce default border opacity

**Files:**
- Modify: `assets/css/styles.css` (line 7 — `:root`)

The `--border` variable is used throughout the site. Dropping it from `0.3` to `0.10` opacity makes surfaces separate by background contrast rather than visible lines — the key move that makes the design feel less "UI kit."

- [ ] **Step 1: Apply the change**

Find in `:root` (line 7):
```css
--border: rgba(188, 214, 238, 0.3);
```

Change to:
```css
--border: rgba(188, 214, 238, 0.10);
```

- [ ] **Step 2: Verify visually**

Open `index.html`, `portfolio.html`, `experience.html`. Cards should still be clearly defined (by their background color and shadow), but the border lines should be near-invisible rather than a distinct edge. If any element looks like it's "floating" in a confusing way, note it.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: reduce default border opacity — surfaces defined by contrast not lines"
```

---

### Task 5: Soften hover border highlight

**Files:**
- Modify: `assets/css/styles.css` (around line 835–838)

Currently when you hover any card, the border jumps to `rgba(132, 205, 255, 0.62)` — a noticeable blue flash that makes everything feel equally interactive. Softening it to `0.45` keeps the feedback subtle and intentional.

- [ ] **Step 1: Apply the change**

Find (around line 835):
```css
  border-color: rgba(132, 205, 255, 0.62);
  background: rgba(35, 73, 114, 0.88);
}
```

Change `rgba(132, 205, 255, 0.62)` → `rgba(132, 205, 255, 0.45)`.

- [ ] **Step 2: Verify visually**

Open `index.html` and hover over the hero cards and focus panels. The hover state should feel like a gentle acknowledgment rather than a bright flash.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: soften card hover border to feel intentional rather than reactive"
```

---

### Task 6: Focus panels — editorial block style

**Files:**
- Modify: `assets/css/styles.css` (around line 933–936)

The three "Focus Areas" panels on the home page currently look identical to every other card on the site. Replacing the box treatment with a left accent line makes them feel like editorial content blocks — closer to how Apple product pages introduce feature categories.

- [ ] **Step 1: Apply the change**

Find (around line 933):
```css
.focus-panels .info-panel {
  text-align: center;
  height: 100%;
}
```

Replace with:
```css
.focus-panels .info-panel {
  text-align: left;
  height: 100%;
  background: transparent;
  border-color: transparent;
  box-shadow: none;
  border-left: 3px solid var(--accent);
  border-radius: 0;
  padding-left: 1.25rem;
}
```

- [ ] **Step 2: Verify visually**

Open `index.html`. The three focus area cards under "Core areas I am currently building depth in" should now appear as clean left-bordered text blocks rather than frosted glass boxes. The heading and body text should align left.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: focus panels as editorial accent-bordered blocks, not generic cards"
```

---

### Task 7: Project card — taller image and roomier body

**Files:**
- Modify: `assets/css/styles.css` (around lines 845–871)

Two changes: the image thumbnail becomes taller (`3/2` aspect ratio instead of `16/10`) so project images have more visual weight, and the card body gets more interior padding so text isn't cramped below it.

- [ ] **Step 1: Image aspect ratio**

Find (around line 845):
```css
.project-card-media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(123, 209, 255, 0.18), rgba(92, 174, 247, 0.08));
}
```

Change `aspect-ratio: 16 / 10` → `aspect-ratio: 3 / 2`.

- [ ] **Step 2: Card body padding and h3 size**

Find (around line 867):
```css
.project-card-body {
  display: grid;
  gap: 0.9rem;
  padding: 1.25rem;
}
```

Change `padding: 1.25rem` → `padding: 1.5rem`.

Then find (around line 873):
```css
.project-card-body h3,
.content-list,
.sidebar-card h3,
.contact-card h3,
.process-card h3,
.highlight-card h3 {
  margin: 0;
}
```

Add an explicit `font-size` rule for project card h3 specifically, directly after this block:
```css
.project-card-body h3 {
  font-size: 1.1rem;
}
```

- [ ] **Step 3: Verify visually**

Open `portfolio.html`. The project grid should show taller images with more visual presence. Card titles should read clearly even in the 3-column grid. The body text below each title should have more breathing room.

- [ ] **Step 4: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: taller project card images, roomier body padding, explicit title size"
```

---

### Task 8: Deepen box-shadow for better surface definition

**Files:**
- Modify: `assets/css/styles.css` (line 14 — `:root`)

With borders now near-invisible, box-shadow carries more of the work of separating cards from the background. A slightly deeper shadow makes surfaces feel grounded without adding visual noise.

- [ ] **Step 1: Apply the change**

Find in `:root` (line 14):
```css
--shadow: 0 20px 48px rgba(8, 29, 54, 0.22);
```

Change to:
```css
--shadow: 0 24px 56px rgba(8, 29, 54, 0.32);
```

- [ ] **Step 2: Verify visually**

Open `index.html`. Cards should feel like they have slightly more depth — sitting above the background rather than flush against it. If it looks too heavy, the alpha can be dialed back to `0.28`.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "refine: deepen card shadow to compensate for lighter borders"
```

---

## Completion Checklist

After all tasks:
- [ ] Open `index.html` — hero headline sits tight, eyebrows are clearly different from body text, focus panels have left accent lines, sections breathe
- [ ] Open `portfolio.html` — project images are taller and more prominent, card bodies are roomier, grid reads as editorial not utilitarian
- [ ] Open `experience.html` — spacing feels consistent with the rest of the site
- [ ] Open any project page (e.g. `projects/warman-attempts.html`) — no regressions in the case study layout
