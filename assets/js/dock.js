import { siteProfile } from "../../data/site.js";

function iconSvg(name) {
  const common = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  if (name === "home") {
    return `<svg ${common}><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13V10.5"/></svg>`;
  }

  if (name === "archive") {
    return `<svg ${common}><rect x="3" y="4" width="18" height="5"/><path d="M5 9v11h14V9"/><path d="M10 13h4"/></svg>`;
  }

  if (name === "experience") {
    return `<svg ${common}><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6"/><path d="M10 17h6"/></svg>`;
  }

  if (name === "contact") {
    return `<svg ${common}><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>`;
  }

  if (name === "github") {
    return `<svg ${common}><path d="M9 19c-4.5 1.4-4.5-2.5-6.5-3"/><path d="M15 22v-3.7a3.2 3.2 0 0 0-.9-2.5c3 0 6-1.8 6-6.2a4.8 4.8 0 0 0-1.2-3.3 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.6 11.6 0 0 0-6 0C7.2 3 6.2 3.3 6.2 3.3a4.4 4.4 0 0 0-.1 3.2 4.8 4.8 0 0 0-1.2 3.3c0 4.4 3 6.2 6 6.2a3.2 3.2 0 0 0-.9 2.5V22"/></svg>`;
  }

  if (name === "linkedin") {
    return `<svg ${common}><path d="M6.5 8.5V20"/><path d="M6.5 4.5h.01"/><path d="M11 20v-6.3a3.2 3.2 0 0 1 6.4 0V20"/><path d="M11 10h0v10"/></svg>`;
  }

  return `<svg ${common}><path d="M12 22s7-4.6 7-11V6l-7-3-7 3v5c0 6.4 7 11 7 11z"/><path d="M9.5 12.3 11.2 14l3.3-3.3"/></svg>`;
}

function getBasePath() {
  return document.body.classList.contains("project-page") ? "../" : "";
}

function isActivePath(href) {
  const current = new URL(window.location.href).pathname
    .toLowerCase()
    .replace(/\/+$/, "");
  const target = new URL(href, window.location.href).pathname
    .toLowerCase()
    .replace(/\/+$/, "");

  if (target.endsWith("index.html")) {
    return current === target || current === target.replace(/\/index\.html$/, "");
  }

  return current === target;
}

function createDockItems(basePath) {
  const items = [
    { label: "Home", href: `${basePath}index.html`, icon: "home" },
    { label: "Portfolio", href: `${basePath}portfolio.html`, icon: "archive" },
    { label: "Experience", href: `${basePath}experience.html`, icon: "experience" },
    { label: "Contact", href: `${basePath}contact.html`, icon: "contact" }
  ];

  if (siteProfile.links?.github) {
    items.push({
      label: "GitHub",
      href: siteProfile.links.github,
      icon: "github",
      external: true
    });
  }

  if (siteProfile.links?.linkedin) {
    items.push({
      label: "LinkedIn",
      href: siteProfile.links.linkedin,
      icon: "linkedin",
      external: true
    });
  }

  return items;
}

function setItemSize(item, size) {
  item.style.setProperty("--dock-item-size", `${size}px`);
}

function initMagnify(dock, options) {
  const { baseItemSize, magnification, distance } = options;
  const items = [...dock.querySelectorAll("[data-dock-item]")];
  const isHorizontalLayout = () =>
    window.matchMedia("(max-width: 900px)").matches;

  const reset = () => {
    items.forEach((item) => setItemSize(item, baseItemSize));
  };

  const updateByPointer = (clientX, clientY) => {
    const useHorizontal = isHorizontalLayout();
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const center = useHorizontal
        ? rect.left + rect.width / 2
        : rect.top + rect.height / 2;
      const pointer = useHorizontal ? clientX : clientY;
      const delta = Math.abs(pointer - center);
      const influence = Math.max(0, 1 - delta / distance);
      const eased = influence * influence * (3 - 2 * influence);
      const size = baseItemSize + (magnification - baseItemSize) * eased;
      setItemSize(item, size);
    });
  };

  dock.addEventListener("pointermove", (event) => {
    updateByPointer(event.clientX, event.clientY);
  });

  dock.addEventListener("pointerleave", reset);
  window.addEventListener("resize", reset);

  items.forEach((item) => {
    item.addEventListener("focus", () => {
      setItemSize(item, magnification);
    });

    item.addEventListener("blur", reset);
  });

  reset();
}

