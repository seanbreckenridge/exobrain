---
Title: Meta; about my exobrain
---

The concept of an exobrain was originally inspired by [`beepb00p`](https://beepb00p.xyz/exobrain/exobrain.html)

### Editing

Most of the time, I edit this by searching for a file/some text I want to modify:

`alias exo='cd "${REPOS}/exobrain"; ranger --cmd="shell ./exosearch"'`

That alias changes my directory to the root exobrain directory, opens ranger (my file manager) and runs `exosearch`:

![me fuzzy searching my exobrain](https://i.imgur.com/R87XDod.png)

When I pick some text, that opens my text editor to that line in the file. Once I'm done, I have key binds set up in `ranger` that allow me to call the [`push`](https://github.com/seanbreckenridge/exobrain/blob/master/push) command and update the remote website with any changes made.

`exosearch` uses [`fzf`](https://github.com/junegunn/fzf). By default, it searches text and opens the chosen line in my editor. The `-o` flag instead searches for links, and open the corresponding URL in my browser.

`alias exoo='cd "${REPOS}/exobrain"; ranger --cmd="shell ./exosearch -o"'`

```
(flags for the underlying search.go)
Search my exobrain for something!
By default, This searches text and opens the chosen line in your editor.
  -exobrain-dir string
        root exobrain directory (default "/home/sean/Repos/exobrain")
  -exobrain-url string
        root exobrain URL (default "https://exobrain.sean.fish")
  -links
        Search links instead of text
  -url
        Print the URL instead of opening the file

This wrapper script handles/wraps the 'internal' search.go flags
Pass the -o flag to search for links instead
```

### Build Tool

This is built using [`pandoc`](https://pandoc.org/) to convert markdown files to html, using `pandoc` flavored markdown, which allows you to use its template language, see the conditionals in the [`template`](https://github.com/seanbreckenridge/exobrain/blob/master/assets/template.html)

The [`build`](https://github.com/seanbreckenridge/exobrain/blob/master/build) script finds a file named `README.md` in each directory and converts it to the corresponding `index.html`

Parts of the dynamic feed/blog/projects pages are built using my [`pmark`](https://github.com/seanbreckenridge/pmark) script, which uses code blocks to generate markdown, from within the markdown itself.

Since this is pretty unstructured, this does some tag validation on the meta pandoc tags (sometimes called 'yaml frontmatter'), using `$meta-json$` to make sure I'm not missing titles/dates for the markdown files. (See [pandoc notes](/programming_languages/shell_tools/pandoc) and the [`harden.go`](https://github.com/seanbreckenridge/exobrain/blob/master/harden.go) file)

This uses a variety of shell tools to build this, listed in `build`:

```
>>>PMARK
#!/bin/sh
cd "$RUN_FROM"
grep '^havecmd ' build | cut -d" " -f2- | sed -e 's/^/- /' -e '/html-minifier/d' -e '/wait-for/d' -e 's/"/(/' -e 's/"/)/' | sed -E -e 's/([[:alpha:]]+)/`\1`/'
```

### Hosting

This is hosted straight from the git repo using [netlify](https://www.netlify.com/) with little customization. I followed [these](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain) steps from the netlify docs to set that up, required me to remove the subdomain info and re-add it at `netlify.com`; worked after about 30 minutes or so.

### rwx.gg

A _lot_ of this was taken from [rwx.gg](https://rwx.gg/), I've modified some of the CSS (particularly media queries) and JS to add bookmark links to headings, changed how the header works, along with completely modifying the content. See [the goal for readme.world](https://rwx.gg/what/knowledge/apps/), and [rwx.gg's license](https://rwx.gg/copyright/). Similarly to `rwx.gg`, the code and content on this site is licensed under [CC-SA](https://creativecommons.org/licenses/by-sa/4.0/legalcode). So you're free to take [my repo](https://github.com/seanbreckenridge/exobrain) and modify it to create your own site, as long as you keep the same license.
