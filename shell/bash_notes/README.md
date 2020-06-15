---
Title: Bash Notes
---

Read the bash man page! Bashisms can be pad if youre trying to be posix compliant, but bashisms also save lots of time.

Print message to STDERR if value is unset and exit:

```
# if $1 is unset/empty
USER_INPUT="${1:?must provide something as first argument}"
```

`.sh` at the end of scripts is only necessary for windows compliance/if you're creating a library that requires you to include bash files. Otherwise you're only making yourself do more typing.

Use bash substitutions when possible instead of `sed`/`awk`. 

Maybe look into perl instead of `sed`/`awk`/`tr`/`cut`, look at perlre and perlrun pages.


