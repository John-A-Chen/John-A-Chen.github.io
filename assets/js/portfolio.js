import { projects } from "../../data/projects.js";
import { siteProfile } from "../../data/site.js";
import { initBorderGlow } from "./border-glow.js";
import {
  createProjectCard,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

const filterList = document.getElementById("filter-list");
const filterSelect = document.getElementById("filter-select");
const filterSelectValue = document.getElementById("filter-select-value");
const selectList = document.getElementById("select-list");
const portfolioGrid = document.getElementById("portfolio-grid");
const visibleCount = document.getElementById("visible-count");
const totalCount = document.getElementById("total-count");

let activeFilter = "All";

const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

function isVisibleForFilter(project, filter) {
  if (filter === "All") {
    return true;
  }

  return project.tags.includes(filter);
}

function setActiveFilter(filter) {
  activeFilter = filter;
  filterSelectValue.textContent = filter;
  filterSelect.classList.remove("active");
  renderFilterControls();
  renderProjects();
}

function renderFilterControls() {
  if (filterList) {
    filterList.innerHTML = allTags
      .map(
        (tag) => `
          <li class="filter-item">
            <button class="${tag === activeFilter ? "active" : ""}" type="button" data-filter="${tag}">
              ${tag}
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

  portfolioGrid.innerHTML = "";
  const filtered = projects.filter((project) =>
    isVisibleForFilter(project, activeFilter)
  );

  filtered.forEach((project) => {
    portfolioGrid.appendChild(
      createProjectCard(project, { compact: false, showSummary: false })
    );
  });

  if (visibleCount) {
    visibleCount.textContent = String(filtered.length);
  }
  if (totalCount) {
    totalCount.textContent = String(projects.length);
  }

  initBorderGlow(".project-card, .filter-shell", {
    edgeSensitivity: 18,
    glowColor: "200 90 88",
    borderRadius: 20,
    glowRadius: 28,
    glowIntensity: 1.15,
    coneSpread: 28,
    animated: false,
    colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
    fillOpacity: 0.45
  });

  initRevealAnimations();
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

  if (event.target.closest("#filter-select")) {
    filterSelect.classList.toggle("active");
    return;
  }

  if (!event.target.closest(".filter-select-box")) {
    filterSelect.classList.remove("active");
  }
});

renderFilterControls();
renderProjects();
