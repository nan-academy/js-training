/*
## If Exists Then

### Instructions

Create three functions that receive an array and a function each:

- `every` that returns true if every element of the array respects the
condition of the received function and false otherwise.
- `some` that returns true if at least one element of the array respects the
condition of the received function and false otherwise.
- `none` that returns true if none of the elements of the array respects the
condition of the received function and false otherwise.

The use of `[].every` and `[].some` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/
Array.prototype.some = Array.prototype.every = undefined
// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const array1 = [3, 6, 1, 7, 2]
const array2 = [23, 4, 10, 25, 6]
const array3 = [43, 30, 16, 57, 10]

const greaterEq10 = (n) => n >= 10

t(({ eq }) => some(array1, greaterEq10) === false)
t(({ eq }) => some(array2, greaterEq10) === true)
t(({ eq }) => some(array3, greaterEq10) === true)

t(({ eq }) => every(array1, greaterEq10) === false)
t(({ eq }) => every(array2, greaterEq10) === false)
t(({ eq }) => every(array3, greaterEq10) === true)

t(({ eq }) => none(array1, greaterEq10) === true)
t(({ eq }) => none(array2, greaterEq10) === false)
t(({ eq }) => none(array3, greaterEq10) === false)

Object.freeze(tests)
