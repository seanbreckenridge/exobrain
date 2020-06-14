---
Title: SICP 06 - Generic Operators
---

Read Section 2.4 - 2.5.2

Encompasses Lecture 16, 17

We should be able to think of data structures as black boxes. The implementation procedures should be able to be changed/improved on without changing the functional (domain -> range, or correctness) of the procedure.

You can improve the strictness and remove ambiguity from what some 2 element tuple means, by tagging data, prepending some quoted string that specifies a type.

#### Example of Type-Tagging:

```
> (list 'RATIONAL (list 3 4))
(rational (3 4))
> (list 'COMPLEX (list 3 4))
(complex (3 4))
```

### Comparison to Statically Types languages

This is different than a statically types language, because in some C-like language:

```
int x
```

.. the `int` defines what type of value you're looking at, and the corresponding machine instructions (`ADD`, `FLOATADD`) that should be used to represent that. The data itself has no clue what type it is, it must be used with the type definition. This can be used when using subclasses to slice off attributes, called [Object Slicing](https://en.wikipedia.org/wiki/Object_slicing).

Type tagging worsens runtime since for each operation, the interpreter has to find out what types its looking at and do some comparisons, while the compiler takes care of that at compile time for a compiled language.

In your functions, you can then do a `cond` against the first element in the list, and `dispatching on the type`. This may improve readability/debugging. However, this also requires that everyone working on a system tag their data, and tags/function names for different types can't conflict. Book calls this `convential` style, grouping verbs (e.g. `area` for `n-gons`) and `cond`ing against the data type.

However, `Implementing generic interfaces is not additive`. A person creating the selectors/generic procedures can't know what type of ADT will be passed into it/how to deal with it, so it couldn't dispatch. To modularize this further to allow that, we use:


### Data-Directed Programming

Instead of changing functions to dispatch to specific functions based on types, the actions and types of data are built into a global lookup table that can be modified at runtime.

That way, you can insert `<item>` into a table indexed by `<operation>`, `<type>`, where `<item>` is some function that does the operation for the type, without ever modifying the base code.

In order to create a new '`package`', one would the functions which act on your data type, and then `put` references to that function into the global table. If trying to create generic methods which act on any type, you can `get` the function from the global table.

The table returns `false` if it couldn't find a method for that data type in the global lookup table.

Data Directed programming isn't *just* this lookup table pattern, its the general pattern of describing functionality in your program by storing some procedure/value somewhere. Same thing is done by any program nowadays with a config file.

### Message Passing

This differs from data driven programming in:

Instead of using 'intelligent operations' that dispatch/switch on data types, we use 'intelligent data objects' that dispatch on operations names. The data type includes the functions which act on itself, so all we need to do an operation is to pass the name of a message to a data type.

Procedures are custom-defined on top of the constructors data, e.g.:

```
(define (make-square side)
  (lambda (message)
    (cond ((eq? message 'area)
      (* side side)
    ((eq? message 'side)
      side)
    (else (error "Unknown message"))))))
```

The `side` variable is baked into the new function definition when `make-square` is called.

Message Passing can sort of be thought as a precursor to object oriented programming.

### Systems with Generic Operations

Using the above `data driven` approach, you can make types in a language by defining a table of valid operations for each type. That gives you good control dispatching functions to particular functions, and allows users of your library to extend it by adding their own functions to the global table.

### Cross-Type Operations

You could static define relationships between how to add numbers from one type to another, but this possesses the same problem as before - it can't be done additively.

Also not clear where should the operation be put - some third package that defines the relationship between two other types? Put it in one of the packages, both?

### Type Coercion

Instead of trying to implement procedures for each operation across each `n` types, we can add structure into the type system which describes how to coerce types. Procedures which coerce between types could be added to another `coercion` table, and then the generic functions can check to see if types are the same, else try to `coerce` (w/ `get-coercion`) (from `a` to `b`, else from `b` to `a`), else error.

### Hierarchies of types

To make describing the relationships between types clearer, languages often come with a global structure that describes how built in types relate to one another. Representing one type as a sub-type of another implies one can coerce from one to another.

A tower of subtypes, where one is a subtype of another, and so on, is called a `tower`. As an example:

`integer -> rational -> real -> complex`

Specifying types as towers reduces the amount of type coercions you have to define, since the transitive property allows `integers` to coerce to `complex` without explicit definitions. Other users can also add types with one coercion function to `integer,` which then means it can coerce to all the super types in the tower.

#### Inadequacies of hierarchies

If your type system isn't a tower, but rather is a `graph`, where types are much more complex, a type might have multiple super types. So theres multiple ways to "raise" a type. How to implement a type system which can resolve raising types while allowing modularity is still an area of research.
