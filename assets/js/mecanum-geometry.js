// Mecanum wheel geometry calculator.
// Wheel axis is z. One roller's axis passes through (d, 0, 0) with direction (0, sin a, cos a).
import { siteProfile } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { initClickSpark } from "./click-spark.js";
import { initCursorPlus } from "./cursor-plus.js";
import { initSiteDock } from "./dock.js";
import { initRandomProjectLink, populateSharedProfile } from "./shared.js";

populateSharedProfile(siteProfile);
initSiteDock();
initRandomProjectLink(projects);
initClickSpark();
initCursorPlus();

const $ = (id) => document.getElementById(id);
const css = (name) => getComputedStyle(document.body).getPropertyValue(name).trim();
const DEG = 180 / Math.PI;
const MONO = '"IBM Plex Mono", monospace';

// ---------------------------------------------------------------- inputs
const P = {};
const wheelFields = [
  { id: "N", label: "Number of rollers", min: 4, max: 16, step: 1, value: 10 },
  { id: "d", label: "Roller axis offset from wheel axis, d", min: 15, max: 80, step: 0.001, value: 34.686 },
  { id: "r0", label: "Roller radius at its middle, r0", min: 3, max: 20, step: 0.1, value: 7.5 },
  { id: "alpha", label: "Roller angle to wheel axis (deg)", min: 20, max: 70, step: 1, value: 45 },
  { id: "L", label: "Roller length", min: 10, max: 60, step: 0.1, value: 31 },
  { id: "arc", label: "Profile arc radius", min: 30, max: 200, step: 0.1, value: 72.5 }
];
const flangeFields = [
  { id: "T", label: "Sheet thickness, T", min: 0.5, max: 5, step: 0.1, value: 2.5 },
  { id: "Ri", label: "Inside bend radius, Ri", min: 0.2, max: 6, step: 0.1, value: 2.5 },
  { id: "K", label: "K-factor", min: 0.25, max: 0.5, step: 0.01, value: 0.4 },
  { id: "w", label: "Tab width", min: 6, max: 20, step: 0.5, value: 10 },
  { id: "hole", label: "Tab hole diameter", min: 2, max: 8, step: 0.1, value: 3.4 },
  { id: "clear", label: "Roller end clearance to tab", min: 0.2, max: 4, step: 0.01, value: 0.96 },
  { id: "h", label: "Tab hole height above plate", min: 2, max: 15, step: 0.01, value: 4.94 },
  { id: "rb", label: "Body radius", min: 10, max: 80, step: 0.1, value: 31 },
  { id: "slot", label: "Relief slot width", min: 0.5, max: 4, step: 0.1, value: 1.5 },
  { id: "arm", label: "Arm length behind the bend", min: 2, max: 20, step: 0.5, value: 6 },
  { id: "boltN", label: "Bolt holes", min: 0, max: 8, step: 1, value: 4 },
  { id: "pcd", label: "Bolt circle diameter", min: 10, max: 120, step: 0.5, value: 40 },
  { id: "boltD", label: "Bolt hole diameter", min: 2, max: 8, step: 0.1, value: 3.4 },
  { id: "bore", label: "Square drive bore, side (0 for none)", min: 0, max: 40, step: 0.5, value: 15 }
];
const motionFields = [
  { id: "vx", label: "Forward speed vx (mm/s)", min: -500, max: 500, step: 10, value: 200 },
  { id: "vy", label: "Sideways speed vy (mm/s)", min: -500, max: 500, step: 10, value: 0 },
  { id: "wz", label: "Turn rate wz (deg/s)", min: -180, max: 180, step: 5, value: 0 },
  { id: "lx", label: "Half wheelbase lx", min: 30, max: 300, step: 5, value: 100 },
  { id: "ly", label: "Half track ly", min: 30, max: 300, step: 5, value: 100 }
];
const presets = [
  { name: "hi4, 8 rollers", v: { N: 8, L: 31, arc: 72.5 }, exact: false },
  { name: "bye, 10 rollers", v: { N: 10, L: 31, arc: 72.5 }, exact: false },
  { name: "Exact, 10 rollers", v: { N: 10, L: 34.4, arc: 77.8 }, exact: true },
  { name: "Exact, 9 rollers", v: { N: 9, L: 38.3, arc: 78 }, exact: true }
];
const presetBase = { d: 34.686, r0: 7.5, alpha: 45 };
const setters = {};

function buildFields(host, list) {
  for (const f of list) {
    P[f.id] = f.value;
    const row = document.createElement("div");
    row.className = "field";
    row.innerHTML = `<label for="f-${f.id}">${f.label}</label>
      <input type="range" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}" aria-label="${f.label}">
      <input type="number" id="f-${f.id}" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.value}">`;
    host.appendChild(row);
    const [range, number] = row.querySelectorAll("input");
    const set = (raw, from) => {
      const x = parseFloat(raw);
      if (!Number.isFinite(x)) return;
      P[f.id] = Math.min(f.max, Math.max(f.min, x));
      if (from !== range) range.value = P[f.id];
      if (from !== number) number.value = P[f.id];
      markPreset(null);
      update();
    };
    range.addEventListener("input", () => set(range.value, range));
    number.addEventListener("change", () => set(number.value, number));
    setters[f.id] = (v) => {
      P[f.id] = v;
      range.value = v;
      number.value = v;
    };
  }
}
buildFields($("wheel-inputs"), wheelFields);
buildFields($("flange-inputs"), flangeFields);
buildFields($("motion-inputs"), motionFields);

