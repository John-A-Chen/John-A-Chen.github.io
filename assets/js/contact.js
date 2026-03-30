import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initSiteDock } from "./dock.js";
import { initLogoLoop } from "./logo-loop.js";
import {
  initRandomProjectLink,
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();
initSiteDock();
initLogoLoop();
initRandomProjectLink(projects);
initClickSpark();

const map = document.getElementById("contact-map");
const locationLabel = document.getElementById("contact-location");
const socialGrid = document.getElementById("contact-social-grid");
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");

const socialBadgeByLabel = {
  Discord:
    "https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white",
  Instagram:
    "https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white",
  LinkedIn:
    "https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white",
  Pinterest:
    "https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white",
  TikTok:
    "https://img.shields.io/badge/TikTok-%23000000.svg?logo=TikTok&logoColor=white",
  YouTube:
    "https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white"
};

if (map) {
  map.src = siteProfile.mapEmbedUrl || "";
}

if (locationLabel) {
  locationLabel.textContent = siteProfile.address || siteProfile.location || "";
}

if (socialGrid) {
  socialGrid.innerHTML = siteProfile.socials
    .map((social) => {
      const badgeSrc = socialBadgeByLabel[social.label];
      const badgeMarkup = badgeSrc
        ? `
          <img
            class="social-badge"
            src="${badgeSrc}"
            alt="${social.label} logo badge"
            loading="lazy"
            decoding="async"
          />
        `
        : "";

      return `
        <a class="contact-card reveal" href="${social.url}" target="_blank" rel="noreferrer">
          ${badgeMarkup}
          <h3>${social.label}</h3>
          <p class="text-link">Open profile</p>
        </a>
      `
    })
    .join("");
}

if (form && submitButton) {
  const fields = [...form.querySelectorAll(".form-input")];

  const updateFormState = () => {
    submitButton.disabled = fields.some((field) => !field.value.trim());
  };

  fields.forEach((field) => {
    field.addEventListener("input", updateFormState);
  });
  updateFormState();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.namedItem("fullname")?.value.trim() || "";
    const email = form.elements.namedItem("email")?.value.trim() || "";
    const message = form.elements.namedItem("message")?.value.trim() || "";

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    if (siteProfile.contactEmail && siteProfile.contactEmail.includes("@")) {
      window.location.href = `mailto:${siteProfile.contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    const linkedInUrl = siteProfile.links?.linkedin;
    if (linkedInUrl) {
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
      alert(
        "No contact email is configured yet. Redirecting to LinkedIn. You can also email johnalfredchen@gmail.com."
      );
      return;
    }

    alert("Please email johnalfredchen@gmail.com directly.");
  });
}

initRevealAnimations();
