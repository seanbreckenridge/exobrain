---
Title: Opam on Android
Date: 2023/09/17
---

Prereqs:

```
pkg install rsync clang coreutils dash diffutils make nc
```

- Install the [its-pointless community repo](https://wiki.termux.com/wiki/Package_Management)

```
curl -LO https://its-pointless.github.io/setup-pointless-repo.sh
bash setup-pointless-repo.sh
```

- Install opam

```
pkg install opam
```

I just ran `opam init --bypass-checks --disable-sandboxing` which sets up the basic `~/.opam` directory (but eventually fails). That asks you to clean up the broken switch (version), so I did.

Then, following the debugging [here](https://github.com/ocaml/opam-repository/issues/22748) here:

Edit your `~/.opam/config` and reduce `jobs` to 1, and remove the `wrap-*` lines (that does the sandboxing with bubblewrap, which I couldn't figure out how to install)

Mine looks like:

```
opam-version: "2.0"
repositories: "default"
installed-switches: ["5.0.0" "default"]
switch: "5.0.0"
jobs: 1
download-jobs: 3
eval-variables: [
  sys-ocaml-version
  ["ocamlc" "-vnum"]
  "OCaml version present on your system independently of opam, if any"
]
default-compiler: [
  "ocaml-system" {>= "4.02.3"}
  "ocaml-base-compiler"
]
```

Then, `export LDFLAGS="-landroid-shmem"` and `opam switch create 5.0.0 --jobs=1`

A then just wait a while for it to build.