const exactBox = $("use-exact");
const mirrorBox = $("flange-mirror");
exactBox.addEventListener("change", () => { markPreset(null); update(); });
mirrorBox.addEventListener("change", update);

function markPreset(button) {
  document.querySelectorAll("#presets button").forEach((b) => b.classList.toggle("is-active", b === button));
}
presets.forEach((p) => {
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = p.name;
  b.addEventListener("click", () => {
    Object.entries({ ...presetBase, ...p.v }).forEach(([k, v]) => setters[k](v));
    exactBox.checked = p.exact;
    markPreset(b);
    update();
  });
  $("presets").appendChild(b);
});

// ---------------------------------------------------------------- geometry
function wheelModel() {
  const a = (P.alpha * Math.PI) / 180;
  const sa = Math.sin(a), ca = Math.cos(a), s2 = sa * sa;
  const d = P.d, r0 = P.r0, R = d + r0, half = P.L / 2, N = Math.round(P.N);
  const pitch = (2 * Math.PI) / N;

  // Exact profile, parametrised by the roller-axis parameter t: returns [s, r].
  const exactAt = (t) => {
    const rho = Math.hypot(d, t * sa), k = (t * s2) / rho;
    return [t + (R - rho) * k, (R - rho) * Math.sqrt(Math.max(0, 1 - k * k))];
  };
  const tOfS = (s) => {
    let lo = 0, hi = Math.abs(s) + 1;
    for (let i = 0; i < 50; i++) {
      const m = (lo + hi) / 2;
      if (exactAt(m)[0] < Math.abs(s)) lo = m; else hi = m;
    }
    return lo;
  };
  const rExact = (s) => exactAt(tOfS(s))[1];
  const rArc = (s) => Math.sqrt(Math.max(0, P.arc * P.arc - s * s)) - (P.arc - r0);
  const r = (s) => Math.max(0, exactBox.checked ? rExact(s) : rArc(s));

  const n = 360, S = [], Rr = [];
  for (let i = 0; i <= n; i++) {
    S.push(-half + (P.L * i) / n);
    Rr.push(r(S[i]));
  }
  const support = (q) => {
    const cq = Math.cos(q), sq = Math.sin(q), up = Math.sqrt(1 - sq * sq * s2);
    let best = -1e9;
    for (let i = 0; i <= n; i++) best = Math.max(best, d * cq + S[i] * sa * sq + Rr[i] * up);
    return best;
  };
  const effective = (q) => {
    const base = q - Math.round(q / pitch) * pitch;
    return Math.max(support(base), support(base - pitch), support(base + pitch));
  };

  // Arc through the middle point and an end point of the exact profile.
  const fitArc = (sEnd, rEnd) => (sEnd * sEnd + (r0 - rEnd) ** 2) / (2 * (r0 - rEnd));
  const coverageFor = (count) => {
    const tEnd = (d * Math.tan(Math.PI / count)) / sa;
    const [sEnd, rEnd] = exactAt(tEnd);
    return { tEnd, sEnd, rEnd, arc: fitArc(sEnd, rEnd) };
  };
  const neighbourGap = (count, halfLen, radius) => {
    const m = 50, step = (2 * Math.PI) / count;
    const pos = (s, q) => {
      const y = s * sa;
      return [d * Math.cos(q) - y * Math.sin(q), d * Math.sin(q) + y * Math.cos(q), s * ca];
    };
    let gap = 1e9;
    for (let i = 0; i <= m; i++) {
      const s = -halfLen + (2 * halfLen * i) / m, p = pos(s, 0), rs = radius(s);
      for (let j = 0; j <= m; j++) {
        const t = -halfLen + (2 * halfLen * j) / m, q = pos(t, step);
        gap = Math.min(gap, Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) - rs - radius(t));
      }
    }
    return gap;
  };

  return {
    a, sa, ca, s2, d, r0, R, half, N, pitch, r, rExact, rArc, exactAt, tOfS, effective, coverageFor, neighbourGap, fitArc,
    need: coverageFor(N),
    cover: 2 * Math.atan((tOfS(half) * sa) / d),
    gap: neighbourGap(N, half, r)
  };
}

