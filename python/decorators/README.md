---
Title: Decorators Pycon
Blog: no
---

<https://www.youtube.com/watch?v=MjHpMCIvwsY>

[Slides and Code Snippets can be downloaded here](https://lerner.co.il/wp-content/uploads/2019/05/practical-decorators.zip)

- Decorating a function creates three callables - the decorated function, the decorator, and the return value (function) from the decorator function assigned back to the decorated function.
- Scope resolution in python follows the LEGB rule, looking for variables at each level before moving upwards. [Source](https://www.geeksforgeeks.org/scope-resolution-in-python-legb-rule/):

  - Local(L): Defined inside function/class

  - Enclosed(E): Defined inside enclosing functions(Nested function concept)

  - Global(G): Defined at the uppermost level

  - Built-in(B): Reserved names in Python built-in modules

- The decorator function (the one that you apply to others with e.g. `@decorator`) executes once, when you decorate a function, but the inner wrapper function gets executed every time function is called.

- Since the outside function is only executed once, you can use it to define additional functionality using `nonlocal`.

Snippet from Lecture:

```python
import time

class CalledTooOftenError(Exception):
    pass

def once_per_minute(func):
    last_invoked = 0

    def wrapper(*args, **kwargs):
        nonlocal last_invoked

        elapsed_time = time.time() - last_invoked
        if elapsed_time < 60:
            raise CalledTooOftenError(f"Only {elapsed_time} has passed")
        last_invoked = time.time()

        return func(*args, **kwargs)

    return wrapper

if __name__ == '__main__':
    @once_per_minute
    def add(a, b):
        return a + b

    print(add(2, 2))
    print(add(3, 3))
```

 - `nonlocal` updates the variable in the enclosing scope, without having to make global variables. You only need to use `nonlocal` if you are assigning to the variable in the inner scope; if you're accessing it follows LEGB scope.

- Adding a decorator to a function passes the function as the first argument to the decorator. If arguments need to be passed to a decorator, you need to define an additional wrapper function that receives those arguments:

```python
def some_decorator(n):
    def middle(func): # func is function being decorated
        function_specific_local = 0

        def wrapper(*args, **kwargs):
            nonlocal function_specific_local

            function_specific_local += n
            return func(*args, **kwargs)
        return wrapper
    return middle

```

- This also increases the number of callables to 4. Applying this to a function manually would look like:

```python
def my_function():
    ...
my_function = some_decorator(n=5)(my_function)
```

With a decorator:

```python
@some_decorator(n=5)
def my_function()
  ...
```

- Memoization wrappers: `args` in wrapper functions are defined as a tuple. As tuples are hashable, you can check if the same `args` have been passed before to memoize. If some of the arguments aren't hashable, you can `pickle` `args` and `kwargs` before comparing it against your cache:

`key = (pickle.dumps(args), pickle.dump(kwargs))`

- If you have distinct classes, but want similar behavior, instead of using inheritance/multiple inheritance, or setting class attributes after the fact, you can use a decorator. Since classes are callables, this is no different.

Snippet from Lecture:

```python
def fancy_repr(self):
    return f"I'm a {type(self).__name__}, with vars {vars(self)}"

def repr_and_birthday(c):
    c.__repr__ = fancy_repr

    def wrapper(*args, **kwargs):
        o = c(*args, **kwargs)
        o._created_at = time.time()
        return o
    return wrapper


if __name__ == '__main__':
    @repr_and_birthday
    class Foo():
        def __init__(self, x, y):
            self.x = x
            self.y = y

    f = Foo(10, [10, 20, 30])
    print(f)
    print(f._created_at)
```

- Use decorators instead of metaclasses if possible.

- Wrapping your inner wrapper function (the one with `*args` and `**kwargs`) with `functools.wraps` allows you to keep attributes of a function (e.g. `__name__`, `__doc__`)

- `functools.partials` acts as a wrapper function that passes `*args` or `**kwargs` to a function

[Source](https://www.pydanny.com/python-partials-are-fun.html):

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)

assert square(2) == 4
```
