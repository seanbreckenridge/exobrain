---
Title: Font Support
---

From the answer [here](https://stackoverflow.com/a/36110385/9348376):

- Only use `WOFF2`, or if you need legacy support, `WOFF`. Do not use any other format
- (`svg` and `eot` are dead formats, `ttf` and `otf` are full system fonts, and should not be used for web purposes)
- By the estimate [here](https://caniuse.com/woff2), WOFF2 should work on 95% of browsers.

`WOFF2` has a 30%-ish size improvement over `WOFF` when using compression/brotli.