// Hub flange: bent geometry and flat pattern. Local frame per tab: x radial, y tangential.
function flangeModel(M) {
  const { d, sa, ca, a, pitch, N } = M;
  const T = P.T, w = P.w, s = P.slot, rb = P.rb;
  const tH = M.half + P.clear + T / 2;          // tab mid-plane along the roller axis
  const yH = tH * sa;                           // hole offset from the roller centre line
  const yB = yH - P.h / Math.tan(a);            // bend line offset
  const zc = tH * ca + P.h;                     // plate mid-surface to wheel mid-plane
  const correction = a * (P.Ri + P.K * T) - 2 * (P.Ri + T / 2) * Math.tan(a / 2);
  const flatLen = P.h / sa + correction;        // bend line to hole centre in the flat
  const yC = yB + flatLen, yA = yB - P.arm;
  const xi = d - w / 2, xo = d + w / 2, xs = xi - s;

  // Outermost point of the bent tab (R w/2 round about the roller axis, on both faces).
  let reach = 0, reachAngle = 0;
  for (const t of [tH - T / 2, tH + T / 2]) {
    for (let i = 0; i < 360; i++) {
      const ph = (i * Math.PI) / 180;
      const x = d + (w / 2) * Math.cos(ph), y = t * sa + (w / 2) * Math.sin(ph) * ca;
      if (Math.hypot(x, y) > reach) { reach = Math.hypot(x, y); reachAngle = Math.atan2(y, x); }
    }
  }

  const warnings = [];
  if (rb < xi + 1) warnings.push("Body radius is too small: the tabs are not joined to the body.");
  if (rb >= xo) warnings.push("Body radius is too large: it swallows the tabs.");
  if (rb > Math.hypot(d, yC) - w / 2 - 0.5) warnings.push("Body radius is too large: it runs into the tab ends.");
  const y7 = Math.sqrt(Math.max(0, rb * rb - xs * xs));
  if (y7 < yB + 0.5) warnings.push("The relief slot has no length: raise the body radius or narrow the slot.");
  if (Math.abs(yA) >= rb) warnings.push("Arm length is too long for this body radius.");
  const x1 = Math.sqrt(Math.max(0, rb * rb - yA * yA));
  const angleOut = Math.atan2(y7, xs), angleIn = Math.atan2(yA, x1);
  if (angleOut > pitch + angleIn - 0.02) warnings.push("Tabs overlap: too many rollers for this tab layout.");
  // gap between this tab's round end and the next tab's arm
  const nextGap = -(-d * Math.sin(pitch) + yC * Math.cos(pitch)) + yA - w / 2;
  if (nextGap < 0.5) warnings.push("A tab end runs into the next arm in the flat: shorten the arm or reduce the tab width.");
  if (P.boltN > 0 && P.pcd / 2 + P.boltD / 2 > rb - 1) warnings.push("Bolt circle is outside the body.");
  if (P.bore > 0 && P.boltN > 0 && (P.bore * Math.SQRT2) / 2 > P.pcd / 2 - P.boltD / 2 - 1) warnings.push("Drive bore runs into the bolt holes.");

  const segs = [], holes = [], bends = [];
  const rot = (p, q) => [p[0] * Math.cos(q) - p[1] * Math.sin(q), p[0] * Math.sin(q) + p[1] * Math.cos(q)];
  for (let k = 0; k < N; k++) {
    const q = k * pitch;
    const line = (p1, p2) => segs.push({ type: "line", a: rot(p1, q), b: rot(p2, q) });
    const arc = (c, r, a0, a1) => segs.push({ type: "arc", c: rot(c, q), r, a0: a0 + q, a1: a1 + q });
    line([x1, yA], [xo, yA]);
    line([xo, yA], [xo, yC]);
    arc([d, yC], w / 2, 0, Math.PI);
    line([xi, yC], [xi, yB]);
    arc([xi - s / 2, yB], s / 2, Math.PI, 2 * Math.PI);
    line([xs, yB], [xs, y7]);
    segs.push({ type: "arc", c: [0, 0], r: rb, a0: q + angleOut, a1: q + pitch + angleIn });
    holes.push({ c: rot([d, yC], q), r: P.hole / 2 });
    bends.push({ a: rot([xi, yB], q), b: rot([xo, yB], q) });
  }
  for (let k = 0; k < Math.round(P.boltN); k++) {
    const q = (k * 2 * Math.PI) / Math.round(P.boltN);
    holes.push({ c: [(P.pcd / 2) * Math.cos(q), (P.pcd / 2) * Math.sin(q)], r: P.boltD / 2 });
  }
  const bore = [];
  if (P.bore > 0) {
    const c = (P.bore * Math.SQRT2) / 2, pts = [[c, 0], [0, c], [-c, 0], [0, -c]];
    pts.forEach((p, i) => bore.push({ type: "line", a: p, b: pts[(i + 1) % 4] }));
  }
  const flat = { segs: segs.concat(bore), holes, bends };
  if (mirrorBox.checked) {
    const m = (p) => [p[0], -p[1]];
    flat.segs = flat.segs.map((g) => g.type === "line" ? { type: "line", a: m(g.a), b: m(g.b) } : { type: "arc", c: m(g.c), r: g.r, a0: -g.a1, a1: -g.a0 });
    flat.holes = flat.holes.map((g) => ({ c: m(g.c), r: g.r }));
    flat.bends = flat.bends.map((g) => ({ a: m(g.a), b: m(g.b) }));
  }
  const blank = Math.hypot(xo, yC + w / 2);
  return { T, w, tH, yH, yB, yA, yC, zc, correction, flatLen, xi, xo, reach, reachAngle, warnings, flat, blank, rb };
}

function dxfText(flat) {
  const f = (v) => (Math.abs(v) < 1e-9 ? 0 : v).toFixed(4);
  const out = ["0", "SECTION", "2", "HEADER", "9", "$ACADVER", "1", "AC1009", "9", "$INSUNITS", "70", "4", "0", "ENDSEC",
    "0", "SECTION", "2", "TABLES", "0", "TABLE", "2", "LAYER", "70", "2",
    "0", "LAYER", "2", "CUT", "70", "0", "62", "7", "6", "CONTINUOUS",
    "0", "LAYER", "2", "BEND", "70", "0", "62", "1", "6", "CONTINUOUS",
    "0", "ENDTAB", "0", "ENDSEC", "0", "SECTION", "2", "ENTITIES"];
  const line = (g, layer) => out.push("0", "LINE", "8", layer, "10", f(g.a[0]), "20", f(g.a[1]), "30", "0", "11", f(g.b[0]), "21", f(g.b[1]), "31", "0");
  for (const g of flat.segs) {
    if (g.type === "line") line(g, "CUT");
    else {
      const norm = (v) => (((v * DEG) % 360) + 360) % 360;
      out.push("0", "ARC", "8", "CUT", "10", f(g.c[0]), "20", f(g.c[1]), "30", "0", "40", f(g.r), "50", f(norm(g.a0)), "51", f(norm(g.a1)));
    }
  }
  for (const h of flat.holes) out.push("0", "CIRCLE", "8", "CUT", "10", f(h.c[0]), "20", f(h.c[1]), "30", "0", "40", f(h.r));
  for (const b of flat.bends) line(b, "BEND");
  out.push("0", "ENDSEC", "0", "EOF");
  return out.join("\r\n") + "\r\n";
}

