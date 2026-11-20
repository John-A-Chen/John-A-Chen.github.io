import { siteProfile } from "../../data/site.js";
import {
  getProjectBySlug,
  projectLinkLabels,
  projects
} from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile,
  resolveImagePath,
  visibleRepoImages
} from "./shared.js";

let lightboxEl = null;
let lightboxItems = [];
let lightboxIndex = 0;

// Page state. Declared up here because the page renders as this module loads.
let galleryItems = [];
let stageIndex = 0;
let viewerIndex = -1;
// gallery index -> { el, title } for the text block that references it.
const figureLinks = new Map();
const wideLayout = window.matchMedia("(min-width: 1081px)");

const figureStopWords = new Set([
  "the", "and", "for", "with", "that", "this", "from", "into", "was", "were",
  "are", "has", "had", "have", "not", "but", "all", "one", "can", "its", "their",
  "than", "then", "also", "each", "just", "more", "most", "rather", "should",
  "could", "would", "about", "after", "before", "both", "project", "image",
  "repo", "repository", "imported", "png", "jpg", "jpeg", "gif", "webp", "what",
  "how", "out", "work", "worth", "being", "them", "they", "when", "where"
]);

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

  const customGallery = (activeProject.gallery || [])
    .filter((item) => item?.src)
    .map((item) => ({ group: "Selected", ...item }));
  const importedGallery = visibleRepoImages(activeProject).map((item) => ({
    group: "From the repository",
    ...item
  }));

  return uniqueBySource([...seedItems, ...customGallery, ...importedGallery]);
}

// --- Page flow ---------------------------------------------------------------
// The page opens as a full-height gallery "stage". Scrolling slides the
// write-up sheet over it. Beside the write-up, a sticky figure viewer shows
// the image linked to whichever part of the text is being read.


function renderProjectPage(activeProject) {
  galleryItems = collectProjectGalleryItems(activeProject);
  document.body.classList.add("has-stage");
  document.body.classList.toggle("no-figures", galleryItems.length === 0);

  buildSheet();
  renderStage(activeProject);
  renderGallery();
  renderContent(activeProject);
  renderViewer();
  renderRelated(activeProject);
  initStageTransition();
  initFigureLinks();
}

// Everything after the stage moves into one "sheet" that scrolls over it.
function buildSheet() {
  const main = document.getElementById("main-content");
  const stageShell = headerRoot.closest("section");
  if (!main || !stageShell || main.querySelector(".sheet")) {
    return;
  }

  const sheet = document.createElement("div");
  sheet.className = "sheet";
  [...main.children]
    .filter((child) => child !== stageShell)
    .forEach((child) => sheet.appendChild(child));
  main.appendChild(sheet);
}

