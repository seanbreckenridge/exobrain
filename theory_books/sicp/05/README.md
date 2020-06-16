---
Title: SICP 05 - Hierarchical data/Scheme Interpreter
---

Read Section 2.2.2, 2.2.3, 2.3.1

Encompasses Lecture 12, 13, 14

`pair?` lets you do some error checking, to check if a value is a pair before calling `car`/`cdr` on it.

Quoting lets you treat symbols as data objects rather than expressions to be evaluated:

```
> '('a 'b)
((quote a) (quote b))
```

### Trees

Since maps' identity function is an empty list, it can be used with recursion to express complexity without being explicit. On trees, you can call `map` on a list of children `nodes` (`trees`), and it will call some function on each of them. If it keeps calling till it reaches the leaves of the tree (nodes whose children are `'()`, and calls `map`, it will end there, and start traversing back up the tree.

One should think of trees as nodes themselves. A node is just a tree without branches. That, along with the map identity makes working on lists recursively much easier.

Tree Recursion, e.g. when mapping a function across a tree, often involves a call to `map`, to map the function onto the `datum` (node value), and then a recursive call to the children of the current node. The recursive call to the children and the `map`'d value and then re-combined with the `cons`tructor for the tree. e.g.:

```
(define (treemap fn tree)
    (make-tree (fn (datum tree)) ;; gets current node value
        (map (lambda (child) (treemap fn child))  ;; recursive-call
              (children tree) )))
```

Since `treemap` calls itself and also `map`, which does more recursive calls, its called `mutual recursion`. Using mutual recursion hides lots of intermediate state that would otherwise exist. Its possible to do the following iteratively, but it means you'd have to have some way to represent the 'current state' of the execution and objects that describe incomplete actions.

### Queue

A `queue` is a list of trees. Each tree/node is a `task` that some function has to deal with.


