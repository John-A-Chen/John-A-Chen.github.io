import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
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
        <a class="focus-tile reveal" href="${item.href}">
          <img src="${encodeURI(item.image)}" alt="" loading="lazy" />
          <span class="focus-tile-text">
            <span class="focus-tile-label">${item.label}</span>
            <span class="focus-tile-title">${item.title}</span>
            <span class="focus-tile-body">${item.body}</span>
          </span>
        </a>
      `
    )
    .join("");
}

// The three projects shown on the home page, in this order. Edit the slugs to change them.
const homeFeaturedSlugs = ["john-stm", "holoassist", "mecanum-wheel-study"];
const featuredProjects = document.getElementById("featured-projects");

function renderFeaturedProjects() {
  if (!featuredProjects) {
    return;
  }

  homeFeaturedSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean)
    .forEach((project) => {
      const card = createProjectCard(project, { showSummary: false });
      const cardImage = card.querySelector(".project-card-media img");
      // Use the project's chosen thumbnail here rather than a random gallery image.
      if (cardImage && project.thumbnail) {
        cardImage.src = project.thumbnail;
      }
      featuredProjects.appendChild(card);
    });
}

function renderProjectCount() {
  if (!projectCount) {
    return;
  }

  projectCount.textContent = String(projects.length).padStart(2, "0");
}

// Hovering the portrait pops the GitHub avatar up over the face, as a link to
// the profile. On touch screens the first tap only reveals it; the link is
// "armed" a moment later so that same tap cannot also follow it.
function initProfileHoverIconReveal() {
  if (!headshotSlot) {
    return;
  }

  let armTimer = 0;
  const show = (event) => {
    headshotSlot.classList.add("show-github-icon");
    window.clearTimeout(armTimer);
    const delay = event?.pointerType === "touch" ? 350 : 0;
    armTimer = window.setTimeout(() => headshotSlot.classList.add("is-armed"), delay);
  };
  const hide = () => {
    window.clearTimeout(armTimer);
    headshotSlot.classList.remove("show-github-icon", "is-armed");
  };

  headshotSlot.addEventListener("pointerenter", show);
  headshotSlot.addEventListener("pointerleave", hide);
  headshotSlot.addEventListener("pointercancel", hide);
  headshotSlot.addEventListener("focusin", show);
  headshotSlot.addEventListener("focusout", hide);
}

renderFeaturedProjects();
renderFocusAreas();
renderProjectCount();
initProfileHoverIconReveal();
initRevealAnimations();
