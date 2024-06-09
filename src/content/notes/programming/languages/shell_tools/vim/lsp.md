---
title: LSPs, Linters, Formatters...
---

An explanation of how the current 'automatic installation' plugin ecosystem for neovim is laid out.

If you don't know what LSP is, [heres a video](https://www.youtube.com/watch?v=LaS32vctfOY)

If you want quickstarts for this configuration, [see kickstart](https://github.com/nvim-lua/kickstart.nvim)

## Configuration

These plugins dont install anything for you 'automatically', they expect tools/required servers/formatters to already be available on your `$PATH` (If you opened a terminal and run the command, it should run).

Typically installed with something else like `apt`, `brew`, `npm` or `cargo`

These are sets of configuration, plugins that setup functionality like 'I have this LSP server, formatter or linter' on my system, here is how you run it and parse the output.

- [`nvim-lspconfig`](https://github.com/neovim/nvim-lspconfig/) - 'go to definition', hover, rename
- [`nvim-lint`](https://github.com/mfussenegger/nvim-lint) - linting (language-specific warnings, code style)
- [`conform`](https://github.com/stevearc/conform.nvim) - autoformatting files on save etc.

`nvim-lint` and `nvim-lspconfig` use the neovim builtin `:help vim.diagnostic`, to show errors on the screen

_Sidenote: some LSP servers also do have a formatter built in `:help vim.lsp.buf.format`, `conform` has options to let you fallback to using the LSP formatter if you don't have a CLI tool available, but it does not require lsp to format otherwise_

## Installer

- [`mason`](https://github.com/williamboman/mason.nvim) installs linters, LSPs, formatters into a `~/.local/share/nvim/mason`.

However, `nvim-lspconfig`, `conform`, and `nvim-lint` don't know where Mason install things.

## Glue

So, there are some 'glue' plugins, that allow things that are installed by Mason to work with other plugins.

- [`mason-lspconfig`](https://github.com/williamboman/mason-lspconfig.nvim)
- [`mason-conform`](https://github.com/zapling/mason-conform.nvim)
- [`mason-nvim-lint`](https://github.com/rshkarin/mason-nvim-lint)

If you don't use Mason, and just install LSP servers, and formatters manually using `npm` or something else, you dont need these.

You could choose to use one of these, but not the others.

For example, use `:Mason` to install LSP servers, and `mason-lspconfig` to automatically point `nvim-lspconfig` at where `mason` installed the servers. And then for `conform` and `nvim-lint`, you decide to forgo using `:Mason` and just install things directly onto your global `$PATH`, like `npm install -g prettier eslint`.

#### Treesitter

Treesitter is sort of adjacent/outside this plugin ecosystem, but [`nvim-treesitter`](https://github.com/nvim-treesitter/nvim-treesitter) gives you syntax highlighting, and can enable things like incremental selection, [heres a video that explains that](https://www.youtube.com/watch?v=09-9LltqWLY). Also see `:help lsp-vs-treesitter`
