---
Title: Vim 
---

### `autobuf` commands

Examples from my vim config:

```
" run set spell when editing markdown
autocmd VimEnter * if expand('%:e') == 'md' | set spell
" or when writing a git commit
autocmd BufRead,BufNewFile * if expand('%:t') == 'COMMIT_EDITMSG' | set spell
```

See [here](http://vimdoc.sourceforge.net/htmldoc/autocmd.html) for more `autocmd` events.

`VimLeavePre` is another useful one, to run a `linter`/`command` against a file after saving

### magic wands

Use `magic wands`! They're awesome. Learnt about them from [rwx.gg](https://rwx.gg)

In command mode, you can hit `!!` twice, to bring up a prompt which'll send the current line to some external command.

For example, if you write:

`which python`

and then on that line, type `!!bash`, it'll send that to bash, and replace the current line with the output of that command.

`/usr/bin/python`


Could just as easily send some snippet of code to python or perl, or *anything*.

```
:.$ to run vim commands
:.! to run external commands
```

This doesn't have to be on single lines though, you can do `6!!` to send 6 lines to some external command.

For vim commands, the keystrokes you'd have to do to write 5 lines to another file would be:

`5!!<delete>$:w /tmp/output`

the `delete` is to replace the `!` (external vim command) to a `$`, which specifies a vim command.

The line would look like:

`:.,.+4$:w /tmp/foo`


