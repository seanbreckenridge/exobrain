---
Title: Inner Source
---

Inner Source: developing software within a corporate environment using an open source approach. This leaves the code open, allowing other parts of the company to reference (no 'silos')

Typically, this uses a software forge of some kind. Maybe Github, or some corporate alternative.

### Benefits

- Higher quality code
- Improved knowledge sharing
- Higher (arguably?) employee satisfaction
- More of a meritocracy, code is merged based on merit and not decided on during private meetings
- People may develop the code for the same functionality in different parts of the company, separating it (maybe 80%?) into a shared code base means less work. Teams can then finish the 20% themselves, and those products can be marketed/sold differently. The shared code is the 'platform organization':
  - Profit center - Important because it your product brings in money
  - Cost Center - i.e. R/D, costs the company money but is worth for other reasons

```
[ Product  1    ] [ Product  2    ] ...
[ Profit Center ] [ Profit Center ] ...
      |                   |
      |                   |
      |                   |
|----------------------------------|
|           Shared Code            |
|       (Platform Organization)    |
|             Cost Center          |
|----------------------------------|
```

In this structure, even though the platform organization is 80% of the product, its often treated as a cost center, and therefore has less developers, and discriminated/unliked by others/marketing.

The alternative is:

```
[ Product  1    ] [ Product  2    ] ...
[ Profit Center ] [ Profit Center ] ...
      |                   |
      |                   |
|----------------------------------|
|          Inner Source            |
|----------------------------------|
      |                   |
      |                   |
|----------------------------------|
|           Shared Code            |
|       (Platform Organization)    |
|             Cost Center          |
|----------------------------------|
```

### Problems

- Sometimes managers of teams may see this as a threat
  - Dislike that people aren't working on their own jobs but instead other inner-sourced parts of the company
  - Fear of not meeting performance goals
- Some software developers
  - Dislike performing quasi-public work; may damage their reputation
  - Fear follow-on and maintenance work for inner sourced projects
- Sometimes people don't like the idea of their code being seen by everyone
