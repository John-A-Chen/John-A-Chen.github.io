import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();
initCursorPlus();

const focusAreas = document.getElementById("focus-areas");
const projectCount = document.getElementById("project-count");
const headshotSlot = document.querySelector(".headshot-slot");

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

function initProfileHoverIconReveal() {
  if (!headshotSlot) {
    return;
  }

  const hideIcon = () => headshotSlot.classList.remove("show-github-icon");
  const scheduleReveal = () => headshotSlot.classList.add("show-github-icon");

  headshotSlot.addEventListener("pointerenter", scheduleReveal);
  headshotSlot.addEventListener("pointerleave", hideIcon);
  headshotSlot.addEventListener("pointercancel", hideIcon);
}

renderFocusAreas();
renderProjectCount();
initProfileHoverIconReveal();
initRevealAnimations();
