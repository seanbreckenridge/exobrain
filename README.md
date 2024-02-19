Live at <https://sean.fish/x/>

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
