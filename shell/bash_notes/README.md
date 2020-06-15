--
Title: Bash Notes
---

Use bash substitutions when possible instead of `sed`/`awk`. 

#### Auto expanding variable contents:

```
# special syntax to expand \n to actual newline in string
name=$'Sean\nBreckenridge'
echo "$name" # recieves one argument

# weird printf trickery
printf "%s" $name # auto expands to two arguments, only prints 'Sean'
printf "%s %s" $name # printf receives two arguments

# safest is to quote your variables
printf "%s" "$name" 
```

---

Maybe look into perl instead of `sed`/`awk`/`tr`/`cut`, look at perlre and perlrun man pages.

Read the bash man page! Bashisms can be pad if youre trying to be posix compliant, but bashisms also save lots of time.

You may need to use POSIX complaint code for something like Solaris SVR4 packages which requires Bourne shell for any scripts.

##### Early Exit

Print message to STDERR if value is unset and exit:

```
# if $1 is unset/empty
USER_INPUT="${1:?must provide something as first argument}"
```

---

To remind myself, `2>/dev/null 1>&2` to completely silence a script, `echo something >&2` (or `1>&2`) to print an error.

##### Extensions

`.sh` at the end of scripts is only necessary if youre creating libraries, or if you're for some reason in windows land. Otherwise you're only making yourself do more typing. If youre making libraries, there is no shebang line and there shouldn't be - its meant to be `source`d into some other script. If its a library, it should have a `.sh` or `.bash` extension and the file shouldn't be executable.

---

