---
Title: Meta; about my exobrain
---

This is built using [`pandoc`](https://pandoc.org/) to convert markdown files to html, using `pandoc` flavored markdown, which allows you to use its template language, see the conditionals in the [`template`](https://github.com/seanbreckenridge/exobrain/blob/master/assets/template.html)

The [build](https://github.com/seanbreckenridge/exobrain/blob/master/build) script, finds files named `README.md` and converts them to `index.html` files for each directory.

The build script also contains two `find`/`while` loops which use the `post` directory to generate a [blog feed](/feed), and the inverse of that to generate the [sitemap](/sitemap).
