---
Title: Alan Kay, User Interface Design
---

Was exposed to this through the Berkeley SICP course, Lectures 5 & 6.

Alan Kay was one of the researchers at Xerox Parc, who helped develop the GUI windowing system that every OS uses today.

<https://www.youtube.com/watch?v=6ZdxiQoOBgs>

Shows lots of examples of older operating systems/computers, in which the 'standard' GUI wasn't yet defined. Computers had their own OSs which had their own programming languages, created by a group of people, which users would then modify to create programs they wanted to do. Typically these programs were built into the graphical aspect of the system. In a paint program, there'd be radio buttons you could click on, but you could also create a new radio button by writing a block of code, and that was then part of the operating system.

### Psychology behind Action/Interfaces

From Child to Adult: Doing (under 5yrs) -> Images (under 12yrs) -> Facts/Logic, which describes how people interact with the world.

Once people age out of the initial doing/images phase, they often don't interact with interfaces in the same way. Creative people are somehow able to live in all 3 paradigms at once.

Sadly teenagers after often taught Math/physics through the Facts/Logic paradigm, which isn't how Mathematicians/Physicists actually do their work.

### Tim Galleway - Inner Game of Tennis

If you don't have a good theory of learning, you can still help people learn by making them focus, by removing interference. That's often done through by something not in the Facts/Logic part of your brain. By giving someone something physical to do or say, you remove the barrier of thinking about how to do something.

The part of the body that you want to have learn don't understand English, they are visceral and understand by muscle memory.

Problem with being a beginner is you have a lot of practice staying a beginner. You practice skills that an person intermediate in that skill would never use. So accelerating people through the beginner phase is very important, else people practice wrong things and get frustrated.

`Point of view is worth 80 IQ points`

Actions based on Facts/Logic depend on you knowing lots of previous knowledge and making inferences and conclusions based on that. If drawing a circle and all you can think of is `x^2 + y^2 = r^2`, you'll never start drawing the circle, when all you really had to do was:

- go forwards some
- turn some

Same sort of concept can be brought over to computer science, in which knowing which is the right data structure to use often solves 80% of the problem for you.

The three ways of thinking can be formalized into:

- Kinesthetic (Doing)
- Visual (Images)
- Symbolic (Thinking)

The mouse involves kinesthetic, which locates you in space. Visual helps recognition and recall.

The Symbolic lets you abstract on top of the Kinesthetic/Visual actions, when they're not enough to solve a problem.

### Influence on Computer Interface Design

The Ideal is 'what would a computer be like if it was a pencil'. Getting a user interface back to what people did as 5 year olds, so that once someone interacts with in kinetically, they have an inherent understanding of it, and it becomes an extension of them.

The windowing system came and was solidified from lots of iteration and studying how children `<5` would try and interact with systems like these.

The challenge is to make a system that's easy to use for anyone, but easy to extend for people who want to.

### Complexity Scaling

In older systems like Unix/MS-DOS, to be able to accomplish anything, you had to read a manual, and figure out how the prompt worked, and there's lots of internal details one has to be aware of. As you start to do things that aren't anticipated, the amount of things you have to know increases gradually. If you already known the syntax of a command at the prompt, writing a shell script to put tasks after one another isn't that complicated.

![y-axis: wizardlyness; x-axis: complexity of task](images/unix.png)

In newer, GUI-based systems (MacOS (pre-Unix) and Windows), you can do _a lot_ of things without knowing anything about computers. The windowing systems and buttons make it so that the built-in applications have the complexity to let you pick what you want to do in a graphical way. However, as soon as you want to do something that someone didn't anticipate, you have to learn an entire programming language and windowing system to do anything to extend your system.

![you hit a wall eventually](images/windows.png)

What you really want is like in the Xerox Parc systems, in where the GUI and developers provide you with an initial set of tools, which you can interact with and accomplish many tasks with. But if you want to be able to extend something, it shouldn't take you weeks of studying, you should be able to add a chunk of code to built in applications, which then the OS interprets and creates custom interaction. Has been achieved twice (Xerox Alto, MIT Lisp Machine)

!['holy grail' of interface design](images/xerox.png)
