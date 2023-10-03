---
Title: After Beginner Advice
---

These are a couple thoughts about what to do after you've been programming for a bit.

As a bit of context, when I was starting out, I pretty much used Python for most things. I don't think I was ever an evangelist, but if I had to do something I would reach for Python, even if (now, in hindsight) it wasn't really the best choice. I have been bit by a lot of the stereotypes people complain about ([dealing with the GIL](https://wiki.python.org/moin/GlobalInterpreterLock), multi threading (though, this is [not as terrible](https://docs.python.org/3/library/concurrent.futures.html#module-concurrent.futures) as it once was), memory usage on long running processes, dealing with python environments/versions/packages..., I could go on)

And yes, those are all still downsides, but for prototyping, doing some quick data transformation, dealing with the mess that is CSV files, python is still great. This is probably half familiarity and half python actually being decent to just get stuff done in.

In my experience, anyone who says there are no downsides or trade-offs in a language has not been using it long enough, or they're abstracted away from the true problems by frameworks. To quote the classic: "There are only two kinds of languages: the ones people complain about and the ones nobody uses." - Bjarne Stroustrup

I think its useful to get _really good_ at one programming language. This is not to say you should _just learn one language_, but using a language extensively will, eventually, sort of make you hate parts of it -- and I think that's fine! There are pros and cons everywhere, and its useful to know those and choose the correct tool to solve your problem. If all you know is one language, its hard to know what you're missing out on.

As time went on, I learned more about using the command line, and generally [expanded my general knowledge of other programming languages](https://github.com/seanbreckenridge/poly-project-euler) I have rewritten [some of the those tools in perl](https://github.com/seanbreckenridge/pmark) (because it could use PERLs extensive regex functionality well), some in rust [to use pest.rs](https://pest.rs/), some in golang [for tiny CLIs](https://github.com/seanbreckenridge/newest), or because [I just wanted a quick HTTP server](https://github.com/seanbreckenridge/server_clipboard) and its standard library is great for that.

Is easy to say 'pick the correct language for the tool', but its not easy to know what the correct thing is unless you've played around with lots of them. I don't think reading tutorials or coding bootcamps are going to give you the intuition - pick some language/library that looks cool that you've never used, and create some toy example or little tool for yourself, and eventually all these little side projects give you knowledge/intuition.

### Frameworks

I could repeat the entire article here, but I think [this is good advice](https://webcache.googleusercontent.com/search?q=cache:https://johndanielraines.medium.com/be-an-engineer-not-a-frameworker-c58fe28d0c88). The only thing I don't really vibe with is the distinction between frameworker/programmer/engineer. There's no point in separating all these words that mean the same thing, but it makes for good narrative in the article.

I am not against framework or against `<insert programming language here>`, I am against the idea that you have to use one language or framework to solve every problem. If you're lucky, [your code will survive long enough to be technical debt to someone else](https://blog.visionarycto.com/p/my-20-year-career-is-technical-debt)
