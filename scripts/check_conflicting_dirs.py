#!/usr/bin/env python3

from pathlib import Path
import click


def check_conflicting_dirs(base_path: str):
    """
    under some base path, recursively check for directories with conflicting names

    for example, if there was a folder like:
    shell/
        tools.md
        notes.md
    shell.md

    the upper shell.md would conflict with the shell directory, so we should
    print out a warning and exit
    """

    # get all the directories
    bp = Path(base_path)
    dirs = [d for d in bp.iterdir() if d.is_dir()]

    # check for conflicting names
    for d in bp.rglob("*"):
        if not d.is_dir():
            continue
        # ignore hidden files
        if d.name.startswith("."):
            continue
        # check for conflicting names
        matching_md = d.with_suffix(".md")
        if matching_md.exists():
            print(f"conflicting directories: {d} and {matching_md}")
            exit(1)



@click.command()
@click.argument("BASE_PATH")
def main(base_path: str):
    check_conflicting_dirs(base_path)


if __name__ == "__main__":
    main()
