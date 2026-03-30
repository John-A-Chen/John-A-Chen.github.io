# John Alfred Chen Portfolio (GitHub Pages)

Static multi-page engineering portfolio for mechatronics/robotics work.

This site is:

- Static HTML/CSS/JavaScript
- GitHub Pages friendly
- No React, no build process, no backend

## Pages

- `index.html` - Home
- `portfolio.html` - Project archive
- `resume.html` - Resume timeline + CV download
- `contact.html` - Contact + Ultimo/Sydney map
- `projects/*.html` - Individual case-study pages

## Navigation

- Left vertical dock with magnification effect: `assets/js/dock.js`
- Dock includes: Home, Portfolio, Resume, Contact, GitHub
- Dock also includes: LinkedIn
- Top header uses a single **Random Project** button
- Header also includes a scrolling tech badge logo loop: `assets/js/logo-loop.js`
- Click spark interaction effect on clickable UI: `assets/js/click-spark.js`

## Data Files

- `data/site.js` - profile, links, resume timeline, map settings
- `data/projects.js` - all project content and metadata

## Project Pages

- Gallery is a left/right carousel with caption under the active image.
- Primary **Open GitHub Repository** button is placed in the hero section.
- Resource links remain available in the main Files and Resources section.

## Project Type Sorting (Solo / Project Only)

Each project now supports:

```js
projectType: "Solo" // or "Project"
```

This is used in:

- Portfolio filtering (`Solo` and `Project` only)
- Card metadata display
- Portfolio ordering (Solo first, then Project)

## Add / Edit a Project

1. Add or edit an entry in `data/projects.js`.
2. Ensure each project has a matching page shell at `projects/<slug>.html`.
3. Add images in `assets/images/projects/<slug>/`.
4. Update `links` for repo/CAD/drawings/print/docs/media.
5. Set `projectType` to `"Solo"` or `"Project"`.

## Resume

- Resume page content comes from `siteProfile.resumeExperience` and `siteProfile.resumeEducation` in `data/site.js`.
- CV download file path is `docs/John_A_Chen_CV.pdf`.

## Contact

- Map URL is configured with `siteProfile.mapEmbedUrl` in `data/site.js`.
- Current target is Ultimo, Sydney.
- Map embed is tinted to match the site blue theme in `assets/css/styles.css`.
- Contact form is static; it opens mail client if `contactEmail` is set.

## Deploy on GitHub Pages

1. Push repository to GitHub.
2. Repository Settings -> Pages.
3. Deploy from branch: `main`, folder `/ (root)`.
4. Save.

No build step required.
