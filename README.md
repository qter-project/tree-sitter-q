# tree-sitter-q

Q grammar for Tree-sitter.

# Usage for syntax highlighting in editors

## Neovim

With Neovim 0.11 or later and [nvim-treesitter], run this Lua snippet on startup to register the `qter_q` filetype and Tree-sitter parser:
```lua
vim.filetype.add({
    extension = {
        q = "qter_q",
    },
})
vim.api.nvim_create_autocmd("User", {
    pattern = "TSUpdate",
    callback = function()
        require("nvim-treesitter.parsers").qter_q = {
            install_info = {
                url = "https://github.com/qter-project/tree-sitter-q",
            },
        }
    end,
})
```

Then restart Neovim and run `:TSInstall qter_q`.

[nvim-treesitter]: https://github.com/nvim-treesitter/nvim-treesitter

## Helix

Add the following to your `languages.toml`:

```toml
[[language]]
name = "q"
scope = "source.q"
file-types = ["q"]
grammar = "qter_q"

[[grammar]]
name = "qter_q"
source = { git = "https://github.com/qter-project/tree-sitter-q/", rev = "<current revision>" }
```

Then, run

```bash
hx --grammar fetch
hx --grammar build
```

to fetch and build the Q grammar.

Then find your [runtime directory](https://docs.helix-editor.com/building-from-source.html#configuring-helixs-runtime-files) and copy (or symlink) the contents of `queries/helix` in this repo into `runtime/queries/q`.

Then, you can run `hx --health q` to ensure that everything is working. `Tree-sitter parser` and `Highlight queries` should be checked.
