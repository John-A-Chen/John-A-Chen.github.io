import { siteProfile } from "../../data/site.js";
import {
  getProjectBySlug,
  projectLinkLabels,
  projects
} from "../../data/projects.js";
import { repoImages } from "../../data/repo-images.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  createProjectCard,
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile,
  resolveImagePath
} from "./shared.js";

let lightboxEl = null;
let lightboxItems = [];
let lightboxIndex = 0;

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();
initCursorPlus();

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
      <a class="button" href="../portfolio.html">Back to project archive</a>
    </article>
  `;
} else {
  document.title = `${project.title} | ${siteProfile.name}`;
  renderProjectPage(project);
  populateSharedProfile(siteProfile);
  initRevealAnimations();
}

function removeFileType(text) {
  return text.replace(/\.(png|jpe?g|gif|webp|bmp|tiff?)$/i, "");
}

function cleanupCaption(rawText, fallback) {
  if (!rawText) {
    return fallback;
  }

  const cleaned = rawText
    .replace(/^Imported from repository:\s*/i, "")
    .replace(/^[\w-]+\s+repo image:\s*/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const noType = removeFileType(cleaned);
  if (!noType) {
    return fallback;
  }

  return noType.charAt(0).toUpperCase() + noType.slice(1);
}

function resolveProjectAsset(path) {
  const resolved = resolveImagePath(path, "../");
  return resolved;
}

function getYouTubeVideoUrlFromImage(src) {
  if (!src) return null;
  const match = src.match(/(?:img\.youtube\.com\/vi\/)([^/]+)\//i);
  if (!match || !match[1]) return null;
  return `https://www.youtube.com/watch?v=${match[1]}`;
}

function openGalleryItem(items, index) {
  const item = items[index];
  if (!item) {
    return;
  }

  const videoUrl = getYouTubeVideoUrlFromImage(item.src);
  if (videoUrl) {
    window.open(videoUrl, "_blank", "noopener,noreferrer");
    return;
  }

  openLightbox(items, index);
}

function buildCaseStudyUrl(slug) {
  const configuredBase = siteProfile.links?.website || "";
  const liveOrigin =
    window.location.origin && window.location.origin !== "null"
      ? window.location.origin
      : "";
  const fallbackBase = "https://john-a-chen.github.io";
  const base = configuredBase || liveOrigin || fallbackBase;
  return `${base.replace(/\/+$/, "")}/projects/${slug}.html`;
}

function uniqueBySource(items) {
  return items.filter(
    (item, index, allItems) =>
      index === allItems.findIndex((candidate) => candidate.src === item.src)
  );
}

function closeLightbox() {
  if (lightboxEl) {
    lightboxEl.remove();
    lightboxEl = null;
  }
  document.removeEventListener("keydown", lightboxKeyHandler);
}

function lightboxKeyHandler(e) {
  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowLeft") {
    stepLightbox(-1);
  } else if (e.key === "ArrowRight") {
    stepLightbox(1);
  }
}

