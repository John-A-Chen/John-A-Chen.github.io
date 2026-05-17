import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initSiteDock } from "./dock.js";
import { initLetterDrift } from "./letter-drift.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  createProjectCard,
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();

const focusAreas = document.getElementById("focus-areas");
const featuredProjects = document.getElementById("featured-projects");
const projectCount = document.getElementById("project-count");

function renderFocusAreas() {
  if (!focusAreas) {
    return;
  }

  focusAreas.innerHTML = siteProfile.focusAreas
    .map(
      (item) => `
        <article class="info-panel reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderProjectCount() {
  if (!projectCount) {
    return;
  }

  projectCount.textContent = String(projects.length).padStart(2, "0");
}

function renderFeaturedProjects() {
  if (!featuredProjects) {
    return;
  }

  const selectedProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  featuredProjects.innerHTML = "";
  selectedProjects.forEach((project) => {
    featuredProjects.appendChild(
      createProjectCard(project, { compact: true, showSummary: false })
    );
  });
}

renderFocusAreas();
renderProjectCount();
renderFeaturedProjects();
initLetterDrift();
initRevealAnimations();