function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------------------------------------------------------------- drawing
function setup(canvas) {
  if (!canvas.dataset.h) canvas.dataset.h = canvas.getAttribute("height"); // setting canvas.height rewrites the attribute
  const w = canvas.clientWidth, h = +canvas.dataset.h;
  if (!w) return null; // inside a folded section
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.height = `${h}px`;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  return { ctx, w, h };
}

function niceStep(span, target) {
  const raw = span / target, mag = 10 ** Math.floor(Math.log10(raw)), f = raw / mag;
  return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * mag;
}

function plot(canvas, series, opt) {
  const view = setup(canvas);
  if (!view) return;
  const { ctx, w, h } = view;
  const pad = { l: 60, r: 14, t: 12, b: 40 };
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const s of series) for (const [x, y] of s.pts) {
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  }
  const span = Math.max(y1 - y0, opt.minSpan || 1e-6);
  y0 -= span * 0.12;
  y1 = y0 + span * 1.24;
  const X = (x) => pad.l + ((x - x0) / (x1 - x0)) * (w - pad.l - pad.r);
  const Y = (y) => h - pad.b - ((y - y0) / (y1 - y0)) * (h - pad.t - pad.b);
  const grid = "rgba(150, 190, 232, 0.12)", muted = css("--muted");
  ctx.font = `500 11.5px ${MONO}`;
  ctx.lineWidth = 1;
  const xs = niceStep(x1 - x0, 7), ys = niceStep(y1 - y0, 5);
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let x = Math.ceil(x0 / xs) * xs; x <= x1 + 1e-9; x += xs) {
    ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(X(x), pad.t); ctx.lineTo(X(x), h - pad.b); ctx.stroke();
    ctx.fillStyle = muted; ctx.fillText(String(+x.toFixed(6)), X(x), h - pad.b + 6);
  }
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  const dec = Math.max(0, -Math.floor(Math.log10(ys)));
  for (let y = Math.ceil(y0 / ys) * ys; y <= y1 + 1e-9; y += ys) {
    ctx.strokeStyle = grid; ctx.beginPath(); ctx.moveTo(pad.l, Y(y)); ctx.lineTo(w - pad.r, Y(y)); ctx.stroke();
    ctx.fillStyle = muted; ctx.fillText(y.toFixed(dec), pad.l - 7, Y(y));
  }
  ctx.fillStyle = muted;
  ctx.font = '600 11.5px "IBM Plex Sans", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText(opt.xlabel, (pad.l + w - pad.r) / 2, h - 3);
  ctx.save();
  ctx.translate(13, (pad.t + h - pad.b) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textBaseline = "top";
  ctx.fillText(opt.ylabel, 0, 0);
  ctx.restore();
  for (const s of series) {
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.width || 2.2;
    ctx.globalAlpha = s.alpha || 1;
    ctx.setLineDash(s.dash || []);
    ctx.beginPath();
    s.pts.forEach(([x, y], i) => (i ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y))));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.setLineDash([]);
}

function drawSide(M, F) {
  const view = setup($("view-side"));
  if (!view) return;
  const { ctx, w, h } = view;
  const sc = Math.min(w, h) / 2 / (Math.max(M.R, F.reach) * 1.1), cx = w / 2, cy = h / 2;
  ctx.lineWidth = 1;
  for (let k = 0; k < M.N; k++) {
    const q = k * M.pitch, cq = Math.cos(q), sq = Math.sin(q);
    ctx.strokeStyle = k % 2 ? "rgba(92, 174, 247, 0.5)" : "rgba(92, 174, 247, 0.9)";
    for (let i = 0; i <= 24; i++) {
      const s = -M.half + (2 * M.half * i) / 24, r = M.r(s);
      ctx.beginPath();
      for (let j = 0; j <= 40; j++) {
        const ph = (j / 40) * 2 * Math.PI;
        const x = M.d + r * Math.cos(ph), y = s * M.sa + r * Math.sin(ph) * M.ca;
        const px = cx + (x * cq - y * sq) * sc, py = cy - (x * sq + y * cq) * sc;
        if (j) ctx.lineTo(px, py); else ctx.moveTo(px, py);
      }
      ctx.stroke();
    }
  }
  const circle = (r, color, dash) => {
    ctx.strokeStyle = color; ctx.setLineDash(dash); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, r * sc, 0, 7); ctx.stroke(); ctx.setLineDash([]);
  };
  circle(M.R, css("--good"), [6, 5]);
  circle(F.reach, css("--bad"), [2, 4]);
  ctx.fillStyle = css("--muted");
  ctx.beginPath(); ctx.arc(cx, cy, 3, 0, 7); ctx.fill();
}

