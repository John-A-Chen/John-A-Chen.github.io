import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import {
  createProjectCard,
  createTagChip,
  initLightbox,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

const featuredGrid = document.getElementById("featured-grid");
const projectGrid = document.getElementById("project-grid");
const tagFilters = document.getElementById("tag-filters");
const searchField = document.getElementById("project-search");
const archiveCountLabel = document.getElementById("archive-count-label");
const aboutCopy = document.getElementById("about-copy");
const focusAreas = document.getElementById("focus-areas");
const heroTags = document.getElementById("hero-tags");
const projectCount = document.getElementById("project-count");
const disciplineCount = document.getElementById("discipline-count");

const state = {
  search: "",
  tag: "All"
};

function renderAboutSection() {
  aboutCopy.innerHTML = `
    <p>${siteProfile.shortBio}</p>
    ${siteProfile.aboutParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <div class="about-meta">
      <div>
        <p class="mono-label">Location</p>
        <p>${siteProfile.location}</p>
      </div>
      <div>
        <p class="mono-label">Email</p>
        <p>${siteProfile.contactEmail}</p>
      </div>
    </div>
  `;

  focusAreas.innerHTML = siteProfile.focusAreas
    .map(
      (item) => `
        <article class="info-panel reveal">
          <p class="mono-label">Focus Area</p>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderHeroStats() {
  const uniqueTags = [...new Set(projects.flatMap((project) => project.tags))];
  projectCount.textContent = String(projects.length).padStart(2, "0");
  disciplineCount.textContent = String(Math.min(uniqueTags.length, 9)).padStart(2, "0");

  heroTags.innerHTML = uniqueTags
    .slice(0, 6)
    .map((tag) => `<span class="tag-pill">${tag}</span>`)
    .join("");
}

function renderFeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);
  featuredGrid.innerHTML = "";
  featuredProjects.forEach((project) => {
    featuredGrid.appendChild(createProjectCard(project));
  });
}

function renderTagFilters() {
  const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];
  tagFilters.innerHTML = "";
  tags.forEach((tag) => {
    tagFilters.appendChild(createTagChip(tag, tag === state.tag));
  });
}

function filterProjects() {
  return projects.filter((project) => {
    const searchHaystack = [
      project.title,
      project.subtitle,
      project.summary,
      ...project.tags
    ]
      .join(" ")
      .toLowerCase();

    const matchesTag = state.tag === "All" || project.tags.includes(state.tag);
    const matchesSearch =
      state.search.trim() === "" || searchHaystack.includes(state.search.toLowerCase());

    return matchesTag && matchesSearch;
  });
}

function renderProjectGrid() {
  const filtered = filterProjects();
  projectGrid.innerHTML = "";

  if (filtered.length === 0) {
    projectGrid.innerHTML = `
      <article class="empty-state">
        <h3>No projects match this filter yet.</h3>
        <p>Try a different tag or clear the search input.</p>
      </article>
    `;
  } else {
    filtered.forEach((project) => {
      projectGrid.appendChild(createProjectCard(project, { compact: true }));
    });
  }

  archiveCountLabel.textContent =
    filtered.length === projects.length
      ? "Showing all projects"
      : `Showing ${filtered.length} of ${projects.length} projects`;
}

function bindArchiveControls() {
  searchField?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProjectGrid();
  });

  tagFilters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tag]");
    if (!button) {
      return;
    }

    state.tag = button.dataset.tag;
    renderTagFilters();
    renderProjectGrid();
  });
}

renderAboutSection();
renderHeroStats();
renderFeaturedProjects();
renderTagFilters();
renderProjectGrid();
bindArchiveControls();
initRevealAnimations();
initLightbox();
