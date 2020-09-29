---
Title: Vim Notes
---

### visual block

`<C-v>` enters Visual Block (not visual line) mode

Once you've selected text you can `I`/`A` to insert and the beginning/end, or `c` (change) to delete the selected text, and change to insert mode. Once you're done typing, hit `Esc` to affect each line from the visual block selection.

### autobuf commands

Examples from my vim config:

```
" run set spell when editing markdown
autocmd VimEnter * if expand('%:e') == 'md' | set spell
" or when writing a git commit
autocmd BufRead,BufNewFile * if expand('%:t') == 'COMMIT_EDITMSG' | set spell
```

See [here](http://vimdoc.sourceforge.net/htmldoc/autocmd.html) for more `autocmd` events.

`VimLeavePre` is another useful one, to run a `linter`/`command` against a file after saving

### scrolling

`Ctrl+U`/`Ctrl+D` scrolls up down

Scrolling relative to cursor:

- `zz` move current line to middle of screen
- `zt` move current line to top of screen
- `zb` move current line to bottom of the screen

### Integer increment/decrement

Ctrl+A and Ctrl+X increment/decrement integers, very useful for automating things with macros.