export function initSiteDock({
  panelHeight = 68,
  baseItemSize = 50,
  magnification = 70,
  distance = 200
} = {}) {
  if (document.querySelector(".site-dock-wrap")) {
    return;
  }

  const basePath = getBasePath();
  const items = createDockItems(basePath);

  const wrap = document.createElement("aside");
  wrap.className = "site-dock-wrap";

  const dock = document.createElement("nav");
  dock.className = "site-dock";
  dock.setAttribute("aria-label", "Page dock");
  dock.style.setProperty("--dock-panel-height", `${panelHeight}px`);

  items.forEach((item) => {
    const link = document.createElement("a");
    link.className = "dock-link";
    if (!item.external && isActivePath(item.href)) {
      link.classList.add("is-active");
    }
    link.href = item.href;
    if (item.external) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.setAttribute("data-dock-item", "");
    link.setAttribute("aria-label", item.label);
    link.innerHTML = `
      <span class="dock-icon">${iconSvg(item.icon)}</span>
      <span class="dock-label">${item.label}</span>
    `;
    dock.appendChild(link);
  });

  wrap.appendChild(dock);
  document.body.appendChild(wrap);
  document.body.classList.add("has-dock");

  initMagnify(dock, { baseItemSize, magnification, distance });
  initAutoHide(wrap, dock);
}

// On desktop the dock tucks away off the left edge so it never covers content.
// Hovering the edge peeks it out, and it tucks back when the pointer leaves.
// Clicking the tab (or the pin while it is peeking) keeps it out until the
// reader puts it away with the same button; that choice is remembered. Either
// way the page moves over to make room. On narrow screens the dock is
// a bottom bar and none of this applies (see the CSS).
function initAutoHide(wrap, dock) {
  const storageKey = "dock-pinned";
  const body = document.body;
  let closeTimer = 0;

  const edge = document.createElement("div");
  edge.className = "dock-edge";
  edge.setAttribute("aria-hidden", "true");

  const handle = document.createElement("button");
  handle.type = "button";
  handle.className = "dock-handle";
  handle.setAttribute("aria-label", "Show navigation");

  const pin = document.createElement("button");
  pin.type = "button";
  pin.className = "dock-pin";
  const svgAttrs =
    'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  // Pin while it is only peeking out; an arrow to put it away once it is kept out.
  const pinIcon = `<svg ${svgAttrs}><path d="M9 4h6l-1 6 3 3v2H7v-2l3-3z"/><path d="M12 15v6"/></svg>`;
  const putAwayIcon = `<svg ${svgAttrs}><path d="M14 6l-6 6 6 6"/><path d="M19 5v14"/></svg>`;
  dock.appendChild(pin);
  body.append(edge, handle);

  const isPinned = () => body.classList.contains("dock-pinned");
  const sync = () => {
    body.classList.toggle("dock-shown", isPinned() || body.classList.contains("dock-open"));
  };
  const setOpen = (open) => {
    window.clearTimeout(closeTimer);
    body.classList.toggle("dock-open", open);
    sync();
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      const stillInUse =
        wrap.matches(":hover") || edge.matches(":hover") || wrap.contains(document.activeElement);
      if (!stillInUse) {
        setOpen(false);
      }
    }, 450);
  };
  const setPinned = (pinned) => {
    body.classList.toggle("dock-pinned", pinned);
    pin.setAttribute("aria-pressed", String(pinned));
    pin.innerHTML = pinned ? putAwayIcon : pinIcon;
    const label = pinned ? "Put navigation away" : "Keep navigation open";
    pin.setAttribute("aria-label", label);
    pin.title = label;
    sync();
    try {
      window.localStorage.setItem(storageKey, pinned ? "1" : "0");
    } catch {
      // Storage can be unavailable (private mode); the pin then lasts for this page only.
    }
  };

  let startPinned = false;
  try {
    startPinned = window.localStorage.getItem(storageKey) === "1";
  } catch {
    startPinned = false;
  }
  setPinned(startPinned);

  // Hovering the edge peeks the dock out after a beat. The short wait lets a
  // deliberate click on the tab land first, and a click keeps the dock out.
  let peekTimer = 0;
  const peek = () => {
    window.clearTimeout(peekTimer);
    peekTimer = window.setTimeout(() => setOpen(true), 180);
  };
  const cancelPeek = () => window.clearTimeout(peekTimer);
  const keepOut = () => {
    cancelPeek();
    setPinned(true);
  };

  edge.addEventListener("pointerenter", peek);
  edge.addEventListener("pointerleave", () => {
    cancelPeek();
    scheduleClose();
  });
  edge.addEventListener("click", keepOut);
  handle.addEventListener("pointerenter", peek);
  handle.addEventListener("pointerleave", cancelPeek);
  wrap.addEventListener("pointerenter", () => setOpen(true));
  wrap.addEventListener("pointerleave", scheduleClose);
  wrap.addEventListener("focusin", () => setOpen(true));
  wrap.addEventListener("focusout", scheduleClose);
  handle.addEventListener("click", keepOut);
  pin.addEventListener("click", () => {
    if (isPinned()) {
      // Putting it away tucks it in straight away, even with the pointer on it.
      setPinned(false);
      setOpen(false);
    } else {
      setPinned(true);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !isPinned()) {
      setOpen(false);
    }
  });
  // Touch screens have no hover: tapping anywhere else puts the dock away again.
  document.addEventListener("pointerdown", (event) => {
    if (!isPinned() && !wrap.contains(event.target) && event.target !== handle) {
      setOpen(false);
    }
  });
}
