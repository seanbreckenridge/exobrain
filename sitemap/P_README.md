---
blog: false
---

More 'complete' blog-like posts at [feed](/feed).

```
>>>PMARK
#!/bin/bash
 # cd back to base exobrain directory
cd "$RUN_FROM"
# generate markdown that displays the sitemap
{ while read -r indexdir; do
	full_dir=$(echo -n "$indexdir" | cut -c 2- | tr -d "\n")
	without_last_dir=$(dirname "$full_dir")
	page_title=$(grep -m1 Title "$indexdir/README.md" | cut -d" " -f2- | tr -d "\n")
	absolute_path=$(cut -c 2- <<<"$indexdir")
	printf "* %s/ [%s](%s)\n" "${without_last_dir#/}" "$page_title" "$absolute_path"
	# sort by columns (directory name and then name of post
done < <(find . -name "README.md" | grep -vE "^(./sitemap|./post|./feed|./README.md)" | sed "s/README.md$//g"); } \
  | sort -k2,2 -k3,3
```
