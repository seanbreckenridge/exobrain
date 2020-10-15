---
Title: zsh completion
---

For general tools which support a GNU-like `--help` flag, you can use the `_gnu_generic`, like:

```
compdef _gnu_generic my_command ls youtube-dl
```

Sometimes if the `--help` description is multiple lines, it doesn't include the entire description or may break.

Theres a similar command in bash; `complete -F _longopt my_command`

[This Tutorial](https://github.com/zsh-users/zsh-completions/blob/master/zsh-completions-howto.org), and the corresponding [zsh-completions](https://github.com/zsh-users/zsh-completions) is great for learning how to do zsh completion.

---

### Examples

For basic completion which doesn't need state, to autocomplete a command as the first argument, and then some filename as the second argument:

```bash
function _command() {
	# typically this would be done with the built-in _path_files
	local files="$(command ls)"
	# 'files' and 'command' are just descriptions
	_arguments \
		"$(printf '1:command:(%s)' "create remove")" \
		"$(printf '2:files:(%s)' "$files")"
}
```

If you want to have 2 commands and complete multiple arguments, you can use a glob:

```bash
function _command() {
	local files="$(command ls)"
	_arguments \
		"$(printf '1:command:(%s)' "create remove")" \
		"$(printf '2:command:(%s)' "force quiet")" \
		"$(printf '*:files:(%s)' "$files")"
}
```

e.g. `command create force file_one file_two`

`_arguments` is just one of the possible utility functions, there are a couple others.
