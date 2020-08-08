---
Title: Meta; about my exobrain
---

### Build Tool

This is built using [`pandoc`](https://pandoc.org/) to convert markdown files to html, using `pandoc` flavored markdown, which allows you to use its template language, see the conditionals in the [`template`](https://github.com/seanbreckenridge/exobrain/blob/master/assets/template.html)

The [build](https://github.com/seanbreckenridge/exobrain/blob/master/build) script finds a file named `README.md` in each directory and converts it to the corresponding `index.html`

Parts of the dynamic feed/blog/projects pages are built using my [`pmark`](https://github.com/seanbreckenridge/pmark) script, which uses code blocks to generate markdown, from within the markdown itself.

### Hosting

This is hosted straight from the git repo using [netlify](https://www.netlify.com/) with little customization. I followed [these](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain) steps from the netlify docs to set that up, required me to remove the subdomain info and re-add it at `netlify.com`; worked after about 30 minutes or so.

### rwx.gg

A *lot* of this was taken from [rwx.gg](https://rwx.gg/), I've modified some of the CSS (particularly media queries) and JS to add bookmark links to headings, changed how the header works, along with completely modifying the content. See [the goal for readme.world](https://rwx.gg/what/knowledge/apps/), and [rwx.gg's license](https://rwx.gg/copyright/). Similarly to `rwx.gg`, the code and content on this site is licensed under [CC-SA](https://creativecommons.org/licenses/by-sa/4.0/legalcode). So you're free to take [my repo](https://github.com/seanbreckenridge/exobrain) and modify it to create your own site, as long as you keep the same license.
