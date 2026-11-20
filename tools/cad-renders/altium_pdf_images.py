"""Turns pages of Altium PDF outputs (schematic and PCB prints) into gallery images.

Altium is not driven directly. This reads the PDF that the project's OutJob
already exports, renders the chosen pages to PNG, and adds them to the
project's gallery in data/projects.js under the "Altium" group.

Run from the site root:  python tools/cad-renders/altium_pdf_images.py
Needs PyMuPDF (pip install pymupdf). Safe to re-run: images are overwritten
and gallery entries that already exist are left alone.
"""
import json
from pathlib import Path

import fitz

GITHUB = Path.home() / "Documents" / "GitHub"
GROUP = "Altium"
DPI = 200

# slug -> (source PDF, [(page number, file name, caption)])
JOBS = {
    "john-stm": (
        GITHUB / "John STM" / "hardware" / "pcb" / "exports" / "John STM.pdf",
        [
            (4, "pcb-layout-print-1", "PCB layout print from Altium, first board."),
            (5, "pcb-layout-print-2", "PCB layout print from Altium, second board."),
            (1, "schematic-mcu", "MCU schematic sheet."),
            (3, "schematic-power", "Power schematic sheet: battery sense, charger and 3.3 V regulator."),
            (2, "schematic-peripherals", "Peripherals schematic sheet."),
        ],
    ),
    # Team project: only the top level, the UI sheet and the board print are published.
    "solid-connections": (
        GITHUB / "Solid-Connections" / "Electronics" / "Altium_Project" / "Solid Connections" / "Solid Connections.pdf",
        [
            (6, "pcb-layout-print", "PCB layout print from Altium."),
            (1, "schematic-top-level", "Top-level schematic sheet."),
            (5, "schematic-ui-interface", "User interface schematic sheet: buttons, LEDs and display."),
        ],
    ),
}


def render(slug, pdf, pages):
    out_dir = Path("assets/images/projects") / slug / "altium"
    out_dir.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(pdf)
    items = []
    for number, name, caption in pages:
        target = out_dir / f"{name}.png"
        doc[number - 1].get_pixmap(dpi=DPI).save(target)
        items.append({"src": target.as_posix(), "caption": caption})
        print(f"  {target.as_posix()}  ({target.stat().st_size // 1024} KB)")
    return items


def add_to_gallery(text, slug, items):
    start = text.index(f'slug: "{slug}",')
    end = text.index("\n  }", start)
    block = text[start:end]
    marker = "    gallery: ["
    at = block.index(marker) + len(marker)
    new = ""
    for item in items:
        if item["src"] in block:
            continue
        caption = item["caption"]
        new += (
            "\n      {\n"
            f"        src: {json.dumps(item['src'])},\n"
            f"        alt: {json.dumps(caption.rstrip('.'))},\n"
            f"        caption: {json.dumps(caption)},\n"
            f"        group: {json.dumps(GROUP)},\n"
            '        source: "altium-pdf"\n'
            "      },"
        )
    if not new:
        return text
    # Placed after the CAD views so the strip reads: CAD, then Altium, then repo images.
    last_cad = block.rfind('source: "cad-render"')
    if last_cad != -1:
        at = block.index("},", last_cad) + 2
    block = block[:at] + new.rstrip(",") + ("," if block[at:].lstrip().startswith("{") else "") + block[at:]
    return text[:start] + block + text[end:]


def main():
    data = Path("data/projects.js")
    text = data.read_text(encoding="utf-8")
    for slug, (pdf, pages) in JOBS.items():
        if not pdf.exists():
            print(f"{slug}: missing {pdf}")
            continue
        print(slug)
        text = add_to_gallery(text, slug, render(slug, pdf, pages))
    data.write_text(text, encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
