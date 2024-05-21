---
title: Vim Notes
---

### visual block

`<C-v>` enters Visual Block (not visual line) mode

Once you've selected text you can `I`/`A` to insert and the beginning/end, or `c` (change) to delete the selected text, and change to insert mode. Once you're done typing, hit `Esc` to affect each line from the visual block selection.

`o` swaps the corner that your modifying, so if you're currently moving down and right, and the cursor is in the bottom right, this switches it to the top left. See `:help 04.4` `/going to the other side`

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

### Jumping

Other than the typical `Ctrl+O`, `Ctrl+I` to jump forward/back in your tag stack, can also use `*` and `#` to jump forward/backward against the word currently under the cursor, which is useful for variable names/constants

#### Commands

`nmap`, `vmap`, `options`, `command` lists key -> value pairs for each of these items. `:options` includes an editor, as well!

`|` can be used to chain commands

#### Files/Buffers

You can use `:next`, `:wnext` (write + next), `:first`, `:last`, to cycle through the files that vim was started with. If you want to change those after vim has started, you can use `:args` to change the CLI args. You can even do something like `:args *.py`. However, if you just want to cycle through all files, the `[f` and `]f` mappings from [vim-unimpaired](http://github.com/tpope/vim-unimpaired) pretty nice for that.

#### cmdline-ranges

`:help cmdline-ranges`. [This video](https://www.youtube.com/watch?v=U9bsqulWgqc) goes over a lot of useful `:Ex` commands that are still pretty good to know, even in nvim.

The `'<,'>` that appears when running commands on visual selection is a command line range, describing two marks `'<` and `'>`. These are set when you start selecting text. See `:help `'<`

You could similarly do something like `:'<,$` to select from the beginning of your selection to the end of the file. Or like `:.,.+10` to select the next 10 lines.

#### Writing/Reading from commands

See `:help 10.9` for more information

`!!` sends the current line through a filter.

You can also run commands without replacing the current line, by entering the cmd on the cmdline

`:read !ls` reads the output and enters it in the textfile.

You can also just `:write` to the STDIN of a command, like `:write !wc`. This prints the output of the command using the pager, and it _does not_ write the current file.

#### Cmdline editing

while entering a command you can use different keybinds to move back and forth in the command:

```
<Left>			one character left
<Right>			one character right
<S-Left> or <C-Left>	one word left
<S-Right> or <C-Right>	one word right
CTRL-B or <Home>	to begin of command line
CTRL-E or <End>		to end of command line
```
