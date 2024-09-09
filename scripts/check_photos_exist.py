#!/usr/bin/env python3

from pathlib import Path

import click

base_dir = Path(__file__).resolve().parent.parent
content_dir = base_dir / "src" / "content"
public_dir = base_dir / "public"
public_photography_dir = public_dir / "photography"

photo_md_dir = content_dir / "photography"


def get_img_from_markdown_file(file: Path) -> str:
    for line in file.open("r"):
        if line.startswith("image"):
            part = line.split()[1].strip()
            if part.startswith('"') and part.endswith('"'):
                return part[1:-1]
            return part
    else:
        raise RuntimeError(f"No image in {file}")


@click.command()
def main() -> None:
    for p in photo_md_dir.glob("*.md"):
        img = get_img_from_markdown_file(p)
        for subdir in ["full", "thumbs"]:
            f = public_photography_dir / subdir / img
            if not f.exists():
                raise RuntimeError(f"Missing {f}")


if __name__ == "__main__":
    main()
