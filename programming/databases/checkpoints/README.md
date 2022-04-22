---
Title: Sqlite
---

## safari.db -wal file

Had lots of trouble absorbing the `-wal` file, I thought I was running a checkpoint through `sqlitebrowser` but apparently it wasn't doing anything?

Running `sqlite History.db` through terminal and `PRAGMA wal_checkpoint;` and then `Ctrl+D` like described in the comment [here](https://stackoverflow.com/a/19575935/9348376) finally ended up working
