export function populateSharedProfile(profile) {
  const profileTargets = document.querySelectorAll("[data-profile]");
  profileTargets.forEach((node) => {
    const key = node.dataset.profile;
    if (profile[key]) {
      node.textContent = profile[key];
    }
  });

  const linkTargets = document.querySelectorAll("[data-profile-link]");
  linkTargets.forEach((node) => {
    const key = node.dataset.profileLink;
    const href = profile.links?.[key];
    if (href) {
      node.setAttribute("href", href);
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    } else {
      node.removeAttribute("href");
    }
  });

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

export function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
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
      threshold: 0.16
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

export function createProjectCard(project, options = {}) {
  const {
    compact = false,
    hrefPrefix = "",
    showSummary = true
  } = options;

  const card = document.createElement("article");
  card.className = `project-card reveal${compact ? " compact-card" : ""}`;

  const tagMarkup = project.tags
    .slice(0, compact ? 3 : 4)
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  card.innerHTML = `
    <a class="project-card-link" href="${hrefPrefix}projects/${project.slug}.html">
      <div class="project-card-media">
        <img src="${hrefPrefix}${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy" />
      </div>
      <div class="project-card-body">
        <div class="project-card-meta">
          <span>${project.year}</span>
          <span>${project.status}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-card-subtitle">${project.subtitle}</p>
        ${
          showSummary
            ? `<p class="project-card-summary">${project.summary}</p>`
            : ""
        }
        <ul class="tag-list">${tagMarkup}</ul>
      </div>
    </a>
  `;

  return card;
}

export function createTagChip(tag, isActive = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tag-filter${isActive ? " is-active" : ""}`;
  button.textContent = tag;
  button.dataset.tag = tag;
  return button;
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

export function createLightboxTrigger(image, groupName) {
  const figure = document.createElement("figure");
  figure.className = "gallery-card";

  figure.innerHTML = `
    <button
      class="gallery-trigger"
      type="button"
      data-lightbox-group="${groupName}"
      data-lightbox-src="${image.src}"
      data-lightbox-alt="${image.alt}"
      data-lightbox-caption="${image.caption || ""}"
      aria-label="Open image: ${image.alt}"
    >
      <img src="${image.src}" alt="${image.alt}" loading="lazy" />
    </button>
    <figcaption>${image.caption || ""}</figcaption>
  `;

  return figure;
}

export function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) {
    return;
  }

  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const prevButton = lightbox.querySelector(".lightbox-nav.prev");
  const nextButton = lightbox.querySelector(".lightbox-nav.next");
  let group = [];
  let currentIndex = 0;

  const syncView = () => {
    const activeItem = group[currentIndex];
    if (!activeItem) {
      return;
    }

    image.src = activeItem.dataset.lightboxSrc;
    image.alt = activeItem.dataset.lightboxAlt || "";
    caption.textContent = activeItem.dataset.lightboxCaption || "";
  };

  const open = (items, index) => {
    group = items;
    currentIndex = index;
    syncView();
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  };

  const step = (direction) => {
    if (!group.length) {
      return;
    }

    currentIndex = (currentIndex + direction + group.length) % group.length;
    syncView();
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-lightbox-src]");
    if (!trigger) {
      return;
    }

    const groupName = trigger.dataset.lightboxGroup;
    const items = [...document.querySelectorAll(`[data-lightbox-group="${groupName}"]`)];
    const index = items.indexOf(trigger);
    open(items, index);
  });

  closeButton?.addEventListener("click", close);
  prevButton?.addEventListener("click", () => step(-1));
  nextButton?.addEventListener("click", () => step(1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }

    if (event.key === "Escape") {
      close();
    }

    if (event.key === "ArrowLeft") {
      step(-1);
    }

    if (event.key === "ArrowRight") {
      step(1);
    }
  });
}
