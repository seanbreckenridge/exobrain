---
title: General Golang Notes
---

`func init` gets run before `main`. Should only really be used in `package main` for a command, else any package that imports you to use as a library _also_ runs `init`, which can be messy.

`syscall.Exec` is analogous to the `exec`, replaces current PID/memory etc.

There's almost no reason to use arrays over slices. Slices are very low cost and they let you have more flexible types, and switch on types at runtime using interfaces.
