function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) {
    return { h: 40, s: 80, l: 80 };
  }

  return {
    h: Number.parseFloat(match[1]),
    s: Number.parseFloat(match[2]),
    l: Number.parseFloat(match[3])
  };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars = {};

  for (let i = 0; i < opacities.length; i += 1) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }

  return vars;
}

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%"
];
const GRADIENT_KEYS = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven"
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors) {
  const vars = {};

  for (let i = 0; i < 7; i += 1) {
    const color = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${color} 0px, transparent 50%)`;
  }

  vars["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x) {
  return 1 - (1 - x) ** 3;
}

function easeInCubic(x) {
  return x ** 3;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd
}) {
  const t0 = performance.now() + delay;

  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));

    if (t < 1) {
      requestAnimationFrame(tick);
    } else if (onEnd) {
      onEnd();
    }
  }

  setTimeout(() => requestAnimationFrame(tick), delay);
}

function getCenterOfElement(el) {
  const rect = el.getBoundingClientRect();
  return [rect.width / 2, rect.height / 2];
}

function getEdgeProximity(el, x, y) {
  const [cx, cy] = getCenterOfElement(el);
  const dx = x - cx;
  const dy = y - cy;
  let kx = Number.POSITIVE_INFINITY;
  let ky = Number.POSITIVE_INFINITY;

  if (dx !== 0) {
    kx = cx / Math.abs(dx);
  }

  if (dy !== 0) {
    ky = cy / Math.abs(dy);
  }

  return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
}

function getCursorAngle(el, x, y) {
  const [cx, cy] = getCenterOfElement(el);
  const dx = x - cx;
  const dy = y - cy;

  if (dx === 0 && dy === 0) {
    return 0;
  }

  const radians = Math.atan2(dy, dx);
  let degrees = radians * (180 / Math.PI) + 90;

  if (degrees < 0) {
    degrees += 360;
  }

  return degrees;
}

function ensureEdgeLayer(card) {
  let edgeLayer = card.querySelector(":scope > .edge-light");

  if (!edgeLayer) {
    edgeLayer = document.createElement("span");
    edgeLayer.className = "edge-light";
    edgeLayer.setAttribute("aria-hidden", "true");
    card.appendChild(edgeLayer);
  }
}

function applyVars(card, options) {
  const computed = getComputedStyle(card);
  const resolvedBackground =
    options.backgroundColor || computed.backgroundColor || "#060010";

  const vars = {
    "--card-bg": resolvedBackground,
    "--edge-sensitivity": String(options.edgeSensitivity),
    "--border-radius": `${options.borderRadius}px`,
    "--glow-padding": `${options.glowRadius}px`,
    "--cone-spread": String(options.coneSpread),
    "--fill-opacity": String(options.fillOpacity),
    ...buildGlowVars(options.glowColor, options.glowIntensity),
    ...buildGradientVars(options.colors)
  };

  Object.entries(vars).forEach(([key, value]) => {
    card.style.setProperty(key, value);
  });
}

function attachPointerHandlers(card) {
  const onPointerMove = (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);

    card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  };

  const onPointerLeave = () => {
    card.style.setProperty("--edge-proximity", "0");
  };

  card.addEventListener("pointermove", onPointerMove);
  card.addEventListener("pointerleave", onPointerLeave);
}

function runSweep(card) {
  const angleStart = 110;
  const angleEnd = 465;
  card.classList.add("sweep-active");
  card.style.setProperty("--cursor-angle", `${angleStart}deg`);

  animateValue({
    duration: 500,
    onUpdate: (value) => card.style.setProperty("--edge-proximity", value)
  });

  animateValue({
    ease: easeInCubic,
    duration: 1500,
    end: 50,
    onUpdate: (value) => {
      const angle = (angleEnd - angleStart) * (value / 100) + angleStart;
      card.style.setProperty("--cursor-angle", `${angle}deg`);
    }
  });

  animateValue({
    ease: easeOutCubic,
    delay: 1500,
    duration: 2250,
    start: 50,
    end: 100,
    onUpdate: (value) => {
      const angle = (angleEnd - angleStart) * (value / 100) + angleStart;
      card.style.setProperty("--cursor-angle", `${angle}deg`);
    }
  });

  animateValue({
    ease: easeInCubic,
    delay: 2500,
    duration: 1500,
    start: 100,
    end: 0,
    onUpdate: (value) => card.style.setProperty("--edge-proximity", value),
    onEnd: () => card.classList.remove("sweep-active")
  });
}

function setupBorderGlow(card, options) {
  if (card.dataset.borderGlowInit === "true") {
    applyVars(card, options);
    return;
  }

  card.dataset.borderGlowInit = "true";
  card.classList.add("border-glow-card");
  ensureEdgeLayer(card);
  applyVars(card, options);
  attachPointerHandlers(card);

  if (options.animated) {
    runSweep(card);
  }
}

const defaultOptions = {
  edgeSensitivity: 30,
  glowColor: "200 90 88",
  backgroundColor: "",
  borderRadius: 28,
  glowRadius: 40,
  glowIntensity: 1,
  coneSpread: 25,
  animated: false,
  colors: ["#93c5fd", "#60a5fa", "#38bdf8"],
  fillOpacity: 0.4
};

export function initBorderGlow(targets, options = {}) {
  const resolvedOptions = { ...defaultOptions, ...options };
  const elements =
    typeof targets === "string"
      ? [...document.querySelectorAll(targets)]
      : [...(targets || [])];

  elements.forEach((element) => setupBorderGlow(element, resolvedOptions));
}
