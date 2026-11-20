import { projects } from "../../data/projects.js";
import { siteProfile } from "../../data/site.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  createProjectCard,
  getProjectCardImages,
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile,
  sortProjectsByType
} from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();
initCursorPlus();

const filterList = document.getElementById("filter-list");
const filterSelect = document.getElementById("filter-select");
const filterSelectValue = document.getElementById("filter-select-value");
const selectList = document.getElementById("select-list");
const portfolioGrid = document.getElementById("portfolio-grid");
const visibleCount = document.getElementById("visible-count");
const totalCount = document.getElementById("total-count");

let activeFilter = "All";
const orderedProjects = sortProjectsByType(projects);
const archiveCycleIntervalMs = 1800;
const archiveFadeDurationMs = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ? 0
  : 320;
let archiveImageCycleId = 0;

const allTags = ["All", "Solo", "Project"];
// What the filter buttons say. "Project" in the data means a team project.
const filterLabels = { All: "All", Solo: "Solo", Project: "Team" };

function isVisibleForFilter(project, filter) {
  if (filter === "All") {
    return true;
  }
  return (project.projectType || "Solo") === filter;
}

function setActiveFilter(filter) {
  activeFilter = filter;
  if (filterSelectValue) filterSelectValue.textContent = filter;
  if (filterSelect) filterSelect.classList.remove("active");
  renderFilterControls();
  renderProjects();
}

function renderFilterControls() {
  if (filterList) {
    if (filterSelectValue) filterSelectValue.textContent = activeFilter;
    filterList.innerHTML = allTags
      .map(
        (tag) => `
          <li class="filter-item">
            <button class="${tag === activeFilter ? "active" : ""}" type="button" data-filter="${tag}" aria-pressed="${tag === activeFilter}">
              ${filterLabels[tag] || tag}
              <span class="filter-count">${
                orderedProjects.filter((project) => isVisibleForFilter(project, tag)).length
              }</span>
            </button>
          </li>
        `
      )
      .join("");
  }

  if (selectList) {
    selectList.innerHTML = allTags
      .map(
        (tag) => `
          <li class="select-item">
            <button type="button" data-select-item="${tag}">${tag}</button>
          </li>
        `
      )
      .join("");
  }
}

function renderProjects() {
  if (!portfolioGrid) {
    return;
  }

  stopArchiveImageCycle();
  portfolioGrid.innerHTML = "";
  const filtered = orderedProjects.filter((project) =>
    isVisibleForFilter(project, activeFilter)
  );
  const rotatingCards = [];

  filtered.forEach((project) => {
    const card = createProjectCard(project, { compact: false, showSummary: false });
    const cardImage = card.querySelector(".project-card-media img");
    const cardImages = getProjectCardImages(project);

    if (cardImage && cardImages.length > 1) {
      const currentIndex = Number.parseInt(cardImage.dataset.imageIndex || "0", 10);
      rotatingCards.push({
        card,
        cardImage,
        cardImages,
        imageIndex: Number.isNaN(currentIndex) ? 0 : currentIndex,
        isTransitioning: false
      });
    }

    portfolioGrid.appendChild(card);
  });

  if (visibleCount) {
    visibleCount.textContent = String(filtered.length);
  }
  if (totalCount) {
    totalCount.textContent = String(projects.length);
  }

  initRevealAnimations();
  startArchiveImageCycle(rotatingCards);
}

function stopArchiveImageCycle() {
  if (!archiveImageCycleId) {
    return;
  }

  window.clearInterval(archiveImageCycleId);
  archiveImageCycleId = 0;
}

function startArchiveImageCycle(rotatingCards) {
  if (!rotatingCards.length) {
    return;
  }

  // Covers stay still; only the card under the pointer flips through its gallery,
  // and it returns to its cover when the pointer leaves.
  const advance = (entry) => {
    if (!entry.cardImage.isConnected || entry.isTransitioning) {
      return;
    }
    swapCardImage(entry, (entry.imageIndex + 1) % entry.cardImages.length);
  };

  rotatingCards.forEach((entry) => {
    entry.card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      stopArchiveImageCycle();
      advance(entry);
      archiveImageCycleId = window.setInterval(() => advance(entry), archiveCycleIntervalMs);
    });

    entry.card.addEventListener("pointerleave", () => {
      stopArchiveImageCycle();
      if (entry.imageIndex !== 0) {
        entry.isTransitioning = false;
        swapCardImage(entry, 0);
      }
    });
  });
}

function swapCardImage(entry, nextImageIndex) {
  const nextImage = entry.cardImages[nextImageIndex];
  if (!nextImage) {
    return;
  }

  entry.isTransitioning = true;

  const applySwap = () => {
    if (!entry.cardImage.isConnected) {
      entry.isTransitioning = false;
      return;
    }

    if (!archiveFadeDurationMs) {
      entry.cardImage.src = nextImage;
      entry.cardImage.dataset.imageIndex = String(nextImageIndex);
      entry.imageIndex = nextImageIndex;
      entry.isTransitioning = false;
      return;
    }

    entry.cardImage.classList.add("is-fading-out");
    window.setTimeout(() => {
      if (!entry.cardImage.isConnected) {
        entry.isTransitioning = false;
        return;
      }

      entry.cardImage.src = nextImage;
      entry.cardImage.dataset.imageIndex = String(nextImageIndex);
      entry.imageIndex = nextImageIndex;

      window.requestAnimationFrame(() => {
        entry.cardImage.classList.remove("is-fading-out");
        entry.isTransitioning = false;
      });
    }, archiveFadeDurationMs);
  };

  const preload = new Image();
  preload.addEventListener("load", applySwap, { once: true });
  preload.addEventListener("error", applySwap, { once: true });
  preload.src = nextImage;
}

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    setActiveFilter(filterButton.dataset.filter);
    return;
  }

  const selectItem = event.target.closest("[data-select-item]");
  if (selectItem) {
    setActiveFilter(selectItem.dataset.selectItem);
    return;
  }

  if (filterSelect && event.target.closest("#filter-select")) {
    filterSelect.classList.toggle("active");
    return;
  }

  if (filterSelect && !event.target.closest(".filter-select-box")) {
    filterSelect.classList.remove("active");
  }
});

renderFilterControls();
renderProjects();

window.addEventListener("beforeunload", stopArchiveImageCycle);
