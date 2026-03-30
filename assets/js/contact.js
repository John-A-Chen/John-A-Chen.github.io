import { siteProfile } from "../../data/site.js";
import { initBorderGlow } from "./border-glow.js";
import {
  initNavigation,
  initRevealAnimations,
  populateSharedProfile
} from "./shared.js";

populateSharedProfile(siteProfile);
initNavigation();

const map = document.getElementById("contact-map");
const locationLabel = document.getElementById("contact-location");
const socialGrid = document.getElementById("contact-social-grid");
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");

if (map) {
  map.src = siteProfile.mapEmbedUrl || "";
}

if (locationLabel) {
  locationLabel.textContent = siteProfile.address || siteProfile.location || "";
}

if (socialGrid) {
  socialGrid.innerHTML = siteProfile.socials
    .map(
      (social) => `
        <a class="contact-card reveal" href="${social.url}" target="_blank" rel="noreferrer">
          <p class="mono-label">Social</p>
          <h3>${social.label}</h3>
          <p class="text-link">Open profile</p>
        </a>
      `
    )
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
      alert("No contact email is configured yet. Redirecting to LinkedIn.");
      return;
    }

    alert("Please configure contactEmail in data/site.js to enable email sending.");
  });
}

initBorderGlow(".mapbox, .contact-card, .contact-form", {
  edgeSensitivity: 18,
  glowColor: "200 90 88",
  borderRadius: 20,
  glowRadius: 24,
  glowIntensity: 1.1,
  coneSpread: 28,
  animated: false,
  colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
  fillOpacity: 0.4
});

initRevealAnimations();
