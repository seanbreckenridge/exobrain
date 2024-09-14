---
title: anthonydoescode
---

Misc notes from anthonywritescode videos

<https://www.youtube.com/watch?v=hgCVIa5qQhM>

Use `python3 -m a.main` when invoking scripts as it handles `PYTHONPATH` better

<https://www.youtube.com/watch?v=ABJvdsIANds>

Dont use `urlparse`, use `urlsplit` as it is doesn't use the archaic params field (so it has a slight perf cost)

<https://www.youtube.com/watch?v=jH39c5-y6kg>

Sqlite stuff, but `.schema` is a good command to show the schema, `.headers on` shows column names along with results so is nice

Also, he shows an example of sqlite not being able to handle concurrent writes, which makes sense since he was just spawning a bunch of bash to hit it with unique cursors at the same time, ended up doing some testing [here](./../../../databases/sql/)

<https://www.youtube.com/watch?v=98SYTvNw1kw>

Dont use `localhost`, use `127.0.0.1`. It prevents the `/etc/hosts` lookup, and also gets around IPv6 issues, as you're explicitly using IPv4

<https://www.youtube.com/watch?v=eF6qpdIY7Ko>

More interesting but I dont know If Id have a usecase for pushd/popd. It is cool to know there's a stack behind `cd`, but if I ever want to change directories, I'll do a subshell instead:

```
# stuff in one directory
(
    cd ../
    # stuff in another directory
)
# automatically switches back to original directory
```
