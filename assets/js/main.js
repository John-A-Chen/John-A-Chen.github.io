import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import {
  createProjectCard,
  initLightbox,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

const projectGrid = document.getElementById("project-grid");
const archiveCountLabel = document.getElementById("archive-count-label");
const aboutCopy = document.getElementById("about-copy");
const focusAreas = document.getElementById("focus-areas");
const heroTags = document.getElementById("hero-tags");
const projectCount = document.getElementById("project-count");
const disciplineCount = document.getElementById("discipline-count");
const networkCount = document.getElementById("network-count");
const socialGrid = document.getElementById("social-grid");
const stackGrid = document.getElementById("stack-grid");
const githubCardGrid = document.getElementById("github-card-grid");

function renderAboutSection() {
  const emailValue =
    siteProfile.contactEmail && siteProfile.contactEmail.trim().length
      ? siteProfile.contactEmail
      : "Not listed";

  aboutCopy.innerHTML = `
    <p>${siteProfile.shortBio}</p>
    ${siteProfile.aboutParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    <div class="about-meta">
      <div>
        <p class="mono-label">Location</p>
        <p>${siteProfile.location}</p>
      </div>
      <div>
        <p class="mono-label">Pronouns</p>
        <p>${siteProfile.pronouns || "Not listed"}</p>
      </div>
      <div>
        <p class="mono-label">Contact</p>
        <p>${emailValue}</p>
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
  networkCount.textContent = `${siteProfile.githubStats.followers}/${siteProfile.githubStats.following}`;

  heroTags.innerHTML = uniqueTags
    .slice(0, 6)
    .map((tag) => `<span class="tag-pill">${tag}</span>`)
    .join("");
}

function renderSocials() {
  if (!socialGrid) {
    return;
  }

  socialGrid.innerHTML = siteProfile.socials
    .map(
      (social) => `
        <a class="social-card reveal" href="${social.url}" target="_blank" rel="noreferrer">
          <p class="mono-label">Social</p>
          <h3>${social.label}</h3>
          <p class="text-link">Open profile</p>
        </a>
      `
    )
    .join("");
}

function renderTechStack() {
  if (!stackGrid) {
    return;
  }

  stackGrid.innerHTML = siteProfile.techStack
    .map((tool) => `<span class="stack-pill">${tool}</span>`)
    .join("");
}

function renderGithubCards() {
  if (!githubCardGrid) {
    return;
  }

  githubCardGrid.innerHTML = siteProfile.githubCards
    .map(
      (card) => `
        <article class="github-card reveal">
          <p class="mono-label">${card.title}</p>
          <img src="${card.image}" alt="${card.title} for ${siteProfile.name}" loading="lazy" />
        </article>
      `
    )
    .join("");
}

function renderProjectGrid() {
  projectGrid.innerHTML = "";

  if (projects.length === 0) {
    projectGrid.innerHTML = `
      <article class="empty-state">
        <h3>No projects added yet.</h3>
        <p>Add project entries in <code>data/projects.js</code> to populate this archive.</p>
      </article>
    `;
  } else {
    projects.forEach((project) => {
      projectGrid.appendChild(createProjectCard(project, { compact: false }));
    });
  }

  archiveCountLabel.textContent = `${projects.length} projects in archive`;
}

renderAboutSection();
renderHeroStats();
renderSocials();
renderTechStack();
renderGithubCards();
renderProjectGrid();
initRevealAnimations();
initLightbox();
