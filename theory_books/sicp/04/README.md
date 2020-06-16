---
Title: SICP 04 - Data Abstraction, sequences
---

Read Section 2.1

Encompasses Lecture 9, 10, 11

By abstracting away parts of a program, it lets you have the think about parts individually as components, only keeping so much of it in your head a time.

Lisp Pairs:

```
> (define x (cons 1 2))
x
> (car x)
1
> (cdr x)
2
```

The book defines `selectors` and `constructors`, which are ways to either manipulate or create abstract data.

Pairs can represent sequences, by using multiple pairs, and letting the `car` of a pair be the value, and the `cdr` of a pair be the next element in the list. Sort of like a linked list.

```
(cons 3 (cons 4 ( cons 5 '())))
```

The `NULL` at the end of a list is represented by the empty list.

There are other helper methods (e.g. `list` or `append`)

`map`/`filter`:

```
> (map first (list '(1 2) '(3 4)))
(1 3)
```

`At the heart of each programming langauge theres a lisp interpreter trying to get out`

* Syntax - how your language is written, e.g. semicolons, parenthesis, brackets
* Semantics - what the semicolons/brackets mean

The term 'Syntactic Sugar' can be understood from those terms, in that it only changes how something looks, not the semantics.
