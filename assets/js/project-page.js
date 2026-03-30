import { siteProfile } from "../../data/site.js";
import {
  getProjectBySlug,
  projectLinkLabels,
  projects
} from "../../data/projects.js";
import { repoImages } from "../../data/repo-images.js";
import { initClickSpark } from "./click-spark.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  createProjectCard,
  createResourceButtons,
  getRandomProjectImage,
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile,
  resolveImagePath
} from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();

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
  // Re-apply profile bindings after dynamic sections are injected.
  populateSharedProfile(siteProfile);
  initRevealAnimations();
}

function removeFileType(text) {
  return text.replace(/\.(png|jpe?g|gif|webp|svg|bmp|tiff?)$/i, "");
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
  return resolveImagePath(path, "../");
}

function isSvgSource(path = "") {
  return /\.svg($|\?)/i.test(path);
}

function resolvePreferredHeroImage(activeProject) {
  const repoHero = repoImages[activeProject.slug]?.[0]?.src;
  if (repoHero) {
    return repoHero;
  }

  const nonSvgGallery = (activeProject.gallery || []).find(
    (item) => item?.src && !isSvgSource(item.src)
  )?.src;
  if (nonSvgGallery) {
    return nonSvgGallery;
  }

  if (activeProject.heroImage && !isSvgSource(activeProject.heroImage)) {
    return activeProject.heroImage;
  }

  if (activeProject.thumbnail && !isSvgSource(activeProject.thumbnail)) {
    return activeProject.thumbnail;
  }

  return getRandomProjectImage(activeProject.slug) || "";
}

function bindFallbackImage(image, fallbackSrc) {
  if (!image || !fallbackSrc) {
    return;
  }

  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") {
      return;
    }
    image.dataset.fallbackApplied = "true";
    image.src = fallbackSrc;
  });
}

function uniqueBySource(items) {
  return items.filter(
    (item, index, allItems) =>
      index === allItems.findIndex((candidate) => candidate.src === item.src)
  );
}

function renderProjectPage(activeProject) {
  headerRoot.innerHTML = "";

  const intro = document.createElement("article");
  intro.className = "project-hero reveal";

  const repoButton = activeProject.links?.repo
    ? `<a class="button button-repo-primary" href="${activeProject.links.repo}" target="_blank" rel="noreferrer">Open GitHub Repository</a>`
    : "";

  intro.innerHTML = `
    <a class="breadcrumb-link" href="../portfolio.html">Back to Project Archive</a>
    <div class="project-hero-grid">
      <div class="project-hero-copy">
        <p class="eyebrow">${activeProject.year} / ${activeProject.status}</p>
        <h1>${activeProject.title}</h1>
        <p class="project-subtitle">${activeProject.subtitle}</p>
        <p class="project-summary">${activeProject.summary}</p>
        <ul class="tag-list">${activeProject.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        <div class="project-priority-row">${repoButton}</div>
        <div class="project-action-row"></div>
      </div>
      <figure class="project-hero-media">
        <img src="" alt="${activeProject.title} hero image" />
      </figure>
    </div>
  `;

  const nonRepoLabels = Object.fromEntries(
    Object.entries(projectLinkLabels).filter(([key]) => key !== "repo")
  );
  if (!activeProject.links?.repo) {
    intro.querySelector(".project-priority-row")?.remove();
  }
  const actionRow = intro.querySelector(".project-action-row");
  const topResourceButtons = createResourceButtons(activeProject.links, nonRepoLabels);
  if (topResourceButtons.childElementCount > 0) {
    actionRow.appendChild(topResourceButtons);
  } else {
    actionRow.remove();
  }
  headerRoot.appendChild(intro);

  const heroImage = intro.querySelector(".project-hero-media img");
  const heroFallback = resolveProjectAsset(
    getRandomProjectImage(activeProject.slug) ||
      activeProject.thumbnail ||
      activeProject.heroImage
  );
  const preferredHero = resolveProjectAsset(resolvePreferredHeroImage(activeProject));
  bindFallbackImage(heroImage, heroFallback);
  if (heroImage) {
    heroImage.dataset.fallbackApplied = "false";
    heroImage.src = preferredHero || heroFallback;
  }

  renderGallery(activeProject);
  renderContent(activeProject);
  renderSidebar(activeProject);
  renderRelated(activeProject);
}

