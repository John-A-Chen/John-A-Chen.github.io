"""Crop SolidWorks BMP renders to their subject and save them as PNG in the site.

Usage: python process_renders.py <renders_dir> <site_dir>
Each <renders_dir>/<slug>/<name>-<view>.bmp becomes
<site_dir>/assets/images/projects/<slug>/cad/<name>-<view>.png
"""
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageFilter

ASPECT = 16 / 10
PAD = 0.07  # margin around the model, as a fraction of its size


def subject_box(im: Image.Image):
    """Bounding box of the model: pixels that differ from the soft background."""
    small = im.convert("RGB").resize((500, round(500 * im.height / im.width)))
    background = small.filter(ImageFilter.GaussianBlur(40))
    diff = ImageChops.difference(small, background).convert("L")
    mask = diff.point(lambda v: 255 if v > 14 else 0).filter(ImageFilter.MaxFilter(5))
    box = mask.getbbox()
    if not box:
        return None
    scale = im.width / small.width
    return [round(v * scale) for v in box]


def fit_aspect(box, width, height):
    left, top, right, bottom = box
    w, h = right - left, bottom - top
    w, h = w * (1 + 2 * PAD), h * (1 + 2 * PAD)
    if w / h < ASPECT:
        w = h * ASPECT
    else:
        h = w / ASPECT
    w, h = min(w, width), min(h, height)
    cx, cy = (left + right) / 2, (top + bottom) / 2
    x0 = min(max(cx - w / 2, 0), width - w)
    y0 = min(max(cy - h / 2, 0), height - h)
    return tuple(round(v) for v in (x0, y0, x0 + w, y0 + h))


def main() -> None:
    renders, site = Path(sys.argv[1]), Path(sys.argv[2])
    for bmp in sorted(renders.glob("*/*.bmp")):
        slug = bmp.parent.name
        im = Image.open(bmp).convert("RGB")
        box = subject_box(im)
        if box is None:
            print(f"EMPTY  {slug}/{bmp.name}")
            continue
        crop = im.crop(fit_aspect(box, im.width, im.height))
        if crop.width > 1600:
            crop = crop.resize((1600, round(1600 * crop.height / crop.width)), Image.LANCZOS)
        out = site / "assets" / "images" / "projects" / slug / "cad" / (bmp.stem + ".png")
        out.parent.mkdir(parents=True, exist_ok=True)
        crop.save(out, "PNG", optimize=True)
        fill = (box[2] - box[0]) * (box[3] - box[1]) / (im.width * im.height)
        print(f"OK     {slug}/{out.name}  {crop.width}x{crop.height}  subject={fill:.0%}  {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
