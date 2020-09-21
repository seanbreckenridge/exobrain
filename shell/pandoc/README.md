---
Title: Pandoc
---

[Filters](https://pandoc.org/filters.html) are nice to modify the AST as its being created.

Can also use the this to consume the AST to validate some fact, there are nice parsers for the AST in a few scripty languages

### Extract metadata

Can use a 'dummy template' file to extract the yaml frontmatter:

```
pandoc --from=markdown-smart --to=plain --template=meta.template index.md
```

where `meta.template` is:

`$meta-json$`

The pandoc command prints something like:

`{"Blog":"true","Date":"2020/06/12","Title":"Personal Server Setup"}`

