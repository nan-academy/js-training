/*
## Welcome to JS-Training

### What is this ?

A course crafted to allow you to understand JS.
You are currently reading a valid JS file, this text is a comment.

It's a series of exercises meant to give you a good overview
of the language and programming.


### How to use it ?

You will have to write code to unlock the next exercise.

You can only edit code after this comment (this block of faded text).
Once you think your solution is OK you can run the tests
to verify your results.

         ↓ this zap emoji indicates the end of the subject
// /*/ // ⚡

// you are now in the area where you can write any valid js code :)
// for now, you don't have anything to write, just keep reading.

// /*/ // ⚡ <- this marks the end of your editing zone
export const tests = []
const t = (f) => tests.push(f)

// this is an example of a test, tests are executed to verify your code
// if it returns true, your code is good, if not, try again !
// this one always returns true
// you can try to read and understand tests but it's not required.
t(() => true)

// we wait for 2sec
// this second test is just a pause of 2000 milliseconds
// to give you time to think, enjoy the calm.
// to run your code just hit Ctrl+Enter
// then, we will move to the next file !
t(({ wait }) => wait(2000, true))

Object.freeze(tests)