function renderStage(activeProject) {
  const hasImages = galleryItems.length > 0;
  headerRoot.innerHTML = "";

  const stage = document.createElement("article");
  stage.className = `stage${hasImages ? "" : " is-empty"}`;
  stage.innerHTML = `
    <div class="stage-info">
      <p class="eyebrow">${activeProject.year} / ${
        activeProject.projectType === "Project" ? "Team project" : "Solo project"
      }</p>
      <h1>${activeProject.title}</h1>
      <p class="stage-subtitle">${activeProject.subtitle}</p>
      <dl class="stage-facts">
        ${[
          ["Subject", activeProject.course],
          ["Status", activeProject.status]
        ]
          .filter(([, value]) => value)
          .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
          .join("")}
      </dl>
      <div class="project-action-row"></div>
      <details class="stage-more">
        <summary class="stage-more-head">
          <span class="doc-chevron" aria-hidden="true"></span>
          <span class="doc-hash" aria-hidden="true">##</span>
          <span>Summary and tags</span>
        </summary>
        <div class="stage-more-body">
          <p class="stage-summary">${activeProject.summary}</p>
          <ul class="tag-list">${activeProject.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
        </div>
      </details>
    </div>
    ${
      hasImages
        ? `
          <figure class="stage-media">
            <button type="button" class="stage-frame" aria-label="Open image full size">
              <img class="stage-img" alt="" />
            </button>
            <figcaption class="stage-caption"></figcaption>
          </figure>
        `
        : ""
    }
    ${galleryItems.length > 1 ? `<div class="stage-thumbs"></div>` : ""}
    <a class="stage-scroll" href="#project-content">
      Scroll for the write-up <span aria-hidden="true">&darr;</span>
    </a>
  `;

  const actionRow = stage.querySelector(".project-action-row");
  const addAction = (href, label, className) => {
    if (!href) {
      return;
    }
    const link = document.createElement("a");
    link.className = className;
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    actionRow.appendChild(link);
  };
  addAction(activeProject.links?.repo, "View Repository", "button");
  addAction(activeProject.links?.website, "View Project Site", "button button-ghost");
  if (!actionRow.children.length) {
    actionRow.remove();
  }

  headerRoot.appendChild(stage);

  const frame = stage.querySelector(".stage-frame");
  if (frame) {
    frame.addEventListener("click", () => openGalleryItem(galleryItems, stageIndex));
  }

  const thumbs = stage.querySelector(".stage-thumbs");
  if (thumbs) {
    let lastGroup = null;
    galleryItems.forEach((item, index) => {
      // A small label marks where each group of images starts in the strip.
      const group = item.group || "Selected";
      if (group !== lastGroup && (lastGroup !== null || group !== "Selected")) {
        const label = document.createElement("span");
        label.className = "stage-group";
        label.textContent = group;
        thumbs.appendChild(label);
      }
      lastGroup = group;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "stage-thumb";
      button.setAttribute(
        "aria-label",
        `Show ${cleanupCaption(item.caption || item.alt, `image ${index + 1}`)}`
      );
      const img = document.createElement("img");
      img.src = resolveProjectAsset(item.src);
      img.alt = "";
      img.loading = "lazy";
      button.appendChild(img);
      button.addEventListener("click", () => setStageImage(index));
      thumbs.appendChild(button);
    });
  }

  if (hasImages) {
    setStageImage(0);
  }

  // Left/right arrows step through the stage gallery while it is on screen
  // (the full-size viewer handles the keys itself when it is open).
  document.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    const shell = headerRoot.closest("section");
    const typing = event.target.closest?.("input, textarea, select, [contenteditable]");
    if (lightboxEl || typing || galleryItems.length < 2 || shell?.hasAttribute("inert")) {
      return;
    }
    if (shell && shell.getBoundingClientRect().bottom < 120) {
      return;
    }
    const step = event.key === "ArrowRight" ? 1 : -1;
    setStageImage((stageIndex + step + galleryItems.length) % galleryItems.length);
    event.preventDefault();
  });
}

function setStageImage(index) {
  const item = galleryItems[index];
  const img = headerRoot.querySelector(".stage-img");
  if (!item || !img) {
    return;
  }

  stageIndex = index;
  img.src = resolveProjectAsset(item.src);
  img.alt = item.alt || "";
  const caption = headerRoot.querySelector(".stage-caption");
  if (caption) {
    caption.textContent = `${index + 1} / ${galleryItems.length} · ${cleanupCaption(
      item.caption || item.alt,
      ""
    )}`;
  }
  headerRoot.querySelectorAll(".stage-thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", thumbIndex === index);
    if (thumbIndex === index) {
      // Keep the active thumbnail in view inside its strip without moving the page.
      const strip = thumb.parentElement;
      const target = thumb.offsetLeft - strip.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2;
      strip.scrollLeft = Math.max(0, target);
    }
  });
}

