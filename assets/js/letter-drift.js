const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function getDriftValue(index, min, max, seed) {
  const raw = Math.sin(index * seed) * 10000;
  const fraction = raw - Math.floor(raw);
  return min + fraction * (max - min);
}

function splitLetters(target) {
  if (target.dataset.letterDriftReady === "true") {
    return [...target.querySelectorAll(".drift-letter")];
  }

  const text = target.textContent.trim();
  target.textContent = "";
  target.setAttribute("aria-label", text);
  target.dataset.letterDriftReady = "true";

  let letterIndex = 0;
  text.split(/\s+/).forEach((word, wordIndex, words) => {
    const wordNode = document.createElement("span");
    wordNode.className = "letter-word";
    wordNode.setAttribute("aria-hidden", "true");

    [...word].forEach((char) => {
      const letter = document.createElement("span");
      letter.className = "drift-letter";
      letter.textContent = char;
      letter.dataset.speed = String(getDriftValue(letterIndex, 0.72, 1.46, 12.9898));
      letter.dataset.x = String(getDriftValue(letterIndex, -1, 1, 78.233));
      letter.dataset.rotation = String(getDriftValue(letterIndex, -28, 28, 37.719));
      wordNode.appendChild(letter);
      letterIndex += 1;
    });

    target.appendChild(wordNode);
    if (wordIndex < words.length - 1) {
      const space = document.createElement("span");
      space.className = "letter-space";
      space.setAttribute("aria-hidden", "true");
      space.textContent = " ";
      target.appendChild(space);
    }
  });

  return [...target.querySelectorAll(".drift-letter")];
}

export function initLetterDrift() {
  const targets = [...document.querySelectorAll("[data-letter-drift]")];
  if (!targets.length || reduceMotion.matches) {
    return;
  }

  const letters = targets.flatMap(splitLetters);
  let rafId = 0;

  const render = () => {
    rafId = 0;
    const scrollRange = Math.max(1, Math.min(window.innerHeight, 880));
    const progress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);

    letters.forEach((letter) => {
      const speed = Number.parseFloat(letter.dataset.speed || "1");
      const xFactor = Number.parseFloat(letter.dataset.x || "0");
      const rotation = Number.parseFloat(letter.dataset.rotation || "0");
      const x = xFactor * 22 * progress;
      const y = (1 - speed) * 150 * progress;

      letter.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation * progress}deg)`;
    });
  };

  const requestRender = () => {
    if (rafId) {
      return;
    }
    rafId = window.requestAnimationFrame(render);
  };

  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
  render();
}
