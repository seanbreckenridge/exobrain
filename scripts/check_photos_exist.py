#!/usr/bin/env python3

from pathlib import Path

import click

base_dir = Path(__file__).resolve().parent.parent
content_dir = base_dir / "src" / "content"
public_dir = base_dir / "public"


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
@click.option("-v", "--verbose", is_flag=True, default=False)
def main(verbose: bool) -> None:
    for mtype in ("photography", "art"):
        for p in (content_dir / mtype).glob("*.md"):
            if verbose:
                click.echo(f"Checking content: {p}", err=True)
            img = get_img_from_markdown_file(p)
            if verbose:
                click.echo(f"Extracted image: {img}", err=True)
            for subdir in ["full", "thumbs"]:
                f = public_dir / mtype / subdir / img
                if verbose:
                    click.echo(f"Checking file: {f}", err=True)
                if not f.exists():
                    raise RuntimeError(f"Missing {f}")


if __name__ == "__main__":
    main()
