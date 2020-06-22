---
Title: General Golang Notes
---

`func init` gets run before `main`. Should only really be used in `package main` for a command, else any package that imports you to use as a library *also* runs `init`, which can be messy.

`syscall.Exec` is analogous to the `exec`, replaces current PID/memory etc.