// Isometric view: flat-shaded quads, painter's algorithm.
const isoDefault = { yaw: -0.72, pitch: 0.5 };
const isoView = { ...isoDefault };
function drawIso(M, F) {
  const view = setup($("view-iso"));
  if (!view) return;
  const { ctx, w, h } = view;
  const polys = [];
  const add = (pts, color) => polys.push({ pts, color });
  const rotZ = (p, q) => [p[0] * Math.cos(q) - p[1] * Math.sin(q), p[0] * Math.sin(q) + p[1] * Math.cos(q), p[2]];

  // rollers
  const na = 12, nc = 16;
  for (let k = 0; k < M.N; k++) {
    const q = k * M.pitch;
    const ring = (s) => {
      const r = M.r(s), out = [];
      for (let j = 0; j < nc; j++) {
        const ph = (j / nc) * 2 * Math.PI;
        // circle about the roller axis: e1 = (1,0,0), e2 = (0, cos a, -sin a)
        out.push(rotZ([M.d + r * Math.cos(ph), s * M.sa + r * Math.sin(ph) * M.ca, s * M.ca - r * Math.sin(ph) * M.sa], q));
      }
      return out;
    };
    let prev = ring(-M.half);
    add(prev.slice().reverse(), "roller");
    for (let i = 1; i <= na; i++) {
      const next = ring(-M.half + (2 * M.half * i) / na);
      for (let j = 0; j < nc; j++) add([prev[j], prev[(j + 1) % nc], next[(j + 1) % nc], next[j]], "roller");
      prev = next;
    }
    add(prev, "roller");
  }
  // hub plates: annular sectors, arms and bent tabs. side = -1 is the plate at -z, +1 its flipped twin.
  for (const side of [-1, 1]) {
    const z = side * F.zc, sectors = 48, inner = Math.max(2, (P.bore * Math.SQRT2) / 2), mid = (inner + F.rb) / 2;
    for (let i = 0; i < sectors; i++) {
      const q0 = (i / sectors) * 2 * Math.PI, q1 = ((i + 1) / sectors) * 2 * Math.PI;
      for (const [ra, rc] of [[inner, mid], [mid, F.rb]]) {
        add([[ra * Math.cos(q0), ra * Math.sin(q0), z], [rc * Math.cos(q0), rc * Math.sin(q0), z],
             [rc * Math.cos(q1), rc * Math.sin(q1), z], [ra * Math.cos(q1), ra * Math.sin(q1), z]], "plate");
      }
    }
    for (let k = 0; k < M.N; k++) {
      const q = k * M.pitch, y = (v) => side * v; // the -z plate has its tabs at -y
      const up = P.h / M.sa + F.w / 2;            // tab length from the bend line
      const tip = [y(F.yB) + side * up * M.ca, z - side * up * M.sa];
      add([[F.xi, y(F.yA), z], [F.xo, y(F.yA), z], [F.xo, y(F.yB), z], [F.xi, y(F.yB), z]].map((p) => rotZ(p, q)), "plate");
      add([[F.xi, y(F.yB), z], [F.xo, y(F.yB), z], [F.xo, tip[0], tip[1]], [F.xi, tip[0], tip[1]]].map((p) => rotZ(p, q)), "tab");
    }
  }

  const cy = Math.cos(isoView.yaw), sy = Math.sin(isoView.yaw), cp = Math.cos(isoView.pitch), sp = Math.sin(isoView.pitch);
  const toView = (p) => {
    // wheel axis horizontal: world = (z, x, y), then yaw about vertical and pitch about horizontal
    const X = p[2], Y = p[0], Z = p[1];
    const x1 = X * cy + Z * sy, z1 = -X * sy + Z * cy;
    return [x1, Y * cp - z1 * sp, Y * sp + z1 * cp];
  };
  const reach = Math.max(M.R, F.reach, F.zc + 4) * 1.25, sc = Math.min(w, h) / 2 / reach;
  const light = [0.4, 0.55, 0.73];
  const base = { roller: [62, 116, 178], plate: [150, 172, 200], tab: [178, 196, 220] };
  const drawn = polys.map((poly) => {
    const v = poly.pts.map(toView);
    const a = v[0], b = v[1], c = v[2];
    let n = [(b[1] - a[1]) * (c[2] - a[2]) - (b[2] - a[2]) * (c[1] - a[1]),
             (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]),
             (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])];
    const len = Math.hypot(...n) || 1;
    n = n.map((x) => x / len);
    if (n[2] < 0) n = n.map((x) => -x); // two-sided: face the viewer
    const shade = 0.34 + 0.66 * Math.max(0, n[0] * light[0] + n[1] * light[1] + n[2] * light[2]);
    return { v, depth: v.reduce((sum, p) => sum + p[2], 0) / v.length, fill: `rgb(${base[poly.color].map((x) => Math.round(x * shade)).join(",")})` };
  });
  drawn.sort((p, q) => p.depth - q.depth);
  ctx.lineWidth = 0.6;
  ctx.lineJoin = "round";
  for (const poly of drawn) {
    ctx.beginPath();
    poly.v.forEach((p, i) => {
      const px = w / 2 + p[0] * sc, py = h / 2 - p[1] * sc;
      if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle = poly.fill;
    ctx.fill();
    ctx.stroke();
  }
}

function drawFlange(F) {
  const view = setup($("view-flange"));
  if (!view) return;
  const { ctx, w, h } = view;
  const sc = Math.min(w, h) / 2 / (F.blank * 1.08), X = (p) => w / 2 + p[0] * sc, Y = (p) => h / 2 - p[1] * sc;
  ctx.lineWidth = 1.8;
  ctx.strokeStyle = css("--accent");
  for (const g of F.flat.segs) {
    ctx.beginPath();
    if (g.type === "line") { ctx.moveTo(X(g.a), Y(g.a)); ctx.lineTo(X(g.b), Y(g.b)); }
    else {
      let a1 = g.a1;
      while (a1 < g.a0) a1 += 2 * Math.PI;
      const steps = Math.max(6, Math.ceil(((a1 - g.a0) * g.r * sc) / 4));
      for (let i = 0; i <= steps; i++) {
        const q = g.a0 + ((a1 - g.a0) * i) / steps, p = [g.c[0] + g.r * Math.cos(q), g.c[1] + g.r * Math.sin(q)];
        if (i) ctx.lineTo(X(p), Y(p)); else ctx.moveTo(X(p), Y(p));
      }
    }
    ctx.stroke();
  }
  for (const hole of F.flat.holes) { ctx.beginPath(); ctx.arc(X(hole.c), Y(hole.c), hole.r * sc, 0, 7); ctx.stroke(); }
  ctx.strokeStyle = css("--warn");
  ctx.setLineDash([5, 4]);
  for (const b of F.flat.bends) { ctx.beginPath(); ctx.moveTo(X(b.a), Y(b.a)); ctx.lineTo(X(b.b), Y(b.b)); ctx.stroke(); }
  ctx.setLineDash([]);
}

function drawRobot(M) {
  const wz = (P.wz * Math.PI) / 180, k = (P.lx + P.ly) * wz;
  const wheels = [
    { name: "Front left", x: 1, y: 1, w: (P.vx - P.vy - k) / M.R },
    { name: "Front right", x: 1, y: -1, w: (P.vx + P.vy + k) / M.R },
    { name: "Rear left", x: -1, y: 1, w: (P.vx + P.vy - k) / M.R },
    { name: "Rear right", x: -1, y: -1, w: (P.vx - P.vy + k) / M.R }
  ];
  $("speed-table").innerHTML = "<tr><th>Wheel</th><th>rad/s</th><th>rpm</th></tr>" +
    wheels.map((u) => `<tr><td>${u.name}</td><td>${u.w.toFixed(2)}</td><td>${((u.w * 60) / (2 * Math.PI)).toFixed(1)}</td></tr>`).join("");
  const view = setup($("view-robot"));
  if (!view) return;
  const { ctx, w, h } = view;
  const sc = Math.min(w / (2 * P.ly + 240), h / (2 * P.lx + 160)), cx = w / 2, cy = h / 2;
  const wmax = Math.max(1e-6, ...wheels.map((u) => Math.abs(u.w)));
  ctx.strokeStyle = css("--border-strong");
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - P.ly * sc, cy - P.lx * sc, 2 * P.ly * sc, 2 * P.lx * sc);
  const ww = 34 * sc + 10, wl = 2 * M.R * sc + 14;
  for (const u of wheels) {
    const px = cx - u.y * P.ly * sc, py = cy - u.x * P.lx * sc; // forward is up, left is left
    ctx.save();
    ctx.translate(px, py);
    ctx.fillStyle = css("--surface");
    ctx.strokeStyle = css("--accent");
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.rect(-ww / 2, -wl / 2, ww, wl); ctx.fill(); ctx.stroke(); ctx.clip();
    ctx.strokeStyle = "rgba(92, 174, 247, 0.6)";
    ctx.lineWidth = 2;
    // rollers visible from above form an X across the four wheels
    for (let o = -wl; o <= wl; o += 9) { ctx.beginPath(); ctx.moveTo(-ww, o - u.x * u.y * ww); ctx.lineTo(ww, o + u.x * u.y * ww); ctx.stroke(); }
    ctx.restore();
    const len = (u.w / wmax) * 46, ax = px + (px < cx ? -1 : 1) * (ww / 2 + 14);
    ctx.strokeStyle = ctx.fillStyle = u.w >= 0 ? css("--good") : css("--warn");
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(ax, py); ctx.lineTo(ax, py - len); ctx.stroke();
    if (Math.abs(len) > 4) {
      const sgn = Math.sign(len);
      ctx.beginPath(); ctx.moveTo(ax, py - len - sgn * 7); ctx.lineTo(ax - 5, py - len); ctx.lineTo(ax + 5, py - len); ctx.fill();
    }
  }
  const v = Math.hypot(P.vx, P.vy);
  if (v > 0) {
    const bx = (-P.vy / v) * 40, by = (-P.vx / v) * 40;
    ctx.strokeStyle = ctx.fillStyle = css("--text");
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + bx, cy + by); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + bx, cy + by, 4, 0, 7); ctx.fill();
  }
  ctx.fillStyle = css("--muted");
  ctx.font = '600 11.5px "IBM Plex Sans", sans-serif';
  ctx.textAlign = "center";
  ctx.fillText("FRONT", cx, 14);
}

