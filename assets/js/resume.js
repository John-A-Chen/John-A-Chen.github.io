import { siteProfile } from "../../data/site.js";
import { initBorderGlow } from "./border-glow.js";
import {
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

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

initBorderGlow(".resume-shell, .timeline", {
  edgeSensitivity: 18,
  glowColor: "200 90 88",
  borderRadius: 20,
  glowRadius: 26,
  glowIntensity: 1.12,
  coneSpread: 28,
  animated: false,
  colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
  fillOpacity: 0.42
});

initRevealAnimations();
