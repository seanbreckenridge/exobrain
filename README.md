Live at <https://sean.fish/x/>

Any code here is licensed under the MIT license, see [LICENSE](./LICENSE), feel free to steal whatever.

Any notes/blog posts/prose are licensed under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

This uses [astro's content collections](https://docs.astro.build/en/tutorials/add-content-collections/), which is how all the markdown/template rendering happens.

Other than that, the [launch_in_editor](./scripts/launch_in_editor.go) client/server code will ping the localhost server running locally on my machine whenever Im viewing the webpage, adding a button so I can quickly edit something if I want to.

I deploy this to my site at `/x/`, with nginx:

```
rewrite ^/x$ /x/ permanent;
rewrite ^/rss.xml /x/rss.xml permanent;
rewrite ^/sitemap.xml$ /x/sitemap-index.xml permanent;

location /x {
  try_files $uri $uri.html $uri/ =404;
  error_page 404 /x/404.html;
  index index.html;
}
```