// ---------------------------------------------------------------- update
let lastFlange = null, lastConfigs = [];
function update() {
  const M = wheelModel(), F = flangeModel(M);
  lastFlange = F;

  // roller profile and arc error
  const sMax = Math.max(M.half, M.need.sEnd) * 1.02, ex = [], exIn = [], arcIn = [], arcOut = [], err = [];
  for (let i = 0; i <= 200; i++) {
    const s = (sMax * i) / 200, e = M.rExact(s), arc = M.rArc(s);
    ex.push([s, e]);
    if (s <= M.half) { exIn.push([s, e]); arcIn.push([s, arc]); err.push([s, arc - e]); } else arcOut.push([s, arc]);
  }
  const accent = css("--accent"), warm = css("--warn");
  plot($("plot-profile"), [
    { pts: ex, color: accent, alpha: 0.35 }, { pts: arcOut, color: warm, alpha: 0.35 },
    { pts: exIn, color: accent, width: exactBox.checked ? 3 : 2.2 }, { pts: arcIn, color: warm, width: exactBox.checked ? 2.2 : 3 }
  ], { xlabel: "position along roller from its middle (mm)", ylabel: "roller radius (mm)", minSpan: 1 });
  plot($("plot-error"), [
    { pts: [[0, 0], [M.half, 0]], color: css("--muted"), width: 1, dash: [4, 4] }, { pts: err, color: warm }
  ], { xlabel: "position along roller from its middle (mm)", ylabel: "arc minus exact (mm)", minSpan: 0.05 });

  // rolling radius over two pitches
  const eff = [];
  let worst = 0;
  for (let i = 0; i <= 480; i++) {
    const q = -M.pitch + (2 * M.pitch * i) / 480, e = M.effective(q);
    eff.push([q * DEG, e]);
    worst = Math.max(worst, M.R - e);
  }
  const ends = [eff[0][0], eff[eff.length - 1][0]];
  plot($("plot-radius"), [
    { pts: ends.map((x) => [x, M.R]), color: css("--good"), width: 1.6, dash: [6, 5] },
    { pts: ends.map((x) => [x, F.reach]), color: css("--bad"), width: 1.6, dash: [2, 4] },
    { pts: eff, color: accent }
  ], { xlabel: "wheel angle (deg), 0 = middle of a roller", ylabel: "radius (mm)", minSpan: 0.3 });

  drawSide(M, F);
  drawIso(M, F);
  drawFlange(F);
  drawRobot(M);

  // results
  const coverDeg = M.cover * DEG, pitchDeg = M.pitch * DEG;
  const clearance = M.effective(F.reachAngle) - F.reach;
  const stat = (value, label, cls) => `<div class="tool-stat ${cls || ""}"><b>${value}</b><span>${label}</span></div>`;
  $("stats").innerHTML =
    stat(`${(2 * M.R).toFixed(2)} mm`, "Wheel diameter over rollers") +
    stat(`${coverDeg.toFixed(1)}° of ${pitchDeg.toFixed(1)}°`, "Coverage per roller against pitch", coverDeg >= pitchDeg - 0.05 ? "good" : coverDeg > pitchDeg - 4 ? "warn" : "bad") +
    stat(`${(2 * M.need.sEnd).toFixed(1)} mm`, "Roller length for full coverage", P.L >= 2 * M.need.sEnd - 0.05 ? "good" : "warn") +
    stat(`${worst.toFixed(3)} mm`, "Largest drop in rolling radius", worst < 0.1 ? "good" : worst < 0.25 ? "warn" : "bad") +
    stat(`R ${M.fitArc(M.half, M.rExact(M.half)).toFixed(1)}`, "Arc that fits this roller length") +
    stat(`${M.gap.toFixed(2)} mm`, "Smallest gap between neighbouring rollers", M.gap > 1 ? "good" : M.gap > 0 ? "warn" : "bad") +
    stat(`${clearance >= 0 ? "+" : ""}${clearance.toFixed(2)} mm`, "Hub tab clearance to the floor", clearance > 1 ? "good" : clearance > 0 ? "warn" : "bad") +
    stat(`${(2 * F.zc + F.T).toFixed(1)} mm`, "Wheel width over the hub plates");

  // flange table
  const rows = [
    ["Plate spacing, mid-surface to mid-surface", `${(2 * F.zc).toFixed(2)} mm`],
    ["Bend angle", `${P.alpha.toFixed(0)}°`],
    ["Bend line offset from roller centre line", `${F.yB.toFixed(2)} mm`],
    ["Bend line to hole centre, bent", `${(P.h / M.sa).toFixed(2)} mm`],
    ["Bend line to hole centre, flat", `${F.flatLen.toFixed(2)} mm`],
    ["Bend correction", `${F.correction.toFixed(2)} mm`],
    ["Tab reach when bent", `${F.reach.toFixed(2)} mm`],
    ["Blank diameter", `${(2 * F.blank).toFixed(1)} mm`]
  ];
  $("flange-table").innerHTML = rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");
  const warning = $("flange-warning");
  warning.hidden = F.warnings.length === 0;
  warning.textContent = F.warnings.join(" ");

  // configuration table
  lastConfigs = [];
  for (let count = 6; count <= 14; count++) {
    const c = M.coverageFor(count);
    const gap = M.neighbourGap(count, c.sEnd, (s) => Math.max(0, M.rExact(s)));
    lastConfigs.push({ count, length: 2 * c.sEnd, end: 2 * c.rEnd, arc: c.arc, gap });
  }
  $("config-table").innerHTML =
    "<tr><th>Rollers</th><th>Length</th><th>Middle dia</th><th>End dia</th><th>Arc radius</th><th>Gap to neighbour</th></tr>" +
    lastConfigs.map((c) => `<tr class="${c.count === M.N ? "is-current" : ""}"><td>${c.count}</td><td>${c.length.toFixed(2)}</td>
      <td>${(2 * M.r0).toFixed(2)}</td><td>${c.end.toFixed(2)}</td><td>${c.arc.toFixed(2)}</td>
      <td class="${c.gap > 0.8 ? "good" : "bad"}">${c.gap.toFixed(2)}</td></tr>`).join("");
}