[Dont use `/usr/bin/env`](https://rwx.gg/stupid/env/)

Use short curcuiting when doing simple tests, case statements for basic subcommands, and getopts if you want to have short and long (`-h`, `--help`) options for consistency/larger programs.

SUID/SGID are forbidden on shell scripts (running as owner as script instead of person executing the script). Too many security risks that come along with using that, use `sudo` if you need elevated access.

#### Styling/Formatting

The rest of these notes are from the [Google StyleGuide](https://google.github.io/styleguide/shellguide.html), which is fantastic.

Dont need to use the `function` keyword, as its optional. Also, there aren't really functions, they're procedures/methods. No reason to break POSIX compliance and using `function`.

Using hyphens (or nothing) instead of underscores for variable/script names.

I tend to just use [`shfmt`](https://github.com/mvdan/sh) for everything.

HEREDOCs that have indentation need tabs, so it can make formatting confusing - so they need to left justified. You can use a dash to chomp tabs, but then it removes *all* surrounded tabs.

One can use embedded newlines:

```
some_string="I am a string
with multiple lines"
```

Dont but `do` and `then` on their own line when using `for`/`if` loops:

```
for ....; do
  expression
done
if ....; then
  expression
done
```

Using semicolons makes the indent more obvious.

When doing *lots* of parameter expansion when doing an echo, would make more sense to separate that into another variable, or use `printf`. Avoid stuff like:

```
echo "${1}0${2}0${3}"
```

Quoting:

* *Always quote your strings!* Often better to 'over-quote' than to get an error with shell expansion.
* Never quote literal integers
* Use `"$@"` unless you have a specific reason to use `$*`, like splatting in the individual elements into a string: `"search?q=$*"`
* Single quotes doesn't do any shell substitution.
* Always do shell expansion 

It may not be necessary, but always quote your command substitutions to be safe:

```
some_val="$(subshell command "$@")"
```

`readonly` is a synonym for `declare -r`, which makes a variable constant.

```
FLAGS=( --foo --bar='baz' )
readonly FLAGS
```

Dont need to quote variables in arithmetic subshells

```
if (( $# > 3 )); then
  echo "too many arguments"
fi
```

Dont need to quote literal integers, but you may want to single quote words:

```
exit_code=3
some_value='true'
```

Use `$(command)` instea of backticks. Nested backticks require escaping the inner ones. `$(command)` doesnt change and is easier to read:

```
# Do:
var="$(command "$(command)")"
# instead of:
var="`command \`command\``"
```

Use `[[ ... ]]` instead of `[ ... ]`, `test` and `/usr/bin/[` to avoid POSIX issues. `[[ ]]` is **buit-in** to bash, doing `[` causes you to do a subshell out to the `[` command, and offers you the advantage that:

`[[ ... ]]` reduces errors as no pathname expansion or word splitting takes place. To exemplify what that means, you can do `[[ $VAR == test ]]`, without worrying about `$VAR` expanding to multiple words. You can still do `"$VAR"`, but its not required.

This also means when you're doing regex, you can splat a variable into a regex to test against a string:

```
[[ $filename =~ ^[[:alnum:]]+$pattern ]]
```

For regex:

```
# this matches
[[ "filename" == f* ]]
# this doesnt
[[ "filename" == "f*" ]]
```

Bash is smart enough to deal with empty strings in test. (`/usr/bin/[` is not!)

Use `-z` to empty strings, and `-n` to test if strings has value:

```
[[ -z "$1" ]] && echo "argument is empty"
[[ -n "$1" ]] && echo "argument has value: ${1}"
```

Using `(( ... ))` makes sure that the values are integers, don't have to use `$` and means you don't have to use `-gt` or `-lt` in `[[ .. ]]`:

```
if (( some_var > 3 )); then

fi
```

Use an explicit `./` path when doing wildcard expansion of filenames:

```
find . -name "./*.txt"
```

**Dont use `eval`**.

### Arrays

Arrays should be used for lists of items, to avoid complications with quoting.

Using a single string to multiple command arguments to another command should be avoided, as it leads to having to either doing an eval or parameter expansion.

```
# Do this:
declare -a flags
flags=(--foo --bar='baz')
flags+=(--greeting="Hello ${name}")
binary_command "${flags[@]}"
# Instead of:
flags='--foo --bar=baz'
flags+=' --greeting="Hello world"' # not trivial to do variable expansion
binary_command "${flags}"
```

Command expansions return single strings, not arrays. Avoid trying to capture subshell into array assignments since it won't work if the command contains special characters or whitespace. Better to read into a string and then use `readarray`

#### Piping to While

Use process substitution or `readarray` instead of directly piping into while. Pipes create subshells, so the block in the while loop doesn't have access to un-exported variables in the script, and can't change anything in the parent shell.

*Don't do this:*

```
my_variable='something'
command | while read -r line; do
  my_variable+="${line}\n"
done
echo "$my_variable"  # prints 'something', wasnt modified in loop
```

*Do this instead:*

```
my_variable='something'
while read -r line; do
  my_variable+="${line}\n"
done < <(command)
```

That leaves the while loop in the parent process, but still runs the command in a subshell.

You can also:

```
my_variable='something'
command_output="$(command)"
while read -r line; do
  my_variable+="${line}\n"
done <<<"$command_output"
```

which sends the string into `STDIN`.

Another alternative with `readarray`:

```
my_variable='something'
readarray -t lines < <(command)
for line in "${lines[@]}; do
  my_variable+="${line}\n"
done
```

---

Should be careful about using a for-loop to iterate over output using `for something in $(...)`, since the output is split by whitespace, not by line. This can be safe, if you're sure the subshell output can't contain whitespace, but `while` with `readarray` is often safer.


`<` and `>` in `[[ ... ]]` perform **lexographic**, not numerical comparisons.

### Math subshells:

```
# do some simple arithmetic and print it
echo "$(( 2 + 2)) is 4"
# assign to variable
(( i = 10 * j + 400))
echo "$i"
```

`let` isn't `declare` or `local` - just avoid it.

Stylistic considerations aside, shell built-in arithmetic is way faster than a subshell out to `expr` - avoid it.

### Local/Declare

`local` and `declare` have the same flags. `declare` works a global level and `local` works in functions.

same thing:
```
readonly SOME_PATH='/some/path'
declare -r SOMEPATH='/some/path'
```

```
# makes constant and exports variable:
declare -rx SOMEPATH='/some/path'
```

Can set a variable to be readonly after checking opts:

```
VERBOSE='false'
while getopts 'v' flag; do
  case "${flag}" in
    v) VERBOSE='true' ;;
  esac
done
readonly VERBOSE
```

### Clobbering Exit Codes

You should separate the declaration of `declare` and `local` from its `RHS` value if that includes a call to a subshell which could fail. For example:

```
declare my_var="$(command)"
(( $? == 0 )) || return
```

will *always* succeed, since the `declare` returns a 0 exit code.

Should instead do:

```
declare my_var
my_var="$(command)"
(( $? == 0))
```

When a script gets large enough, you may start separating parts into functions. That means that an `exit` that may have previously existed wouldn't exit the script, but instead the function. Those should be converted to `return` and then the main invocation to the function should be `||`'d or `(( $? == 0))`d against. This also leads itself well to exporting functions in `bash` for interactive use.

So, it makes more sense to create a `main` or top-level function that includes your entire script, like:

```
main() {
  [ -z "$1" ] && {
    echo "error" >&2
    return 1
  }
}

main "$@" || exit $?
```

For short scripts that just once from top to bottom, that's slight overkill, but once youre doing lots of `getopts`/`validation` or have a sufficient amount of functionality, it makes sense to do that.

### Checking Return Values

Instead of explicitly checking `$?` to check the error code, you can use an if statement, or just a `||` with curly brackets:

```
if ! mv "$something" "$somewhere"; then
  echo "Error, couldnt move ${something}"
  exit 1
fi

# or...
if ! some_error="$(mv "$something" "$somewhere")"; then
  echo "$some_error"
  exit 1
fi

# or...
mv "$something" "$somewhere" || {
  echo "Error, couldn't move ${something}"
  exit 1
}
```

Bash also has `PIPESTATUS` that lets you check the return code from every part of a pipe.

```
tar -cf - ./* | ( cd "${dir}" && tar -xf - )
if (( PIPESTATUS[0] != 0 || PIPESTATUS[1] != 0 )); then
  echo "Unable to tar files to ${dir}" >&2
fi
```

Another alternative if you're pipelining text is to use `xargs -r`, which doesn't run if the STDIN is empty, which is typically the case if a command failed:

```
some_command_that_might_print_nothing | xargs -r -I "{}" echo "{}"
```

References: 

* <https://google.github.io/styleguide/shellguide.html>
* bash man page
