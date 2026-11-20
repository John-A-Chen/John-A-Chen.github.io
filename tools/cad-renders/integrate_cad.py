"""Wire the rendered CAD views into data/projects.js.

For each project that has assets/images/projects/<slug>/cad/*.png:
  - thumbnail and heroImage become the main isometric view
  - cardImages lists every isometric view (what the portfolio card cycles through)
  - gallery gains the views, grouped: main assembly views, sub-assemblies and
    parts, drawings. Earlier CAD entries are replaced, so this can be re-run.

Usage: python integrate_cad.py <site_dir>
"""
import json
import re
import sys
from pathlib import Path

# slug -> file-name stem of the main assembly (its isometric view is the hero)
MAIN = {
    "john-stm": "enclosure-assembly",
    "mecanum-wheel-study": "wheel-assembly-latest",
    "robo-arm": "iteration-5-hand",
    "solid-connections": "device-assembly",
    "warman-attempts": "2025-prototype-1",
    "test-bench-vehicle": "chassis-7",
    "helical-heat-exchanger": "final-assembly",
}
VIEW_WORDS = {"iso": "isometric view", "front": "front view", "top": "top view",
              "right": "right view", "sheet": "drawing sheet"}
MARK = "cad-render"  # tag on generated gallery entries so re-runs can replace them


def describe(stem: str):
    name, view = stem.rsplit("-", 1)
    label = name.replace("-", " ")
    label = label[0].upper() + label[1:]
    return name, view, f"{label}, {VIEW_WORDS.get(view, view)}"


def js_item(src, alt, caption, group):
    return ("      {\n"
            f"        src: {json.dumps(src)},\n"
            f"        alt: {json.dumps(alt)},\n"
            f"        caption: {json.dumps(caption)},\n"
            f"        group: {json.dumps(group)},\n"
            f"        source: \"{MARK}\"\n"
            "      }")


def main() -> None:
    site = Path(sys.argv[1])
    data = site / "data" / "projects.js"
    text = data.read_text(encoding="utf-8")

    for slug, main_stem in MAIN.items():
        cad = site / "assets" / "images" / "projects" / slug / "cad"
        files = sorted(p.stem for p in cad.glob("*.png")) if cad.is_dir() else []
        start = text.find(f'    slug: "{slug}",')
        if not files or start < 0:
            print(f"skip {slug}: {'no renders' if not files else 'no data entry'}")
            continue
        end = text.index("\n  }", start)
        block = text[start:end]
        rel = f"assets/images/projects/{slug}/cad/"

        order = {"iso": 0, "front": 1, "top": 2, "right": 3, "sheet": 4}
        main_views, others, drawings = [], [], []
        for stem in files:
            name, view, caption = describe(stem)
            entry = (order.get(view, 9), stem, caption)
            if view == "sheet":
                drawings.append(entry)
            elif name == main_stem:
                main_views.append(entry)
            else:
                others.append(entry)
        main_views.sort()
        hero = rel + f"{main_stem}-iso.png"
        if not (cad / f"{main_stem}-iso.png").exists():
            print(f"skip {slug}: main isometric missing")
            continue

        iso_others = [rel + s + ".png" for _, s, _ in others if s.endswith("-iso")]
        card_images = [hero] + iso_others

        items = []
        for group, entries in (("CAD views", main_views),
                               ("Sub-assemblies and parts", others),
                               ("Drawings", drawings)):
            for _, stem, caption in entries:
                items.append(js_item(rel + stem + ".png", caption, caption + ".", group))

        # thumbnail / heroImage (either single-line or wrapped onto the next line)
        for key in ("thumbnail", "heroImage"):
            block, n = re.subn(rf"^    {key}:\s*\n?\s*\"[^\"]*\",\n",
                               f"    {key}: {json.dumps(hero)},\n", block, count=1, flags=re.M)
            assert n == 1, (slug, key)

        # cardImages: replace or insert after heroImage
        card_js = "    cardImages: [\n" + ",\n".join("      " + json.dumps(s) for s in card_images) + "\n    ],\n"
        block, n = re.subn(r"^    cardImages: \[.*?^    \],\n", card_js, block, count=1, flags=re.S | re.M)
        if n == 0:
            block = re.sub(r"(^    heroImage: [^\n]*\n)", lambda m: m.group(1) + card_js, block, count=1, flags=re.M)

        # gallery: drop earlier generated entries, then put the new ones first
        m = re.search(r"^    gallery: \[(.*?)^    \],?\n|^    gallery: \[\],?\n", block, flags=re.S | re.M)
        assert m, (slug, "gallery")
        body = m.group(1) or ""
        kept = [o for o in re.findall(r"^      \{.*?^      \}", body, flags=re.S | re.M) if MARK not in o]
        new_gallery = "    gallery: [\n" + ",\n".join(items + kept) + "\n    ],\n"
        block = block[:m.start()] + new_gallery + block[m.end():]

        text = text[:start] + block + text[end:]
        print(f"{slug}: hero set, {len(card_images)} card images, {len(items)} gallery views ({len(kept)} earlier items kept)")

    data.write_text(text, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
