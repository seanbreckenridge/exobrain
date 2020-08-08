---
Title: SICP 00 - Overview
---

This is following the book [here](https://github.com/sarabander/sicp-pdf), and the lecture series [here](https://archive.org/details/ucberkeley-webcast-PL3E89002AA9B9879E?sort=titleSorter), for which I wrote a script to download all of them [here](https://gist.github.com/seanbreckenridge/44854575b03e7f643b19bf40cf7e21bd).

Thanks to [creactiviti/scip-course](https://github.com/creactiviti/sicp-course) for a nice overview.

### Table of Contents

```
>>>PMARK
#!/usr/bin/env python3
import os
os.chdir('..')
for dir in sorted(os.listdir(), key=int):
    if int(dir) != 0:
        readme_file = os.path.abspath(os.path.join(dir, 'README.md'))
        with open(readme_file, 'r') as f:
            readme_contents = f.read().strip()
        title = "".join([l for l in readme_contents.splitlines() if "Title" in l][0].split(":")[1:]).strip()
        print(f"* [{title}](../{dir})")
```

### Install STk for Mac

You can install STk (REPL for [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language))) from [here](https://inst.eecs.berkeley.edu/~scheme/precompiled/OSX/).

This requires X11, so; on Mac:

`brew cask install xquartz`

You can now run `stk`, or `stk-simply` (the version with extra functions used in the lectures)

On Arch Linux, this can be installed with `pacman -S mit-scheme`

