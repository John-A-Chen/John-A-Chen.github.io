import { repoImages } from "../../data/repo-images.js";

function uniqueSources(items = []) {
  return [...new Set(items.filter(Boolean))];
}

// A project can list `hiddenImages`: fragments of repo image paths that newer
// renders have replaced (or that should not be shown). Matching images are
// left out of that project's gallery and card pool. The files stay in place.
export function visibleRepoImages(project) {
  const hidden = project.hiddenImages || [];
  return (repoImages[project.slug] || []).filter(
    (item) => item?.src && !hidden.some((fragment) => item.src.includes(fragment))
  );
}

function getProjectImagePool(project) {
  // Cards cycle through a project's hand-picked hero views when it has them;
  // otherwise they fall back to everything the project has.
  if (project.cardImages?.length) {
    return uniqueSources(project.cardImages);
  }
  const directImages = [project.thumbnail, project.heroImage];
  const galleryImages = (project.gallery || []).map((item) => item?.src);
  const importedRepoImages = visibleRepoImages(project).map(
    (item) => item?.src
  );
  return uniqueSources([...directImages, ...galleryImages, ...importedRepoImages]);
}

function isExternalPath(path) {
  return (
    /^https?:\/\//i.test(path) ||
    path.startsWith("data:") ||
    path.startsWith("/") ||
    path.startsWith("../")
  );
}

export function resolveImagePath(path, hrefPrefix = "") {
  if (!path) {
    return "";
  }

  if (isExternalPath(path)) {
    return path;
  }

  return encodeURI(`${hrefPrefix}${path}`);
}

