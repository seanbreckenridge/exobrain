from pathlib import Path


def get_img_from_markdown_file(file: Path) -> str:
    for line in file.open("r"):
        if line.startswith("image"):
            part = line.split(":", maxsplit=1)[1].strip()
            if part.startswith('"') and part.endswith('"'):
                return part[1:-1]
            return part
    else:
        raise RuntimeError(f"No image in {file}")
