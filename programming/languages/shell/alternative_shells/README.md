---
Title: Alternative Shells
---

Expanding a bit on the thoughts [here](/post/replacing_shell)

More I think about this, more likely me writing the tool isn't going to be a thing

I think theres a possibility to write something in a fast language, like `rust` to do this.

It would be similar to mario, but the ability to write 'arbitrary' functions wouldnt be as possible. Theres an argument to be made to use perl instead, since thats sort of what perl was made for, but _aesthetically_, I dont like the syntax of perl, and doing more complicated stream processing like jq/awk/async curl-ing isn't possible.

Things that this _WOULDNT_ support, because good tools already exist:

- JSON: `jq` and `gron`
- `curl` (though argument could be made that curl isnt the best at this)

At that point, the custom tools you're writing are replacable by a couple `jq`/`awk`/`perl` pipelines, and it'd be more code to write some custom solution. Nice thing about `mario` is that you have access to the python stdlib, and common string manipulation functions, which is what the custom tool I write would offer over `awk`/`jq`. And nice string handling in the shell is needed, its often sort of hacky to fix strings in the shell. (though `-z`/`-n`) is nice

So. the solution is: learn `perl` (which [I have been doing](https://github.com/seanbreckenridge/pmark)), use `gron`/`jq`, all fallback to python when necessary.

[`yq`](https://github.com/kislyuk/yq) (analogous to `jq` for `yaml`/`XML`)

[`pyp`](https://github.com/hauntsaninja/pyp) is a nice replacement for basic `awk`/`sed` tasks, instead of `mario`. It providing python syntax to pipes. Not portable, but its very light and good for quick scripts.

For CSV/TSV, [`q`](https://github.com/harelba/q) is sort of interesting, lets you run SQL like statements:

`q "SELECT COUNT(*) FROM ./clicks_file.csv WHERE c3 > 32.3"`

For larger pipelines, [`riko`](https://github.com/nerevu/riko) tries to model Yahoo! Pipes

TODO: Is something to be said about writing a full shell-like lisp language, because shells are hacky and writing languages is fun, but thats a whole nother project on its own :)

<https://ngs-lang.org/> looks interesting: `One way to think about NGS is bash plus data structures plus better syntax and error handling.` It has lots of utility functions and is fast at dealing with streams of data. Looks like an `awk` for the modern times. [Examples](https://ngs-lang.org/doc/latest/man/ngstut.1.html). Might be nice to use instead of a complex `jq`/`gron`/`grep`/`cut`. Agree with a lot of the problems laid out in [this blog post](https://ilya-sher.org/2017/07/07/why-next-generation-shell/). Of all the tools on this page, highest chance of me using this.

<https://github.com/nushell/nushell>? It doesn't support functions/variables though, so doubt it could be used for now. The concept of pipes being tagged with types of data is very nice though. Is a bit similar to <https://github.com/liljencrantz/crush/>, which can convert between namespaces. This seems like _a lot_ of work though. Since coreutils are essentially re-implemented/re-understood/encoded into language specific data, it means that the nice features you get from type tagging are placed behind days of work.

<https://github.com/geophile/marcel> seems quite nice for doing simple throwaway scripts in python-ish format. It allows me to reach out to python when needed (for functions/data structures), while still providing _some_ custom operators (like `|` and a cleaner `map`) for working on streams of data. Relatively high chance of using this as well.

<https://github.com/modernish/modernish> seems cool. All written in `sh`, so 'installing' it/availability isn't generally an issue. It 'hardens' lots of typical commands (e.g. `wget`/`git`/`cut`) and provides more modern syntax, like:

```
#! /usr/bin/env modernish
#! use safe -k
#! use sys/dir/countfiles
#! use var/arith/cmp
#! use var/loop
```

... so, you're still writing `sh`, it just provides you with lots of nicer looking shells, and handles common pitfalls with looping/quoting/control flow.

I generally understand most of the pifalls in POSIX at this point, so switching to it would only be for slightly faster development experience, and perhaps more safety. Though, this would mean scripts aren't as portable, and I have to learn its syntax.
