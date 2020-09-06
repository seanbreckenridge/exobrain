---
Title: Possibility Pipelining
Blog: false
---

Expanding a bit on the thoughts [here](/post/replacing_shell)

More I think about this, more likely me writing the tool isn't going to be a thing

I think theres a possibility to write something in a fast language, like `rust` to do this.

It would be similar to mario, but the ability to write 'arbitrary' functions wouldnt be as possible. Theres an argument to be made to use perl instead, since thats sort of what perl was made for, but *aesthetically*, I dont like the syntax of perl, and doing more complicated stream processing like jq/awk/async curl-ing isn't possible.

Things that this *WOULDNT* support, because good tools already exist:

* JSON: `jq` and `gron`
* `curl` (though argument could be made that curl isnt the best at this)

At that point, the custom tools you're writing are replacable by a couple `jq`/`awk`/`perl` pipelines, and it'd be more code to write some custom solution. Nice thing about `mario` is that you have access to the python stdlib, and common string manipulation functions, which is what the custom tool I write would offer over `awk`/`jq`. And nice string handling in the shell is needed, its often sort of hacky to fix strings in the shell. (though `-z`/`-n`) is nice

So. the solution is: learn `perl` (which [I have been doing](https://github.com/seanbreckenridge/pmark)), use `gron`/`jq`, all fallback to python when necessary. value getting the job done over aesthetics.

TODO: Is something to be said about writing a full shell-like lisp language, because shells are hacky and writing languages is fun, but thats a whole nother project on its own :)
