import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
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

const experienceList = document.getElementById("experience-list");
const educationList = document.getElementById("education-list");

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

if (experienceList) {
  experienceList.innerHTML = createTimelineItems(siteProfile.resumeExperience || []);
}

if (educationList) {
  educationList.innerHTML = createTimelineItems(siteProfile.resumeEducation || []);
}

initRevealAnimations();