// Drives the slide-over: --stage-p runs 0 -> 1 as the sheet covers the stage.
function initStageTransition() {
  const shell = headerRoot.closest("section");
  if (!shell) {
    return;
  }

  let queued = false;
  const update = () => {
    queued = false;
    const height = shell.offsetHeight || 1;
    const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
    shell.style.setProperty("--stage-p", progress.toFixed(3));
    // Eased copy for the fade, so the gallery stays readable early in the scroll.
    shell.style.setProperty("--stage-e", (progress * progress).toFixed(3));
    // Once fully covered, keep the hidden stage out of the tab order.
    shell.toggleAttribute("inert", progress >= 1 && wideLayout.matches);
  };
  const requestUpdate = () => {
    if (!queued) {
      queued = true;
      window.requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
}

function renderGallery() {
  galleryRoot.innerHTML = "";
}

// --- Editor-style write-up -------------------------------------------------
// The case study renders as one "markdown file" panel. Each heading is a
// foldable region (a native <details>, so it works with keyboard and without
// JS), and the text gets light syntax colouring: technical terms and numbers.

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildHighlighter(activeProject) {
  // Terms the project itself names as tools or tags, longest first.
  const terms = [...(activeProject.tools || []), ...(activeProject.tags || [])]
    .filter((term) => term && term.length >= 3)
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);
  const termPattern = terms.length
    ? `(?<![\\w-])(?:${terms.join("|")})(?![\\w-])`
    : "(?!)";
  // Acronyms and part numbers: PCB, USB-C, STM32L476, ROS, 3D.
  const acronymPattern = "\\b(?=[A-Z0-9-]*[A-Z])[A-Z0-9]{2,}(?:-[A-Z0-9]+)*\\b";
  // Numbers, with a unit when one follows: 3.3 V, 230+, 2026.
  const numberPattern =
    "\\b\\d+(?:\\.\\d+)?\\+?(?:\\s?(?:mm|mA|kg|kHz|MHz|Hz|ms|rpm|Nm|DOF|V)\\b|%)?";
  const pattern = new RegExp(
    `(${termPattern})|(${acronymPattern})|(${numberPattern})`,
    "g"
  );

  return (text) => {
    // Leave anything that already contains markup untouched.
    if (!text || text.includes("<")) {
      return text || "";
    }
    return text.replace(pattern, (match, term, acronym) => {
      const kind = term ? "tok-tool" : acronym ? "tok-key" : "tok-num";
      return `<span class="${kind}">${match}</span>`;
    });
  };
}

function countLabel(count, noun) {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

function figAttrs(fig, title) {
  return fig === undefined ? "" : ` data-fig="${fig}" data-fig-title="${title}"`;
}

function figChip(fig) {
  return fig === undefined
    ? ""
    : `<button type="button" class="fig-ref" data-fig-ref="${fig}" title="Show the linked image">fig ${
        fig + 1
      }</button>`;
}

function renderFold({ title, hint, body, open = false, fig }) {
  return `
    <details class="doc-fold"${open ? " open" : ""}${figAttrs(fig, title)}>
      <summary class="doc-fold-head">
        <span class="doc-chevron" aria-hidden="true"></span>
        <span class="doc-hash" aria-hidden="true">##</span>
        <h2>${title}</h2>
        <span class="doc-fold-meta">${figChip(fig)}<span class="doc-fold-hint">${hint}</span></span>
      </summary>
      <div class="doc-fold-body">${body}</div>
    </details>
  `;
}

function renderContent(activeProject) {
  const mark = buildHighlighter(activeProject);
  const paragraphs = (items = []) =>
    items.map((paragraph) => `<p>${mark(paragraph)}</p>`).join("");
  const list = (items = []) =>
    `<ul class="doc-list">${items.map((item) => `<li>${mark(item)}</li>`).join("")}</ul>`;
  const overview = activeProject.overview || [];
  const problem = activeProject.problem || [];
  const role = activeProject.role || [];
  const process = activeProject.process || [];
  const highlights = activeProject.technicalHighlights || [];
  const lessons = activeProject.lessonsLearned || [];
  const future = activeProject.futureWork || [];

  // Link each block of text to the gallery image that best fits it.
  const figures = matchFigures([
    { key: "overview", title: "Project overview", text: overview.join(" ") },
    { key: "problem", title: "problem", text: problem.join(" ") },
    { key: "role", title: "role", text: role.join(" ") },
    ...process.map((item, index) => ({
      key: `process-${index}`,
      title: item.title,
      text: item.body,
      figure: item.figure
    })),
    ...highlights.map((item, index) => ({
      key: `highlight-${index}`,
      title: item.title,
      text: item.body,
      figure: item.figure
    })),
    { key: "lessons", title: "iteration review", text: lessons.join(" ") },
    { key: "future", title: "next", text: future.join(" ") }
  ]);

  const subsections = (items, prefix) =>
    items
      .map((item, index) => {
        const fig = figures.get(`${prefix}-${index}`);
        return `
          <div class="doc-sub"${figAttrs(fig, item.title)}>
            <h3>${item.title}${figChip(fig)}</h3>
            <p>${mark(item.body)}</p>
          </div>
        `;
      })
      .join("");

  const folds = [
    {
      title: "Project overview",
      count: overview.length,
      hint: countLabel(overview.length, "paragraph"),
      body: paragraphs(overview),
      open: true,
      fig: figures.get("overview")
    },
    {
      title: "What problem this project was trying to solve",
      count: problem.length,
      hint: countLabel(problem.length, "paragraph"),
      body: paragraphs(problem),
      open: true,
      fig: figures.get("problem")
    },
    {
      title: "My role in the work",
      count: role.length,
      hint: countLabel(role.length, "item"),
      body: list(role),
      fig: figures.get("role")
    },
    {
      title: "How the design evolved",
      count: process.length,
      hint: countLabel(process.length, "step"),
      body: subsections(process, "process")
    },
    {
      title: "Engineering details worth calling out",
      count: highlights.length,
      hint: countLabel(highlights.length, "detail"),
      body: subsections(highlights, "highlight")
    },
    {
      title: "What changed after iteration and review",
      count: lessons.length,
      hint: countLabel(lessons.length, "item"),
      body: list(lessons),
      fig: figures.get("lessons")
    },
    {
      title: "Next directions",
      count: future.length,
      hint: countLabel(future.length, "item"),
      body: list(future),
      fig: figures.get("future")
    }
  ];

  contentRoot.innerHTML = `
    <article class="doc-editor">
      <header class="doc-editor-bar">
        <span class="doc-tab">${activeProject.slug}.md</span>
        <div class="doc-actions">
          <button type="button" class="doc-action" data-fold-all="open">Unfold all</button>
          <button type="button" class="doc-action" data-fold-all="close">Fold all</button>
        </div>
      </header>
      ${folds
        .filter((fold) => fold.count > 0)
        .map(renderFold)
        .join("")}
    </article>
  `;

  contentRoot.querySelectorAll("[data-fold-all]").forEach((button) => {
    button.addEventListener("click", () => {
      const shouldOpen = button.dataset.foldAll === "open";
      contentRoot.querySelectorAll(".doc-fold").forEach((fold) => {
        fold.open = shouldOpen;
        // "Fold all" is a deliberate choice, so scrolling won't undo it.
        fold.dataset.keepClosed = shouldOpen ? "" : "1";
      });
    });
  });

  initAutoUnfold();
}

// Sections unfold by themselves as the reader scrolls down to them. A section
// the reader folds by hand stays folded.
function initAutoUnfold() {
  const folds = [...contentRoot.querySelectorAll(".doc-fold")];

  folds.forEach((fold) => {
    fold.querySelector("summary").addEventListener("click", () => {
      // The click is about to toggle it: closing by hand opts out of auto-unfold.
      fold.dataset.keepClosed = fold.open ? "1" : "";
    });
  });

  // A heading counts as "reached" once it is clear of the bottom third of the
  // screen. Sections open one at a time, top to bottom, with a short pause, so
  // a stack of folded headings unrolls instead of snapping open together.
  let timer = 0;
  const openNext = () => {
    timer = 0;
    const limit = window.innerHeight * 0.67;
    const next = folds.find((fold) => {
      if (fold.open || fold.dataset.keepClosed) {
        return false;
      }
      const top = fold.getBoundingClientRect().top;
      return top < limit;
    });
    if (next) {
      next.open = true;
      timer = window.setTimeout(openNext, 220);
    }
  };
  const requestOpen = () => {
    if (!timer) {
      timer = window.setTimeout(openNext, 60);
    }
  };

  // Only once the reader actually scrolls: the page should load as designed.
  window.addEventListener("scroll", requestOpen, { passive: true });
}

// --- Figure viewer and text <-> image links -----------------------------------


function figureTokens(text) {
  return ((text || "").toLowerCase().match(/[a-z]+/g) || [])
    .map((word) => (word.length > 4 ? word.replace(/s$/, "") : word))
    .filter((word) => word.length >= 3 && !figureStopWords.has(word));
}

// Picks one image per text block by matching the block's words against each
// image's file name and caption. Title words count for more than body words,
// and each image is used once. To pin an image by hand, give a block a
// `figure` path in data/projects.js (process and technicalHighlights items).
function matchFigures(blocks) {
  const imageTokens = galleryItems.map((item) => {
    const fileName = decodeURIComponent(item.src.split("/").pop() || "");
    return new Set(figureTokens(`${fileName} ${item.caption || ""}`));
  });

  const assigned = new Map();
  const usedImages = new Set();

  blocks.forEach((block) => {
    if (!block.figure) {
      return;
    }
    const pinned = galleryItems.findIndex((item) => item.src === block.figure);
    if (pinned >= 0) {
      assigned.set(block.key, pinned);
      usedImages.add(pinned);
    }
  });

  const candidates = [];
  blocks.forEach((block) => {
    if (assigned.has(block.key)) {
      return;
    }
    const titleWords = new Set(figureTokens(block.title));
    const bodyWords = new Set(figureTokens(block.text));
    imageTokens.forEach((tokens, imageIndex) => {
      let score = 0;
      tokens.forEach((token) => {
        if (titleWords.has(token)) {
          score += 3;
        } else if (bodyWords.has(token)) {
          score += 1;
        }
      });
      if (score > 0) {
        candidates.push({ key: block.key, imageIndex, score });
      }
    });
  });

  candidates
    .sort((a, b) => b.score - a.score || a.imageIndex - b.imageIndex)
    .forEach(({ key, imageIndex }) => {
      if (!assigned.has(key) && !usedImages.has(imageIndex)) {
        assigned.set(key, imageIndex);
        usedImages.add(imageIndex);
      }
    });

  return assigned;
}

function renderViewer() {
  if (!galleryItems.length) {
    sidebarRoot.innerHTML = "";
    return;
  }

  sidebarRoot.innerHTML = `
    <section class="fig-viewer" aria-label="Figure viewer">
      <header class="doc-editor-bar">
        <span class="doc-tab fig-counter"></span>
        <div class="doc-actions">
          <button type="button" class="doc-action" data-fig-step="-1">Previous</button>
          <button type="button" class="doc-action" data-fig-step="1">Next</button>
        </div>
      </header>
      <button type="button" class="fig-frame" aria-label="Open image full size">
        <img class="fig-img" alt="" />
      </button>
      <p class="fig-caption"></p>
      <button type="button" class="fig-source" hidden></button>
    </section>
  `;

  sidebarRoot.querySelectorAll("[data-fig-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const step = Number(button.dataset.figStep);
      showFigure((viewerIndex + step + galleryItems.length) % galleryItems.length);
    });
  });
  sidebarRoot
    .querySelector(".fig-frame")
    .addEventListener("click", () => openGalleryItem(galleryItems, viewerIndex));
  sidebarRoot
    .querySelector(".fig-source")
    .addEventListener("click", () => jumpToBlock(viewerIndex));
}

