---
title: Neorg
---

Mostly notes from [the series on youtube](https://www.youtube.com/playlist?list=PLx2ksyallYzVI8CN1JMXhEf62j2AijeDa)

- Can create workspaces for each collection of notes, `:Neorg index` to switch to a file `:Neorg return` should close all buffers
- Alt+Enter continues the list you're currently on, but I had to add the following to my wezterm config to disable the conflicting keybind:

```
-- disable the alt+enter keybind to make fullscreen
{key = "Enter", mods = "ALT", action = "DisableDefaultAssignment"}
```

- To fold headings/text underneath, can use the default binding: `za`
- `:Neorg toggle-concealer` will disable the fancy neorg symbols
- Links
  - work between files in a tree, using syntax like `{:filename:}`
  - link to other headings, like `{** someheading}`. These are case and whitespace insensitive. You can be specific, and link to that heading depth (2, `**`), or just use the magic char `#`, like `{# someheading}`, which means you dont have to update if you ever changed the depth
  - instead of just displaying these as clickable (using enter) hyperlinks, you can use the syntax like `{** link}[description]`
  - Anchors: These are sort of like links, but they work file-wide, meaning if you have one heading you want to jump to constantly, you can define it once in a declaration, and then use it over and over. They swap the order like: `[jump to TOC]{* table of contents}`. Then further down, you can just use the definition: `[jump to TOC]`, without the location. Order for these does not matter, definition can come before or after declaration
  - You can link to file heading by just composing the two: `{:filename: # someheading}`
- Todos work by adding something like `( )`:
  - States (copied from `:help neorg`, scroll down to tasks)
    - `( )` - Undone -> not done yet
    - `(x)` - Done -> done
    - `(?)` - Needs further input
    - `(!)` - Urgent -> high priority task
    - `(+)` - Recurring task with children
    - `(-)` - Pending -> currently in progress
    - `(=)` - Task put on hold
    - `(_)` - Task cancelled (put down)
  - If I set a `<LocalLeader>` (I set mine to `,`), then `which-key` will pick up bindings for all of these using `,t` in normal mode
- `promo` lets you promote/demote items, using the default indent keys, like `>>` and `<<`. If something is not indented correctly can use the default `==` keybind to fix. If you dont want to use recursively, can use `>.` or `<,`. In insert mode, can use `Ctrl+T` and `Ctrl+D` (default bindings to increase/decrease headings which neorg overrides)
- `:Neorg mode` can be used to swap to different browsing modes, like `traverse-heading` or `traverse-link`. This overrides `j/k` to jump between items. These can also be toggled with the local leader keybind (so, `,m` for me)
- `:Neorg toc` opens a basic table of contents to each item. `:Neorg toc qflist` sends it to the quickfix list

- Codeblocks:

```
@code lua
print("Hello World!")
@end
```

Can assign metadata like:

```
@document.meta
title: Important File
description: Something here
authors: [
  one
  two
]
@end
```

Or just use `:Neorg inject-metadata` which means it just autoupdates whenever you change things

More info [here](https://github.com/nvim-neorg/neorg/wiki/Metagen)

Once you enable the [`core.summary`](https://github.com/nvim-neorg/neorg/wiki/Summary) module in your config, you should be able to run `:Neorg generate-workspace-summary` which just creates the TOC for workspace. It does this by category, so you can either fill those out or just set the strategy in your config to `by_path` like `["core.summary"] = {config = {strategy = "by_path"}},`, so it generates a tree-like structure.

- Journal creates a file structure for each day, running `:Neorg journal` just opens todays notes, otherwise you can specify a day like:
- `:Neorg journal yesterday`
- `:Neorg journal custom 2024-03-20`
