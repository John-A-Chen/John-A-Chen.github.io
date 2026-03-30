import { siteProfile } from "../../data/site.js";
import {
  getProjectBySlug,
  projectLinkLabels,
  projects
} from "../../data/projects.js";
import { repoImages } from "../../data/repo-images.js";
import { initBorderGlow } from "./border-glow.js";
import {
  createLightboxTrigger,
  createProjectCard,
  createResourceButtons,
  initLightbox,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

const slug = document.body.dataset.projectSlug;
const project = getProjectBySlug(slug);

const headerRoot = document.getElementById("project-header");
const galleryRoot = document.getElementById("project-gallery");
const contentRoot = document.getElementById("project-content");
const sidebarRoot = document.getElementById("project-sidebar");
const relatedRoot = document.getElementById("related-projects");

if (!project) {
  document.title = `Project Not Found | ${siteProfile.name}`;
  headerRoot.innerHTML = `
    <article class="empty-state">
      <h1>Project not found</h1>
      <p>This page is missing a matching entry in <code>data/projects.js</code>.</p>
      <a class="button" href="../index.html#projects">Back to project archive</a>
    </article>
  `;
} else {
  document.title = `${project.title} | ${siteProfile.name}`;
  renderProjectPage(project);
  populateSharedProfile(siteProfile);
  initProjectBorderGlow();
  initRevealAnimations();
  initLightbox();
}

function initProjectBorderGlow() {
  initBorderGlow(
    ".project-hero, .content-section, .sidebar-card, .project-card",
    {
      edgeSensitivity: 30,
      glowColor: "200 90 88",
      borderRadius: 22,
      glowRadius: 32,
      glowIntensity: 1,
      coneSpread: 25,
      animated: false,
      colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
      fillOpacity: 0.32
    }
  );
}

function renderProjectPage(activeProject) {
  headerRoot.innerHTML = "";

  const intro = document.createElement("article");
  intro.className = "project-hero reveal";
  intro.innerHTML = `
    <a class="breadcrumb-link" href="../index.html#projects">Back to Project Archive</a>
    <div class="project-hero-grid">
      <div class="project-hero-copy">
        <p class="eyebrow">${activeProject.year} / ${activeProject.status}</p>
        <h1>${activeProject.title}</h1>
        <p class="project-subtitle">${activeProject.subtitle}</p>
        <p class="project-summary">${activeProject.summary}</p>
        <ul class="tag-list">${activeProject.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <div class="project-action-row"></div>
      </div>
      <figure class="project-hero-media">
        <button
          class="gallery-trigger hero-trigger"
          type="button"
          data-lightbox-group="${activeProject.slug}"
          data-lightbox-src="../${activeProject.heroImage}"
          data-lightbox-alt="${activeProject.title} hero image"
          data-lightbox-caption="${activeProject.title} hero image"
          aria-label="Open project hero image"
        >
          <img src="../${activeProject.heroImage}" alt="${activeProject.title} hero image" />
        </button>
      </figure>
    </div>
  `;

  const actionRow = intro.querySelector(".project-action-row");
  actionRow.appendChild(createResourceButtons(activeProject.links, projectLinkLabels));
  headerRoot.appendChild(intro);

  renderGallery(activeProject);
  renderContent(activeProject);
  renderSidebar(activeProject);
  renderRelated(activeProject);
}

function renderGallery(activeProject) {
  const importedRepoImages = repoImages[activeProject.slug] || [];
  const galleryItems = [...activeProject.gallery, ...importedRepoImages].filter(
    (item, index, allItems) =>
      index === allItems.findIndex((candidate) => candidate.src === item.src)
  );

  galleryRoot.innerHTML = `
    <div class="section-heading reveal">
      <p class="eyebrow">Gallery</p>
      <h2>Visual record of the design, analysis, and iteration process, including imported repository media.</h2>
    </div>
  `;

  const gallery = document.createElement("div");
  gallery.className = "masonry-gallery reveal";

  galleryItems.forEach((image) => {
    gallery.appendChild(
      createLightboxTrigger(
        {
          ...image,
          src: `../${image.src}`
        },
        activeProject.slug
      )
    );
  });

  galleryRoot.appendChild(gallery);
}

function renderContent(activeProject) {
  contentRoot.innerHTML = `
    <section class="content-section reveal">
      <p class="eyebrow">Overview</p>
      <h2>Project overview</h2>
      ${activeProject.overview.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Motivation / Problem</p>
      <h2>What problem this project was trying to solve</h2>
      ${activeProject.problem.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Role And Contributions</p>
      <h2>My role in the work</h2>
      <ul class="content-list">
        ${activeProject.role.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Engineering Process</p>
      <h2>How the design evolved</h2>
      <div class="process-grid">
        ${activeProject.process
          .map(
            (step) => `
              <article class="process-card">
                <h3>${step.title}</h3>
                <p>${step.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Technical Highlights</p>
      <h2>Engineering details worth calling out</h2>
      <div class="highlight-grid">
        ${activeProject.technicalHighlights
          .map(
            (highlight) => `
              <article class="highlight-card">
                <h3>${highlight.title}</h3>
                <p>${highlight.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Files And Resources</p>
      <h2>Direct links back to the source material</h2>
      <p>Use these links to move from the polished case study back into the original repository, CAD folders, documentation, fabrication files, and media.</p>
      <div id="main-resource-buttons"></div>
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Lessons Learned</p>
      <h2>What changed after iteration and review</h2>
      <ul class="content-list">
        ${activeProject.lessonsLearned.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="content-section reveal">
      <p class="eyebrow">Future Work</p>
      <h2>Next directions</h2>
      <ul class="content-list">
        ${activeProject.futureWork.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;

  const mainResourceButtons = document.getElementById("main-resource-buttons");
  mainResourceButtons.appendChild(
    createResourceButtons(activeProject.links, projectLinkLabels)
  );
}

function renderSidebar(activeProject) {
  const tools = activeProject.tools
    .map((tool) => `<li class="tool-chip">${tool}</li>`)
    .join("");

  sidebarRoot.innerHTML = `
    <div class="sidebar-stack reveal">
      <section class="sidebar-card">
        <p class="mono-label">Project Snapshot</p>
        <dl class="meta-list">
          <div>
            <dt>Year</dt>
            <dd>${activeProject.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>${activeProject.status}</dd>
          </div>
          <div>
            <dt>Case study URL</dt>
            <dd>/projects/${activeProject.slug}.html</dd>
          </div>
        </dl>
      </section>

      <section class="sidebar-card">
        <p class="mono-label">Tools And Software</p>
        <ul class="tool-list">${tools}</ul>
      </section>

      <section class="sidebar-card">
        <p class="mono-label">Archive Navigation</p>
        <div class="sidebar-links">
          <a class="text-link" href="../index.html#projects">Back to all projects</a>
          <a class="text-link" data-profile-link="github" href="#">Open GitHub profile</a>
          <a class="text-link" data-profile-link="resume" href="#">Open resume</a>
        </div>
      </section>
    </div>
  `;
}

function renderRelated(activeProject) {
  const relatedProjects = activeProject.relatedProjects
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  relatedRoot.innerHTML = `
    <div class="section-heading reveal">
      <p class="eyebrow">Related Projects</p>
      <h2>Other projects connected by mechanisms, testing, or robotics workflow.</h2>
    </div>
  `;

  const grid = document.createElement("div");
  grid.className = "related-grid";

  relatedProjects.forEach((relatedProject) => {
    grid.appendChild(
      createProjectCard(relatedProject, {
        compact: true,
        hrefPrefix: "../",
        showSummary: false
      })
    );
  });

  relatedRoot.appendChild(grid);
}
