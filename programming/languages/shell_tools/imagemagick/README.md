---
Title: Imagemagick commands
---

### Compress Images for Web

[Source](https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/)

```
mogrify -path OUTPUT_PATH -filter Triangle -define filter:support=2 -thumbnail OUTPUT_WIDTH -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip INPUT_PATH
```
