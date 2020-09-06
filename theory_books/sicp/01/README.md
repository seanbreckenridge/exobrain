---
Title: SICP 01 - Functional Programming
Blog: false
---

Read Section 1.1: The Elements of Programming

Encompasses Lecture 1 & 2

"Lisp, whose name is an acronym for LISt Processing, was designed to provide symbol- manipulating capabilities for attacking programming problems such as the symbolic differentiation and integration of algebraic expressions. Lisp was not the product of a concerted design effort. Instead, it evolved informally in an experimental manner in response to users’ needs and to pragmatic implementation considerations."

"Lisps were used in applications where efficiency is not the primary concern. For example, for operating-system shell languages and *extension languages*."

(SICP p 3-4)

"An extension language is a programming language interpreter offered by an application program, so that users can write macros or even full-fledged programs to extend the original application. Extension languages have a C interface (it is usually C, but it could be any other compiled language), and can be given access to the C data structures. Likewise, there are C routines to access the extension language data structures. " [Source](https://www.gnu.org/software/guile/docs/master/guile-tut.html/What-are-scripting-and-extension-languages.html)

Means by which programming languages combine simple ideas to form more complex ones:

* primitive expressions - the most basic data types and entities the language operates on
* means of combination - combinations of primitives
* means of abstraction - where combinations can be named and manipulated

In general, programming can be described as procedures and data; data is the stuff we want to operate on, and procedures are rules to manipulate it.

In general:

- Infix Notation: `3+4`
- Prefix Notation: `sin (π/2)`
- Postfix Notation `7!`

#### Primitive Expressions

STK uses Prefix notation, e.g.

```scheme
STk> (+ 5 2)
7
STk> (* 5 2 10)
100
STk> (+ (* 3 7) (* 10 10))
121
```

`+` and `*` are functions (or operators), and 3, 7, 10 are arguments (or operands). Expressions are evaluated with the inner parenthesis first, in order, then the results are used as arguments for the the next outer function.

Strings are just surrounded by single quotes.

String Operations:

```scheme
; These only work in stk-simply
STk> (first 'hello)
h
STk> (last 'hello)
o
STk> (butfirst 'hello)
ello
STk> (butlast 'hello)
hell
STk> (bf 'scheme)
cheme
STk> (word 'now 'here)
nowhere
STk> (sentence 'now 'here)
(now here)
STk> '(magical mystery tour)' ; a sentence, quoted
(magical mystery tour)
STk> (first '(got to get you into my life))
got
STk> (first (bf (sentence 'a 'hard 'days 'night)))
hard
STk> (first (first (bf '(she loves you))))
l
```

Define (creating variables with related object values):

```scheme
STk> (define pi 3.14159264)
pi
STk> (* pi 5 5) ; area of circle radius 5
78.539816
STk> (define (square x)
	(* x x))
square
STk> (square 5)
25
STk> (square (+ 2 3))
25
```

Scheme treats un-quoted newlines as any other separator. Therefore expressions are often split onto multiple lines to "pretty-print".

#### Procedures

Loosely, Procedure Definition == Compound Procedure == Function == Method. This doesn't apply when we're concerning ourself with Execution Order, but when talking about the programming itself, these are sometimes used interchangeably. When it matters, the right one is used.

Procedures get called from left to right, inside out, with few exceptions. One of the exceptions is `define`; at the time the statement is run, the name (e.g. `pi`/`square`) don't exist. Define is a keyword for a "special form".

Formally:

1. Evaluate the subexpressions of the combination.
2. Apply the procedure that is the value of the leftmost subexpression (the operator) to the arguments that are the values of the other subexpressions (the operands).

The REPL itself is recursive in nature, since step 2 enforces that subexpressions must be evaluated first.

`(define (⟨name⟩ ⟨formal parameters⟩) ⟨body⟩)`

Since LISP uses infix notation, describing expression evaluation as a tree, with each subcombination being a 'lower' vertex on the tree:

```scheme
(* (+ 2 (* 4 6))
   (+ 3 5 7))
390
```

```
*
├── +
│   ├── *
│   │   ├── 4
│   │   └── 6
│   └── 2
└── +
    ├── 3
    ├── 5
    └── 7
```

Values that result from lower expressions on the tree "percolate upwards", which is very similar to a general process called [*tree accumulation*](https://en.wikipedia.org/wiki/Tree_accumulation)

#### Normal-Order Execution vs Applicative-Order Execution

Normal-Order can be thought of as "fully expand and reduce", in contrast to Applicative-Order "evaluate the arguments and then apply".

For the example: `(+ (* 5 3) (* 5 3))`

Applicative-Order would evaluate `(* 5 3)` twice, separately, and then evaluate the resulting (+ 15 15), while Applicative-Order would evaluate the first `(* 5 3)` and then substitute the result from the first to the second. This avoids multiple evaluations of the same expression, and is what Lisp uses.

The difference between normal and applicative order doesn't make a lot of difference when youre  procedure is a function (always give the same result), but the "expanding" means that argument expressions are substituted in subexpressions instead of the resulting value.

For example, if you had:

```scheme
STk> (define (zero z) (- z z))
zero
```

And called something like `(zero (random 10))`

In Applicative-Order, the result from `random 10` (PRNG) would be passed to zero, so the expression would always result in `(- n n)` -> 0. In Normal-Order, the `random 10` would "expand", and the entire expression would be passed to `zero` before evaluation, which would result in:

`(zero (random 10)) (- random(10) random(10))`

...and then evaluate; the two random(10)'s will most of the time generate different numbers, making `zero` return something that isn't `zero`, making `zero` not a function (but still a procedure).

Once your procedures aren't functional, Normal vs. Applicative matters.

#### Conditionals

```
|x| = {
	x if x > 0
	0 if x = 0
	-x if x < 0
}
```

aka *case analysis* can be represented in Lisp like:

```scheme
(define (abs x)
	(cond ((> x 0) x)
				((= x 0) 0)
				((< x 0) (- x))))
```

In general, conditionals can be represented like:

```
(cond (⟨p1⟩ ⟨e1⟩)
			(⟨p2⟩ ⟨e2⟩)
			...
			(⟨pn⟩ ⟨en⟩))
```
which have `n` *clauses*, each with a *predicate* `p` and expression *e*.

Predicates are evaluated in order, and short circuit. If none of the predicates evaluate to true, the value of `cond` is undefined.

Its convention to end defined predicates (helper functions that evaluate truthy-ness) in a question mark

Another way to write the `abs` function:

```scheme
(define (abs x)
	(cond ((< x 0) (- x))
				(else x)))
```

`else` is a symbol used in place of a predicate, which describes what happens when all previous clauses evaluate to false

You can also use `if`

```scheme
(define (abs x)
	(if (< x 0)
			(- x) x))
```

whose general form looks like:

`(if ⟨predicate⟩ ⟨consequent⟩ ⟨alternative⟩)`

You can also use the logical operations:

* `(and <e1> <e2> ... <en>)`
* `(or <e1> <e2> ... <en>)`
* `(not <e>)`

Similar to `cond`, `and` and `or` short circuit.

Examples:
```scheme
(define (>= x y) (or (> x y) (= x y)))
(define (<= x y) (or (< x  y) (= x y)))
```
```scheme
(or (x < 5) (x > 10))` == `(and (x >= 5) (x <= 10))
```

Procedures `bind` their variables to locally scoped `bound variables`. Globally bound variables that arent bound by a procedure definition are known as `free` variables (lots of keywords and other procedure names are `free`).

