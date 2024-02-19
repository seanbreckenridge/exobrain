---
title: click.Choice and type narrowing
description: Using Literals and mypy to create typesafe click commands
pubDate: 2023/10/25
updatedDate: 2024/02/18
---

I am a heavy [`click`](https://github.com/pallets/click) user, but the lack of typesafety from the click decorators to the types in the function signature often bites me when making changes.

As a basic example, this does not type error:

```python
import click

@click.command()
@click.option("--flag", type=int, default=None)
def export(flag: int) -> None:
    print(flag + 5)
```

The `type=int` is just there for `click` to parse the user input. If the user didn't provide anything, it ends up throwing an error at runtime since it defaults to `None`

```
print(flag + 5)
          ~~~~~^~~
TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
```

However, mypy won't warn us about that:

There's no real way to fix the type in this case - this is an example of how your types for untyped code will just be casted, mypy assumes you're correct when you specify those.

I very often use `click.Choice` to describe an output format for a command and then `match` on the format. A very basic example:

```python
import click


@click.command()
@click.option("-o", "--ouptut", type=click.Choice(["text", "json"]), default="text")
def main(output: str) -> None:
    data = "data"

    match output:
        case "text":
            print(data)
        case "json":
            print({"data": data})
        case _:
            raise ValueError(f"Unknown output format: {output}")

if __name__ == "__main__":
    main()
```

However, if I add another format to the `Choice`, it would just skip it, since it does not match `text` or `json`.

I did the obvious thing and added default case and raise an error, but that is a runtime error -- I've sometimes forgot to implement one of the cases for `click.Choice`

Because we typed `output` as a `str`, there are quite literally infinite possibilities for it. Instead, we can constrain it a bit more by using a [`typing.Literal`](https://docs.python.org/3/library/typing.html#typing.Literal):

```diff
+import typing
+
 import click

+OutputFormat = typing.Literal["text", "json"]
+

 @click.command()
 @click.option("-o", "--ouptut", type=click.Choice(["text", "json"]), default="text")
-def main(output: str) -> None:
+def main(output: OutputFormat) -> None:
     data = "data"

     match output:
```

You can get the arguments out of a `Literal` by using `typing.get_args`, so we could remove the duplication in the `@click.option`:

```
@click.option("-o", "--ouptut", type=click.Choice(typing.get_args(OutputFormat)), default="text")
```

If you wanted to remove the hardcoded `"text"` from the default, you could also use `typing.get_args(OutputFormat)[0]` to index into the first item in the Literal to pull out `"text"`.

However, if we add another format (say `table`), it's still just going to raise the `ValueError`

In order to 'narrow' the type so that mypy can infer that we're missing a `typing.Literal` case, we can use `typing.assert_never` instead, to tell `mypy` that the default case should never be called:

```python
import sys
from typing import Literal, get_args

import click

# Never is a new feature, so try to import it from the typing_extensions
# package if it's not available in the current version of Python.
if sys.version_info < (3, 11):
    from typing_extensions import assert_never
else:
    from typing import assert_never


OutputFormat = Literal["text", "json"]


@click.command()
@click.option(
    "-o", "--ouptut", type=click.Choice(get_args(OutputFormat)), default="text"
)
def main(output: OutputFormat) -> None:
    data = "data"

    match output:
        case "text":
            print(data)
        case "json":
            print({"data": data})
        case _:
            assert_never(output)


if __name__ == "__main__":
    main()
```

`assert_never` is itself a very simple function that looks like this:

```python
def assert_never(arg: Never) -> Never:
    raise AssertionError(f"Unhandled value: {arg!r}")
```

the `Never` type tells `mypy` that this is a 'bottom type', it has no members and should never be called.

Now, if we update the `OutputFormat` `Literal` and add `"table"`, it gets added to the `click.Choice` automatically because of `get_args`, and we get a warning from `mypy`!

```python
-OutputFormat = Literal["text", "json"]
+OutputFormat = Literal["text", "json", "table"]
```

```
example.py:30: error: Argument 1 to "assert_never" has incompatible type "Literal['table']"; expected "NoReturn"  [arg-type]
Found 1 error in 1 file (checked 1 source file)
```