$("download-dxf").addEventListener("click", () => {
  const hand = mirrorBox.checked ? "mirrored" : "standard";
  download(`mecanum-hub-flange-${Math.round(P.N)}-rollers-${hand}.dxf`, dxfText(lastFlange.flat), "application/dxf");
});
$("download-csv").addEventListener("click", () => {
  const lines = ["Configuration,Rollers,Length,MiddleDiameter,EndDiameter,ArcRadius,BoreDiameter"];
  lastConfigs.forEach((c) => lines.push([`${c.count}-rollers`, c.count, c.length.toFixed(3), (2 * P.r0).toFixed(3), c.end.toFixed(3), c.arc.toFixed(3), "3.200"].join(",")));
  download("mecanum-roller-configurations.csv", lines.join("\r\n") + "\r\n", "text/csv");
});

// folds
const editor = $("tool-editor");
editor.querySelectorAll("[data-fold-all]").forEach((button) => {
  button.addEventListener("click", () => {
    editor.querySelectorAll(".doc-fold").forEach((fold) => { fold.open = button.dataset.foldAll === "open"; });
  });
});
editor.querySelectorAll(".doc-fold").forEach((fold) => fold.addEventListener("toggle", () => { if (fold.open) update(); }));

// isometric view: drag to rotate
{
  const canvas = $("view-iso");
  let drag = null;
  canvas.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, y: e.clientY, ...isoView }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener("pointermove", (e) => {
    if (!drag) return;
    isoView.yaw = drag.yaw + (e.clientX - drag.x) * 0.01;
    isoView.pitch = Math.max(-1.5, Math.min(1.5, drag.pitch + (e.clientY - drag.y) * 0.01));
    const M = wheelModel();
    drawIso(M, flangeModel(M));
  });
  const end = () => { drag = null; };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  canvas.addEventListener("dblclick", () => { Object.assign(isoView, isoDefault); update(); });
}

