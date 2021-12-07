```
>>>PMARK
#!/bin/bash
cd "$RUN_FROM"  # move to base exobrain directory
# generate markdown that displays blog feed
{ while read -r indexdir; do
	# grab title and date from yaml at top
	blog_title="$(jq -r ".Title" <"${indexdir}/meta.json")"
	blog_date="$(jq -r ".Date" <"${indexdir}/meta.json")"
	printf "* [%s](/%s/) %s\n" "$blog_title" "$indexdir" "$blog_date"
done< <(fd '^README.md$' './post' -x printf '%s\n' '{//}' | cut -d'/' -f2-); } \
  | python -c "import sys; print(''.join(sorted(sys.stdin.readlines(), key=lambda l: l.split()[-1], reverse=True)))"
  # python expression sort lines by last column
```
