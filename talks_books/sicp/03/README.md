---
Title: SICP 03 - Recursion and Iteration
Blog: no
---

Read Section 1.2-1.2.4: Procedures and the Processes They Generate

Encompasses Lecture 5 & 6

(Went over Time Complexity, don't think I need to take notes on that for the 5th time)

Different types of recursion:

### Linear Recursive Process

The type of recursion often used in math definitions is done by expanding a bunch of 'deferred operations'. Then, once you hit the base case, values start to be returned, and you pop values off the stack applying some function to the value thats getting accumulated and calculated in the expression that is the return value.

As an example:

```
(define (fac n)
  (if (= n 1)
      1 
      (* n (fac (- n 1)))))
```

You can think of the final call as being expanded to `n * (n - 1) * (n - 2) * .... 1` across function calls, once you hit the base case.

### Linear Iterative Process 

This is done with an accumulator. Instead of using the return value of the recursive process as the value for the recursive call, the state is kept in its own variable, and not as some 'expression' on the stack that grows with each recursive call.

```
(define (fac n)
  (define (fachelp acc n)
    (if (= n 1)
      acc
      (fachelp (* acc n) (- n 1)))
  ;; call initial helper function call
  (fachelp 1 n)) ;; provide initial value to accumulator
```

This is often done with multiple functions, with the outer function providing a nice user interface to the function and hiding the accumulator argument.

In the iterative process, the procedure could be stopped at any point, and we know the 'current value', because its being carried along with each function call. On the other hand, in the linear recursive process, we have to hit the base case and start evaluating the nested expression before values start to be 'created'.

Despite that, these are both recursive; all recursive refers to is using the name of the function in its own definition.

Some languages' compilers can detect when one is doing a Linear Iterative Process, and it can choose not to store state for recursive calls that won't be returned to, like in the `fachelp` function. In procedural languages, one would use a loop, like `do`, `for` or `while` to describe similar functionality to Linear Iterative Processes.

In the iterative process, there is no need for a language to keep values from old recursive calls around, since the state is always captured by the input to the function. The same can't be said for Linear Recursive Processes, so new space has to be allocated on the stack for data relating to the variable after every recursive call.

This reason is why languages like C's recursive calls cause memory to grow larger and larger, because they don't optimize for Linear Iterative Processes. Optimizing for that is called `tail-recursion`, and is very often done in functional languages, as its the performant replacement for loops.

In the Iterative code above, `fachelp` is tail-recursive, because the last thing to do is just a function call to itself. The `if` doesn't interfere with that because its a special form, and it in a sense 'disappears', leaving one of the arguments after being evaluated.

### Tree recursion

Recursion in which a call does multiple-recursive calls, often doing the same work twice. Fibonacci is an obvious example.

For computational/numeric tasks, tree recursion can typically be drastically improved by using an accumulator. In procedural languages, one might use memoization (hash the inputs to an output), or just a loop.

However, in operating on data structures (e.g. graphs algorithms), Tree Recursion can often be the solution.

