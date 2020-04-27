/*
## If Exists Then

### Instructions

Create three functions that receive an array and a function each:

- `Every` that returns true if every element of the array respects the
condition of the received function and false otherwise.
- `Some` that returns true if at least one element of the array respects the
condition of the received function and false otherwise.
- `None` that returns true if none of the elements of the array respects the
condition of the received function and false otherwise.

The use of `[].every` and `[].some` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/

///*/// ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

const array1 = [3, 6, 1, 7, 2]
const array2 = [23, 4, 10, 25, 6]
const array3 = [43, 30, 16, 57, 10]

const check = (arr, f) => !arr.some(f)
const greaterEq10 = (n) => n >= 10

t(() => array1.some(greaterEq10) === Some(array1, greaterEq10))
t(() => array2.some(greaterEq10) === Some(array2, greaterEq10))
t(() => array3.some(greaterEq10) === Some(array3, greaterEq10))

t(() => array1.every(greaterEq10) === Every(array1, greaterEq10))
t(() => array2.every(greaterEq10) === Every(array2, greaterEq10))
t(() => array3.every(greaterEq10) === Every(array3, greaterEq10))

t(() => check(array1, greaterEq10) === None(array1, greaterEq10))
t(() => check(array2, greaterEq10) === None(array2, greaterEq10))
t(() => check(array3, greaterEq10) === None(array3, greaterEq10))

t(({ code }) => !code.includes('some'))
t(({ code }) => !code.includes('every'))

Object.freeze(tests)
