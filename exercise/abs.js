/*
## Abs(olute)

### Instruction

Create a `isPositive` function that takes a number as
parameter and return true if the given number is
stricly positive, or false otherwise

Create the `abs` function that takes one number argument
and returns its absolute value.
You are not allowed to use `Math.abs`, make your own.


### Notions

- https://nan-academy.github.io/js-training/examples/functions.js
- https://nan-academy.github.io/js-training/examples/ternary.js
- https://devdocs.io/javascript/global_objects/math/abs

*/

Math.abs = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => isPositive(3))
t(() => isPositive(1998790))
t(() => !isPositive(-1))
t(() => !isPositive(-0.7))
t(() => !isPositive(-787823))
t(() => !isPositive(0))

t(({ eq }) => eq(abs(0), 0))
t(({ eq }) => eq(abs(-1), 1))
t(({ eq }) => eq(abs(-13.2), 13.2))
t(({ eq }) => eq(abs(132), 132))

Object.freeze(tests)