function renderGallery(activeProject) {
  const repoGallery = repoImages[activeProject.slug] || [];
  const projectGallery = activeProject.gallery || [];
  const nonSvgProjectGallery = projectGallery.filter(
    (item) => !isSvgSource(item.src)
  );
  const nonSvgHero =
    activeProject.heroImage && !isSvgSource(activeProject.heroImage)
      ? [
          {
            src: activeProject.heroImage,
            alt: `${activeProject.title} image`
          }
        ]
      : [];

  // Prefer imported repo photos first, then non-SVG entries from project metadata.
  let baseItems = [];
  if (repoGallery.length) {
    baseItems = [...nonSvgHero, ...repoGallery];
  } else {
    baseItems = [...nonSvgHero, ...nonSvgProjectGallery];
  }

  const galleryItems = uniqueBySource(baseItems);
  if (!galleryItems.length) {
    galleryRoot.innerHTML = "";
    return;
  }

  galleryRoot.innerHTML = `
    <div class="section-heading reveal">
      <p class="eyebrow">Gallery</p>
      <h2>Visual record of the design, analysis, and iteration process.</h2>
    </div>
    <article class="gallery-carousel reveal" aria-label="Project image carousel">
      <button class="gallery-nav-btn prev" type="button" aria-label="Previous image">
        &#8249;
      </button>
      <figure class="gallery-stage">
        <img id="gallery-active-image" src="" alt="" />
        <figcaption id="gallery-active-caption"></figcaption>
      </figure>
      <button class="gallery-nav-btn next" type="button" aria-label="Next image">
        &#8250;
      </button>
    </article>
    <div class="gallery-meta-row reveal">
      <p class="gallery-counter" id="gallery-counter"></p>
      <div class="gallery-dot-row" id="gallery-dot-row"></div>
    </div>
  `;

  const imageEl = document.getElementById("gallery-active-image");
  const captionEl = document.getElementById("gallery-active-caption");
  const counterEl = document.getElementById("gallery-counter");
  const dotRow = document.getElementById("gallery-dot-row");
  const prevButton = galleryRoot.querySelector(".gallery-nav-btn.prev");
  const nextButton = galleryRoot.querySelector(".gallery-nav-btn.next");
  const galleryFallback = resolveProjectAsset(
    getRandomProjectImage(activeProject.slug) ||
      activeProject.thumbnail ||
      activeProject.heroImage
  );

  let currentIndex = 0;

  const dotButtons = galleryItems.map((item, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "gallery-dot";
    dot.setAttribute("aria-label", `Go to image ${index + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      syncActiveImage();
    });
    dotRow.appendChild(dot);
    return dot;
  });

  const syncActiveImage = () => {
    const activeItem = galleryItems[currentIndex];
    const fallbackCaption = `${activeProject.title} image ${currentIndex + 1}`;
    imageEl.dataset.fallbackApplied = "false";
    imageEl.src = resolveProjectAsset(activeItem.src);
    imageEl.alt = activeItem.alt || fallbackCaption;
    captionEl.textContent = cleanupCaption(
      activeItem.caption || activeItem.alt,
      fallbackCaption
    );
    counterEl.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

    dotButtons.forEach((dot, dotIndex) => {
      const active = dotIndex === currentIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  };

  bindFallbackImage(imageEl, galleryFallback);

  const stepImage = (direction) => {
    currentIndex =
      (currentIndex + direction + galleryItems.length) % galleryItems.length;
    syncActiveImage();
  };

  prevButton.addEventListener("click", () => stepImage(-1));
  nextButton.addEventListener("click", () => stepImage(1));

  if (galleryItems.length <= 1) {
    prevButton.hidden = true;
    nextButton.hidden = true;
  }

  // Keep keyboard navigation aligned with carousel controls.
  document.addEventListener("keydown", (event) => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === "input" || tag === "textarea") {
      return;
    }

    if (event.key === "ArrowLeft") {
      stepImage(-1);
    }
    if (event.key === "ArrowRight") {
      stepImage(1);
    }
  });

  syncActiveImage();
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
          <a class="text-link" href="../portfolio.html">Back to all projects</a>
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
