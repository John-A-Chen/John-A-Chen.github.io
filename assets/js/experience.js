import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  initRandomProjectLink,
  initRevealAnimations,
  populateSharedProfile,
  resolveImagePath
} from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();
initCursorPlus();

const experienceList = document.getElementById("experience-list");
const experienceTabs = document.getElementById("experience-tabs");
const educationList = document.getElementById("education-list");
const certificationGrid = document.getElementById("certification-grid");

function createTimelineItems(items) {
  return items
    .map(
      (item) => `
        <li class="timeline-item">
          <h3 class="h4 timeline-item-title">${item.title}</h3>
          <span>${item.period}</span>
          <p class="timeline-text">${item.detail}</p>
        </li>
      `
    )
    .join("");
}

// Work history is split into two tabs. Roles are tagged in data/site.js.
const experienceGroups = [
  { key: "technical", label: "Technical" },
  { key: "other", label: "Non-technical" }
];
let activeGroup = "technical";

function renderExperience() {
  const allRoles = siteProfile.experienceTimeline || [];
  const rolesFor = (key) => allRoles.filter((role) => (role.category || "technical") === key);

  if (experienceTabs) {
    experienceTabs.innerHTML = experienceGroups
      .map(
        (group) => `
          <button
            type="button"
            class="seg-button${group.key === activeGroup ? " is-active" : ""}"
            role="tab"
            aria-selected="${group.key === activeGroup}"
            data-experience-group="${group.key}"
          >
            ${group.label}
            <span class="filter-count">${rolesFor(group.key).length}</span>
          </button>
        `
      )
      .join("");
  }

  if (experienceList) {
    experienceList.innerHTML = createTimelineItems(rolesFor(activeGroup));
  }
}

if (experienceTabs) {
  experienceTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-experience-group]");
    if (!button) {
      return;
    }
    activeGroup = button.dataset.experienceGroup;
    renderExperience();
    experienceTabs.querySelector(".is-active")?.focus();
  });
}

renderExperience();

if (educationList) {
  educationList.innerHTML = createTimelineItems(siteProfile.educationTimeline || []);
}

function createCredentialRows(items) {
  return items
    .map((item) => {
      const credential = item.credential ? encodeURI(item.credential) : "";
      return `
        <li class="credential-row">
          ${
            item.image
              ? `<img src="${resolveImagePath(item.image)}" alt="" loading="lazy" />`
              : `<span class="credential-dot" aria-hidden="true"></span>`
          }
          <span class="credential-text">
            <span class="credential-title">${item.title}</span>
            ${item.note ? `<span class="credential-note">${item.note}</span>` : ""}
          </span>
          ${
            credential
              ? `<a class="text-link credential-link" href="${credential}" target="_blank" rel="noreferrer">View certificate</a>`
              : ""
          }
        </li>
      `;
    })
    .join("");
}

if (certificationGrid) {
  certificationGrid.innerHTML = createCredentialRows(siteProfile.certifications || []);
}

initRevealAnimations();
