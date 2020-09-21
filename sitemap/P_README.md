More 'complete' blog-like posts at [feed](/feed).

```
>>>PMARK
#!/bin/bash
# cd back to base exobrain directory
cd "$RUN_FROM"
# generate markdown that displays the sitemap
{ while read -r indexdir; do
	without_last_dir="$(dirname "$indexdir")"
	# dirname return '.' if its the current directory, remove the dot
	without_last_dir="${without_last_dir#.}"
	page_title=$(grep -m1 Title "$indexdir/README.md" | cut -d" " -f2- | tr -d "\n")
	printf "* %s/ [%s](/%s/)\n" "${without_last_dir#/}" "$page_title" "$indexdir"
done < <(fd '^README.md$' --type file -E sitemap -E post -E feed --min-depth 2 -x printf '%s\n' '{//}'); } |
	sort -k2,2 -k3,3
# sort by columns (directory name and then name of post
```
