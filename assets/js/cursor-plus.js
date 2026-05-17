const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  ".filter-select",
  ".gallery-dot",
  ".dock-link"
].join(",");

export function initCursorPlus() {
  const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supportsFinePointer || reduceMotion || document.querySelector(".cursor-plus")) {
    return;
  }

  const cursor = document.createElement("div");
  cursor.className = "cursor-plus";
  cursor.setAttribute("aria-hidden", "true");
  document.body.appendChild(cursor);
  document.body.classList.add("has-custom-cursor");

  let pointerX = -100;
  let pointerY = -100;
  let rafId = 0;

  const render = () => {
    rafId = 0;
    cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%) rotate(var(--cursor-rotation))`;
  };

  const requestRender = () => {
    if (rafId) {
      return;
    }
    rafId = window.requestAnimationFrame(render);
  };

  const setTargetState = (target) => {
    const activeTarget = target.closest?.(interactiveSelector);
    const githubTarget = target.closest?.(".headshot-link, [data-profile-link='github']");

    cursor.classList.toggle("is-active", Boolean(activeTarget));
    cursor.classList.toggle("is-github", Boolean(githubTarget));
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add("is-visible");
      setTargetState(event.target);
      requestRender();
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", () => {
    cursor.classList.add("is-down");
  });

  window.addEventListener("pointerup", () => {
    cursor.classList.remove("is-down");
  });

  document.addEventListener("pointerleave", () => {
    cursor.classList.remove("is-visible");
  });
}