// controls drawer: peeks on hover, stays out when clicked, like the site dock
{
  const body = document.body, drawer = $("calc-drawer"), pin = $("calc-pin");
  const handle = document.createElement("button");
  handle.type = "button";
  handle.className = "calc-handle";
  handle.textContent = "Inputs";
  handle.setAttribute("aria-label", "Show presets and inputs");
  const edge = document.createElement("div");
  edge.className = "calc-edge";
  body.append(edge, handle);
  const svg = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const pinIcon = `<svg ${svg}><path d="M9 4h6l-1 6 3 3v2H7v-2l3-3z"/><path d="M12 15v6"/></svg>`;
  const awayIcon = `<svg ${svg}><path d="M10 6l6 6-6 6"/><path d="M5 5v14"/></svg>`;
  let timer = 0;
  const sync = () => {
    const pinned = body.classList.contains("calc-pinned");
    body.classList.toggle("calc-shown", pinned || body.classList.contains("calc-open"));
    pin.innerHTML = pinned ? awayIcon : pinIcon;
    pin.setAttribute("aria-label", pinned ? "Put the panel away" : "Keep the panel open");
    window.setTimeout(update, 260); // plots resize once the page has shifted
  };
  const setOpen = (open) => { window.clearTimeout(timer); body.classList.toggle("calc-open", open); sync(); };
  const wide = () => window.innerWidth > 1100;
  const setPinned = (pinned) => {
    if (!wide()) { setOpen(pinned); return; } // on small screens it only overlays, never stays pinned
    body.classList.toggle("calc-pinned", pinned);
    if (!pinned) body.classList.remove("calc-open");
    try { localStorage.setItem("calc-pinned", pinned ? "1" : "0"); } catch (error) { /* storage unavailable */ }
    sync();
  };
  const scheduleClose = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (!drawer.matches(":hover") && !handle.matches(":hover") && !drawer.contains(document.activeElement)) setOpen(false);
    }, 450);
  };
  let hover = 0;
  [handle, edge].forEach((el) => {
    el.addEventListener("pointerenter", () => { hover = window.setTimeout(() => setOpen(true), 180); });
    el.addEventListener("pointerleave", () => { window.clearTimeout(hover); scheduleClose(); });
  });
  handle.addEventListener("click", () => setPinned(true));
  drawer.addEventListener("pointerleave", scheduleClose);
  pin.addEventListener("click", () => (wide() ? setPinned(!body.classList.contains("calc-pinned")) : setOpen(false)));
  $("open-controls").addEventListener("click", () => setPinned(true));
  let stored = null;
  try { stored = localStorage.getItem("calc-pinned"); } catch (error) { /* storage unavailable */ }
  body.classList.toggle("calc-pinned", wide() && stored !== "0");
  document.addEventListener("pointerdown", (e) => {
    if (!wide() && body.classList.contains("calc-open") && !drawer.contains(e.target) && e.target !== handle && e.target.id !== "open-controls") setOpen(false);
  });
  window.addEventListener("resize", () => { if (!wide() && body.classList.contains("calc-pinned")) { body.classList.remove("calc-pinned"); sync(); } });
  sync();
}

markPreset(document.querySelector("#presets button:nth-child(2)"));
window.addEventListener("resize", update);
if (document.fonts?.ready) document.fonts.ready.then(update);
update();
