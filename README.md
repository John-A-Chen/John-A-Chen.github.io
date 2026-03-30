# John Alfred Chen Portfolio

Static GitHub Pages portfolio for mechatronics, robotics, CAD, and engineering case studies.

## Tech Stack

- Static `HTML`, `CSS`, `JavaScript`
- No backend
- No build step
- GitHub Pages compatible

## Site Structure

- `index.html` - Home
- `portfolio.html` - Project archive
- `resume.html` - Resume page
- `contact.html` - Contact page
- `projects/*.html` - Project case-study page shells
- `assets/css/styles.css` - Global styles
- `assets/js/*.js` - Page scripts and shared UI logic
- `data/site.js` - Profile/contact/resume content
- `data/projects.js` - Project content and links
- `data/repo-images.js` - Imported project image catalog

## Current UX

- Left fixed dock navigation with hover magnification (`assets/js/dock.js`)
- Header random-project button
- Portfolio filter supports `Solo` and `Project`
- Project pages render a left/right carousel gallery
- Project cards use a random thumbnail from each project's own image pool

## Project Images

Project card thumbnails are selected at runtime from:

1. `thumbnail`
2. `heroImage`
3. `gallery[].src`
4. `data/repo-images.js` entries for that project slug

If an image fails to load, a fallback image is used automatically.

## Editing Projects

1. Update or create a project in `data/projects.js`.
2. Keep `slug` aligned with `projects/<slug>.html`.
3. Update `links` (`repo`, `cad`, `drawings`, `print`, `docs`, `media`).
4. Set `projectType` to `Solo` or `Project`.
5. Add image paths in `thumbnail`, `heroImage`, and/or `gallery`.

## Editing Profile And Contact

Edit `data/site.js` for:

- name, degree, tagline
- socials and external links
- contact email
- map embed URL (`mapEmbedUrl`)

## GitHub Pages Deploy

1. Push to `main`.
2. Open repository Settings -> Pages.
3. Source: `Deploy from branch`.
4. Branch: `main`, folder: `/ (root)`.

No extra tooling required.
