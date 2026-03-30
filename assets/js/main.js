import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initBorderGlow } from "./border-glow.js";
import { initSiteDock } from "./dock.js";
import {
  createProjectCard,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();
initSiteDock();

const focusAreas = document.getElementById("focus-areas");
const projectCount = document.getElementById("project-count");
const homeProjectPreview = document.getElementById("home-project-preview");

function renderFocusAreas() {
  if (!focusAreas) {
    return;
  }

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

function renderProjectCount() {
  if (!projectCount) {
    return;
  }

  projectCount.textContent = String(projects.length).padStart(2, "0");
}

function renderHomePreview() {
  if (!homeProjectPreview) {
    return;
  }

  homeProjectPreview.innerHTML = "";

  projects.slice(0, 6).forEach((project) => {
    homeProjectPreview.appendChild(
      createProjectCard(project, { compact: false, showSummary: false })
    );
  });
}

function initHomeBorderGlow() {
  initBorderGlow(
    ".hero-copy, .hero-panel, .headshot-slot, .info-panel, .project-card",
    {
      edgeSensitivity: 18,
      glowColor: "200 90 88",
      borderRadius: 22,
      glowRadius: 30,
      glowIntensity: 1.2,
      coneSpread: 28,
      animated: false,
      colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
      fillOpacity: 0.45
    }
  );
}

renderFocusAreas();
renderProjectCount();
renderHomePreview();
initHomeBorderGlow();
initRevealAnimations();
