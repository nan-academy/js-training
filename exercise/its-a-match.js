/*
##It's a match

### Instruction

 Create a variable `normal` and assign to it a regular expression that matches with the expression 'hi'.
 Create a variable `start` and assign to it a regular expression that matches with the expression 'hi', only when it is in the beggining.
 Create a variable `end` and assign to it a regular expression that matches with the expression 'hi', only when it is in the end.
 Create a variable `startEnd` and assign to it a regular expression that matches with the expression 'hi', only when it is in the end.

 */

///*/// ⚡


///*/// ⚡

export const tests = []
const t = f => tests.push(f)

t(() => normal.test("hi"))
t(() => normal.test("higher"))
t(() => !normal.test("likelihood"))
t(() => !normal.test("Hi") === false)
t(() => normal.test("I love sushi"))

t(() => start.test("hi"))
t(() => start.test("higher"))
t(() => start.test("likelihood"))
t(() => !start.test("Hi"))
t(() => !start.test("I love sushi"))

t(() => end.test("hi"))
t(() => !end.test("higher") === false)
t(() => !end.test("likelihood") === false)
t(() => !end.test("Hi") === false)
t(() => end.test("I love sushi"))

t(() => startEnd.test("hi"))
t(() => !startEnd.test("higher") === false)
t(() => !startEnd.test("likelihood") === false)
t(() => !startEnd.test("Hi") === false)
t(() => !startEnd.test("I love sushi") === false)

Object.freeze(tests)
