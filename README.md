# Engineering Portfolio for GitHub Pages

Static portfolio scaffold for an engineering or mechatronics student. The site is designed to act as a polished front-end to your GitHub repositories rather than a replacement for them.

It is intentionally simple:

- Static HTML, CSS, and JavaScript only
- No framework
- No build tooling
- Easy to host on GitHub Pages
- Easy to edit by hand later

## File Structure

```text
/
|-- index.html
|-- projects/
|   |-- warman-attempts.html
|   |-- mecanum-wheel-study.html
|   |-- robo-arm.html
|   |-- test-bench-vehicle.html
|   |-- camera-study.html
|   |-- johncar.html
|   |-- cycloidial-study.html
|   `-- solid-connections.html
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   |-- main.js
|   |   |-- project-page.js
|   |   `-- shared.js
|   `-- images/
|       `-- projects/
|           |-- warman-attempts/
|           |-- mecanum-wheel-study/
|           |-- robo-arm/
|           |-- test-bench-vehicle/
|           |-- camera-study/
|           |-- johncar/
|           |-- cycloidial-study/
|           `-- solid-connections/
|-- data/
|   |-- site.js
|   `-- projects.js
`-- README.md
```

## What To Edit First

Start with [data/site.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/site.js).

Replace the placeholder values for:

- `[Your Name]`
- `[Degree / University]`
- `[Short Bio]`
- `[GitHub URL]`
- `[LinkedIn URL]`
- `[Resume URL]`
- email and location if desired

Then update [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js) with your real project details and links.

## How To Add A New Project

1. Add a new project object to the `projects` array in [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js).
2. Create a new HTML file in `/projects/` using one of the existing project pages as the pattern.
3. Set the page's `data-project-slug` value to match the new project's `slug`.
4. Add images to `assets/images/projects/<your-slug>/`.
5. Point `thumbnail`, `heroImage`, and `gallery` fields to those image paths.
6. Add resource links like repo, CAD, drawings, print files, docs, or demo URLs in the `links` object.

Minimal project object shape:

```js
{
  slug: "example-project",
  featured: true,
  title: "Example Project",
  subtitle: "One-line summary",
  year: "2026",
  status: "Prototype",
  tags: ["Robotics", "CAD", "Testing"],
  thumbnail: "assets/images/projects/example-project/thumb.svg",
  heroImage: "assets/images/projects/example-project/hero.svg",
  summary: "Short card summary for the home page.",
  overview: [
    "Paragraph one.",
    "Paragraph two."
  ],
  problem: [
    "What problem or challenge this project tackled."
  ],
  role: [
    "Mechanical design",
    "Documentation",
    "Prototype assembly"
  ],
  process: [
    {
      title: "Concept and architecture",
      body: "Describe the engineering process here."
    }
  ],
  technicalHighlights: [
    {
      title: "Key mechanism",
      body: "Explain the interesting technical detail."
    }
  ],
  tools: ["SolidWorks", "Fusion 360", "Python"],
  links: {
    repo: "https://github.com/...",
    cad: "https://github.com/.../tree/main/cad",
    drawings: "https://github.com/.../tree/main/drawings",
    print: "https://github.com/.../tree/main/print-files",
    docs: "https://github.com/.../tree/main/docs",
    media: "https://www.youtube.com/..."
  },
  gallery: [
    {
      src: "assets/images/projects/example-project/view-01.svg",
      alt: "Short alt text",
      caption: "Optional caption"
    }
  ],
  lessonsLearned: [
    "What changed after testing or review."
  ],
  futureWork: [
    "What you would improve next."
  ],
  relatedProjects: ["another-project-slug"]
}
```

## How To Add Images

1. Put project images in `assets/images/projects/<slug>/`.
2. Use descriptive filenames like `assembly-01.jpg`, `cad-exploded.png`, or `test-rig-side-view.jpg`.
3. Add each image to the project's `gallery` array in [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js).
4. Update `thumbnail` and `heroImage` to whichever images you want shown on cards and at the top of the project page.

Notes:

- Mixed aspect ratios are supported.
- The gallery uses a masonry-style layout.
- Clicking an image opens the lightbox viewer.
- SVG placeholders are included in this scaffold so the site works immediately before you add real images.

## How To Update Repo And Asset Links

Each project has a `links` object in [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js).

Supported link targets include:

- GitHub repo root
- Specific folders inside a repo
- PDF drawings
- STL or print-file folders
- Documentation folders
- Demo videos or external media pages

If you leave a link empty or set it to `null`, that button is hidden automatically on the project page.

## How Project Pages Work

Each file inside `/projects/` is a lightweight shell. The detailed content is rendered from [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js) by [assets/js/project-page.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/assets/js/project-page.js).

This means:

- you keep one reusable layout pattern
- each project still has its own internal page URL
- content stays easy to edit from one data source

## Local Preview

Because this is a static site, you can preview it in several simple ways:

1. Open `index.html` directly in a browser for a quick check.
2. Or use a simple static server if you prefer cleaner routing behavior, for example from VS Code Live Server or Python's basic HTTP server.

No build step is required.

## Deploy With GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)` folder.
6. Save the settings.

For a user site repository like `your-username.github.io`, the site will normally publish at the root domain.

## Editing Notes

- Personal profile data lives in [data/site.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/site.js).
- Project content lives in [data/projects.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/data/projects.js).
- Shared layout behavior lives in [assets/js/shared.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/assets/js/shared.js).
- Home-page rendering lives in [assets/js/main.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/assets/js/main.js).
- Project-page rendering lives in [assets/js/project-page.js](/c:/Users/John/Documents/GitHub/John-A-Chen.github.io/assets/js/project-page.js).

## Replace Placeholder Images

The included SVG artwork is there to show the intended layout and gallery behavior. Replace it with:

- prototype photos
- CAD renders
- technical drawings
- annotated screenshots
- fabrication images
- test footage stills

The more real engineering artefacts you add, the stronger the project pages will feel.