function stepLightbox(direction) {
  lightboxIndex =
    (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
  syncLightboxImage();
}

function syncLightboxImage() {
  if (!lightboxEl) return;
  const item = lightboxItems[lightboxIndex];
  const img = lightboxEl.querySelector(".lightbox-img");
  const caption = lightboxEl.querySelector(".lightbox-caption");
  const counter = lightboxEl.querySelector(".lightbox-counter");
  const prevBtn = lightboxEl.querySelector(".lightbox-nav.prev");
  const nextBtn = lightboxEl.querySelector(".lightbox-nav.next");

  img.src = resolveProjectAsset(item.src);
  img.alt = item.alt || "";
  caption.textContent = cleanupCaption(item.caption || item.alt, "");
  counter.textContent = `${lightboxIndex + 1} / ${lightboxItems.length}`;

  const single = lightboxItems.length <= 1;
  prevBtn.hidden = single;
  nextBtn.hidden = single;
}

function openLightbox(items, startIndex) {
  if (lightboxEl) closeLightbox();

  lightboxItems = items;
  lightboxIndex = startIndex;

  const el = document.createElement("div");
  el.className = "lightbox";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-label", "Image viewer");
  el.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <button class="lightbox-close" aria-label="Close">&times;</button>
    <button class="lightbox-nav prev" aria-label="Previous image">&#8249;</button>
    <div class="lightbox-content">
      <img class="lightbox-img" src="" alt="" />
      <p class="lightbox-caption"></p>
      <p class="lightbox-counter"></p>
    </div>
    <button class="lightbox-nav next" aria-label="Next image">&#8250;</button>
  `;

  el.querySelector(".lightbox-backdrop").addEventListener("click", closeLightbox);
  el.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  el.querySelector(".lightbox-nav.prev").addEventListener("click", () => stepLightbox(-1));
  el.querySelector(".lightbox-nav.next").addEventListener("click", () => stepLightbox(1));

  document.body.appendChild(el);
  lightboxEl = el;

  document.addEventListener("keydown", lightboxKeyHandler);
  syncLightboxImage();
}

function collectProjectGalleryItems(activeProject) {
  const seedItems = [];

  if (activeProject.heroImage) {
    seedItems.push({
      src: activeProject.heroImage,
      alt: `${activeProject.title} hero image`,
      caption: `${activeProject.title} hero image`
    });
  }

  if (activeProject.thumbnail) {
    seedItems.push({
      src: activeProject.thumbnail,
      alt: `${activeProject.title} thumbnail`,
      caption: `${activeProject.title} thumbnail`
    });
  }

  const customGallery = (activeProject.gallery || []).filter((item) => item?.src);
  const importedGallery = (repoImages[activeProject.slug] || []).filter(
    (item) => item?.src
  );

  return uniqueBySource([...seedItems, ...customGallery, ...importedGallery]);
}

function renderProjectPage(activeProject) {
  const galleryItems = collectProjectGalleryItems(activeProject);
  const heroItem = galleryItems[0] || null;

  headerRoot.innerHTML = "";

  const intro = document.createElement("article");
  intro.className = "project-hero reveal";

  intro.innerHTML = `
    <div class="project-hero-grid">
      <div class="project-hero-copy">
        <p class="eyebrow">${activeProject.year} / ${activeProject.status}</p>
        <h1>${activeProject.title}</h1>
        <div class="project-copy-text">
          <p class="project-subtitle">${activeProject.subtitle}</p>
          <p class="project-summary">${activeProject.summary}</p>
        </div>
        <ul class="tag-list">${activeProject.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <div class="project-action-row"></div>
      </div>
      ${
        heroItem
          ? `<figure class="project-hero-media"><img src="${resolveProjectAsset(
              heroItem.src
            )}" alt="${heroItem.alt || `${activeProject.title} image`}" /></figure>`
          : `<figure class="project-hero-media is-empty" aria-hidden="true"></figure>`
      }
    </div>
  `;

  const actionRow = intro.querySelector(".project-action-row");
  if (activeProject.links?.repo) {
    const repoBtn = document.createElement("a");
    repoBtn.className = "button button-repo-primary button-full";
    repoBtn.href = activeProject.links.repo;
    repoBtn.target = "_blank";
    repoBtn.rel = "noreferrer";
    repoBtn.textContent = "View Repository";
    actionRow.appendChild(repoBtn);
  }
  if (activeProject.links?.website) {
    const websiteBtn = document.createElement("a");
    websiteBtn.className = "button button-full";
    websiteBtn.href = activeProject.links.website;
    websiteBtn.target = "_blank";
    websiteBtn.rel = "noreferrer";
    websiteBtn.textContent = "View Project Site";
    actionRow.appendChild(websiteBtn);
  }
  if (!actionRow.children.length) {
    actionRow.remove();
  }
  headerRoot.appendChild(intro);

  const heroImg = intro.querySelector(".project-hero-media img");
  if (heroImg) {
    heroImg.addEventListener("click", () => openGalleryItem(galleryItems, 0));
  }

  renderThumbnailStrip(intro, activeProject, galleryItems);
  renderGallery();
  renderContent(activeProject);
  renderSidebar(activeProject);
  renderRelated(activeProject);
}

function renderThumbnailStrip(heroEl, activeProject, galleryItems) {
  if (galleryItems.length <= 1) return;

  const mediaFigure = heroEl.querySelector(".project-hero-media");
  if (!mediaFigure) return;

  const grid = document.createElement("div");
  grid.className = "gallery-thumb-grid";

  const previewLimit = activeProject.galleryPreviewLimit || 8;
  galleryItems.slice(0, previewLimit).forEach((item, index) => {
    const wrap = document.createElement("div");
    wrap.className = "gallery-thumb-wrap";
    wrap.tabIndex = 0;

    const img = document.createElement("img");
    img.className = "gallery-thumb";
    img.src = resolveProjectAsset(item.src);
    img.alt = item.alt || `${activeProject.title} image ${index + 1}`;
    img.loading = "lazy";

    wrap.appendChild(img);
    wrap.addEventListener("click", () => openGalleryItem(galleryItems, index));
    wrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openGalleryItem(galleryItems, index);
      }
    });
    grid.appendChild(wrap);
  });

  mediaFigure.appendChild(grid);
}

function renderGallery() {
  galleryRoot.innerHTML = "";
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

}

function renderSidebar(activeProject) {
  const caseStudyUrl = buildCaseStudyUrl(activeProject.slug);
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
            <dd>
              <a class="text-link case-study-link" href="${caseStudyUrl}" target="_blank" rel="noreferrer">
                ${caseStudyUrl}
              </a>
            </dd>
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
          <a class="text-link" href="../portfolio.html">Back to all projects</a>
          <a class="text-link" data-profile-link="github" href="#">Open GitHub profile</a>
          <a class="text-link" href="../experience.html">Open experience page</a>
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
