/*
##It's a match

### Instruction
 Create a variable `normal` and assign to it a regular expression that matches with the expression 'hi'.
 Create a variable `begin` and assign to it a regular expression that matches with the expression 'hi', only when it is in the beggining.
 Create a variable `end` and assign to it a regular expression that matches with the expression 'hi', only when it is in the end.
 Create a variable `beginEnd` and assign to it a regular expression that matches with the expression 'hi', only when it is in the end.

// /*/ // ⚡



// /*/ // ⚡

export const tests = []
const t = f => tests.push(f)

t(() => normal.test("hi"))
t(() => normal.test("higher"))
t(() => !normal.test("likelihood"))
t(() => !normal.test("Hi"))
t(() => normal.test("I love sushi"))

t(() => begin.test("hi"))
t(() => begin.test("higher"))
t(() => begin.test("likelihood"))
t(() => !begin.test("Hi"))
t(() => !begin.test("I love sushi"))

t(() => end.test("hi"))
t(() => !end.test("higher"))
t(() => !end.test("likelihood"))
t(() => !end.test("Hi"))
t(() => end.test("I love sushi"))

t(() => beginEnd.test("hi"))
t(() => !beginEnd.test("higher"))
t(() => !beginEnd.test("likelihood"))
t(() => !beginEnd.test("Hi"))
t(() => !beginEnd.test("I love sushi"))

Object.freeze(tests)
