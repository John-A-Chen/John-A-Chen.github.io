import { projects } from "../../data/projects.js";
import { siteProfile } from "../../data/site.js";
import { initClickSpark } from "./click-spark.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  createProjectCard,
  initRandomProjectLink,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile,
  sortProjectsByType
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();

const filterList = document.getElementById("filter-list");
const filterSelect = document.getElementById("filter-select");
const filterSelectValue = document.getElementById("filter-select-value");
const selectList = document.getElementById("select-list");
const portfolioGrid = document.getElementById("portfolio-grid");
const visibleCount = document.getElementById("visible-count");
const totalCount = document.getElementById("total-count");

let activeFilter = "Solo";
const orderedProjects = sortProjectsByType(projects);

const allTags = ["Solo", "Project"];

function isVisibleForFilter(project, filter) {
  return (project.projectType || "Solo") === filter;
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
    filterSelectValue.textContent = activeFilter;
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
  const filtered = orderedProjects.filter((project) =>
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