function showFigure(index) {
  const item = galleryItems[index];
  const viewer = sidebarRoot.querySelector(".fig-viewer");
  if (!item || !viewer || index === viewerIndex) {
    return;
  }

  viewerIndex = index;
  const img = viewer.querySelector(".fig-img");
  img.src = resolveProjectAsset(item.src);
  img.alt = item.alt || "";
  viewer.querySelector(".fig-counter").textContent = `fig ${index + 1} / ${galleryItems.length}`;
  viewer.querySelector(".fig-caption").textContent = cleanupCaption(
    item.caption || item.alt,
    ""
  );

  const link = figureLinks.get(index);
  const source = viewer.querySelector(".fig-source");
  source.hidden = !link;
  source.textContent = link ? `Referenced in: ${link.title}` : "";

  contentRoot.querySelectorAll("[data-fig].is-active").forEach((el) => {
    el.classList.remove("is-active");
  });
  if (link) {
    link.el.classList.add("is-active");
  }
}

function jumpToBlock(index) {
  const link = figureLinks.get(index);
  if (!link) {
    return;
  }

  const fold = link.el.closest("details");
  if (fold) {
    fold.open = true;
  }
  link.el.scrollIntoView({ block: "center", behavior: "smooth" });
  link.el.classList.add("is-flash");
  window.setTimeout(() => link.el.classList.remove("is-flash"), 1400);
}