export function populateSharedProfile(profile) {
  const isProjectPage = document.body.classList.contains("project-page");
  const normalizeAssetPath = (path) => {
    if (!path) {
      return "";
    }

    if (
      path.startsWith("http") ||
      path.startsWith("data:") ||
      path.startsWith("/") ||
      path.startsWith("../")
    ) {
      return path;
    }

    if (path.startsWith("assets/")) {
      return isProjectPage ? `../${path}` : path;
    }

    return path;
  };

  const normalizeHref = (href) => {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("/")) {
      return href;
    }

    if (href.startsWith("assets/")) {
      return isProjectPage ? `../${href}` : href;
    }

    return href;
  };

  const profileTargets = document.querySelectorAll("[data-profile]");
  profileTargets.forEach((node) => {
    const key = node.dataset.profile;
    if (profile[key]) {
      node.textContent = profile[key];
    }
  });

  const brandLogoPath = normalizeAssetPath(profile.brandLogo || "");
  if (brandLogoPath) {
    document.querySelectorAll(".brand-mark").forEach((markNode) => {
      markNode.textContent = "";
      markNode.dataset.hasLogo = "true";

      const logoImage = document.createElement("img");
      logoImage.src = brandLogoPath;
      logoImage.alt = `${profile.name || "Profile"} logo`;
      logoImage.decoding = "async";
      logoImage.loading = "lazy";
      markNode.appendChild(logoImage);
    });
  }

  const linkTargets = document.querySelectorAll("[data-profile-link]");
  linkTargets.forEach((node) => {
    const key = node.dataset.profileLink;
    const href = profile.links?.[key];
    const contactCard = node.closest(".contact-card");
    if (href) {
      node.setAttribute("href", normalizeHref(href));
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
      node.hidden = false;
      if (contactCard) {
        contactCard.hidden = false;
      }
    } else {
      node.removeAttribute("href");
      node.hidden = true;
      if (contactCard) {
        contactCard.hidden = true;
      }
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

export function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || revealItems.length === 0) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Reveal as soon as a section edges into view so tall sections are never seen half-faded.
      threshold: 0,
      rootMargin: "0px 0px 80px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

export function initRandomProjectLink(allProjects) {
  const buttons = document.querySelectorAll("[data-random-project]");
  if (!buttons.length || !allProjects?.length) {
    return;
  }

  const currentSlug = document.body.dataset.projectSlug;
  const pool = currentSlug
    ? allProjects.filter((project) => project.slug !== currentSlug)
    : allProjects;
  const candidates = pool.length ? pool : allProjects;
  const randomProject =
    candidates[Math.floor(Math.random() * candidates.length)];
  const prefix = document.body.classList.contains("project-page") ? "../" : "";
  const href = `${prefix}projects/${randomProject.slug}.html`;

  buttons.forEach((button) => {
    button.setAttribute("href", href);
    button.setAttribute(
      "title",
      `Go to random project: ${randomProject.title}`
    );
  });
}

export function createProjectCard(project, options = {}) {
  const {
    compact = false,
    hrefPrefix = "",
    showSummary = true
  } = options;

  const card = document.createElement("article");
  card.className = `project-card reveal${compact ? " compact-card" : ""}`;

  // The cover is the project's chosen thumbnail (first in the pool), not a random pick.
  const cardImages = getProjectCardImages(project, hrefPrefix);
  const selectedProjectImageIndex = 0;
  const cardImage = cardImages[0] || "";
  const typeLabel = project.projectType === "Project" ? "Team" : "Solo";
  const courseCode = project.course ? `UTS ${project.course.split(" ")[0]}` : "";
  const mediaMarkup = cardImage
    ? `
      <div class="project-card-media">
        <img src="${cardImage}" alt="${project.title} thumbnail" loading="lazy" data-image-index="${selectedProjectImageIndex}" />
        <span class="project-card-type">${typeLabel}</span>
      </div>
    `
    : `<div class="project-card-media is-empty" aria-hidden="true"><span class="project-card-type">${typeLabel}</span></div>`;

  const tagMarkup = project.tags
    .slice(0, 3)
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  card.innerHTML = `
    <a class="project-card-link" href="${hrefPrefix}projects/${project.slug}.html">
      ${mediaMarkup}
      <div class="project-card-body">
        <div class="project-card-meta">
          <span>${project.year}</span>
          ${courseCode ? `<span title="${project.course}">${courseCode}</span>` : ""}
        </div>
        <h3>${project.title}</h3>
        <p class="project-card-subtitle">${project.subtitle}</p>
        ${
          showSummary
            ? `<p class="project-card-summary">${project.summary}</p>`
            : ""
        }
        <ul class="tag-list">${tagMarkup}</ul>
        <span class="project-card-cta" aria-hidden="true">View project &rarr;</span>
      </div>
    </a>
  `;

  return card;
}

export function getProjectCardImages(project, hrefPrefix = "") {
  return getProjectImagePool(project).map((path) => resolveImagePath(path, hrefPrefix));
}

export function sortProjectsByType(projectList) {
  const order = { Solo: 0, Project: 1 };
  return [...projectList].sort((a, b) => {
    const aRank = order[a.projectType] ?? 99;
    const bRank = order[b.projectType] ?? 99;
    if (aRank !== bRank) {
      return aRank - bRank;
    }
    return a.title.localeCompare(b.title);
  });
}

export function createResourceButtons(links, labels) {
  const wrap = document.createElement("div");
  wrap.className = "resource-button-row";

  Object.entries(labels).forEach(([key, label]) => {
    const href = links?.[key];
    if (!href) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.className = "button button-resource";
    anchor.href = href;
    anchor.textContent = label;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    wrap.appendChild(anchor);
  });

  return wrap;
}

// The header slims down once the page is scrolled, and returns at the top.
// Two thresholds so it doesn't flicker when hovering around one scroll position.
function initHeaderShrink() {
  const update = () => {
    const scrolled = document.body.classList.contains("is-scrolled");
    if (!scrolled && window.scrollY > 48) {
      document.body.classList.add("is-scrolled");
    } else if (scrolled && window.scrollY < 12) {
      document.body.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

initHeaderShrink();
