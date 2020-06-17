---
Title: Meta; about my exobrain
---

This is built using [`pandoc`](https://pandoc.org/) to convert markdown files to html, using `pandoc` flavored markdown, which allows you to use its template language, see the conditionals in the [`template`](https://github.com/seanbreckenridge/exobrain/blob/master/assets/template.html)

The [build](https://github.com/seanbreckenridge/exobrain/blob/master/build) script finds a file named `README.md` in each directory and converts it to the corresponding `index.html`

The build script also contains two `find`/`while` loops which use the `post` directory to generate a [blog feed](/feed), and the inverse of that to generate the [sitemap](/sitemap).
