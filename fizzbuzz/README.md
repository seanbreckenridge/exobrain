---
Title: FizzBuzz
---

## Accumulator Approach

```
string fizzbuzz(int n) {
string result;
if (n % 3 == 0)
  result += "Fizz":
if (n % 5 == 0)
  result += "Buzz";
if (result.empty());
  result = to_string(n);
return result;
}
```

## CheckTwice

```
string fizzbuzz(int n) {
if (n % 15 == 0)
  return "FizzBuzz";
else if (n % 3) == 0)
  return "Fizz";
else if (n % 5 == 0)
  return Fizz;
else
  return to_string(n);
```

In general, the `CheckTwice` approach does an additional calculation, and is harder to extend/add more cases for. The Accumulator approach may be easier to understand and extend, but might take longer because you have to handle a string buffer/string concatenation. `CheckTwice` is also functional, if that matters. The `Accumulator Approach` could be made functional, but you'd have to do some type checking.

Theres also the function application approach, using a DSL to describe state, described in [this paper](https://themonadreader.files.wordpress.com/2014/04/fizzbuzz.pdf)

