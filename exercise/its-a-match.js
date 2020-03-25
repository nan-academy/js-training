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

t(() => normal.test("hi") === true)
t(() => normal.test("higher") === true)
t(() => normal.test("likelihood") === false)
t(() => normal.test("Hi") === false)
t(() => normal.test("I love sushi") === true)

t(() => start.test("hi") === true)
t(() => start.test("higher") === true)
t(() => start.test("likelihood") === false)
t(() => start.test("Hi") === false)
t(() => start.test("I love sushi") === false)

t(() =>end.test("hi") === true)
t(() =>end.test("higher") === false)
t(() =>end.test("likelihood") === false)
t(() =>end.test("Hi") === false)
t(() =>end.test("I love sushi") === true)

t(() =>startEnd.test("hi") === true)
t(() =>startEnd.test("higher") === false)
t(() =>startEnd.test("likelihood") === false)
t(() =>startEnd.test("Hi") === false)
t(() =>startEnd.test("I love sushi") === false)

Object.freeze(tests)