function initFigureLinks() {
  figureLinks.clear();
  const blocks = [...contentRoot.querySelectorAll("[data-fig]")];
  blocks.forEach((el) => {
    figureLinks.set(Number(el.dataset.fig), {
      el,
      title: el.dataset.figTitle || ""
    });
  });

  if (!galleryItems.length) {
    return;
  }

  // "fig N" chips: show in the viewer, or full size when the viewer is hidden.
  contentRoot.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-fig-ref]");
    if (!chip) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const index = Number(chip.dataset.figRef);
    if (wideLayout.matches) {
      showFigure(index);
    } else {
      openGalleryItem(galleryItems, index);
    }
  });

  // Pointing at or tabbing into a linked block brings up its image.
  const showFor = (event) => {
    const block = event.target.closest?.("[data-fig]");
    if (block) {
      showFigure(Number(block.dataset.fig));
    }
  };
  contentRoot.addEventListener("mouseover", showFor);
  contentRoot.addEventListener("focusin", showFor);

  // Unfolding a section brings up its image (or its first sub-section's).
  contentRoot.querySelectorAll(".doc-fold").forEach((fold) => {
    fold.addEventListener("toggle", () => {
      if (!fold.open) {
        return;
      }
      const block = fold.matches("[data-fig]") ? fold : fold.querySelector("[data-fig]");
      if (block) {
        showFigure(Number(block.dataset.fig));
      }
    });
  });

  // While reading, the block crossing the middle of the screen sets the image.
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showFigure(Number(entry.target.dataset.fig));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    blocks.forEach((el) => spy.observe(el));
  }

  showFigure(blocks.length ? Number(blocks[0].dataset.fig) : 0);
}

// Related projects are a quiet strip of links that only fades in once the
// reader reaches the very bottom of the page.
function renderRelated(activeProject) {
  const relatedProjects = (activeProject.relatedProjects || [])
    .map((relatedSlug) => projects.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  if (!relatedProjects.length) {
    relatedRoot.closest("section").hidden = true;
    return;
  }

  relatedRoot.innerHTML = `
    <nav class="related-strip" aria-label="Related projects">
      <span class="mono-label">Related projects</span>
      <div class="related-links">
        ${relatedProjects
          .map(
            (item) => `
              <a class="related-link" href="${item.slug}.html">
                <span class="related-title">${item.title}</span>
                <span class="related-meta">${item.year} / ${item.projectType || "Solo"}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </nav>
  `;

  const strip = relatedRoot.querySelector(".related-strip");
  const revealAtBottom = () => {
    const doc = document.documentElement;
    if (window.scrollY + window.innerHeight >= doc.scrollHeight - 60) {
      strip.classList.add("is-revealed");
      window.removeEventListener("scroll", revealAtBottom);
    }
  };
  window.addEventListener("scroll", revealAtBottom, { passive: true });
}
