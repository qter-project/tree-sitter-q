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
