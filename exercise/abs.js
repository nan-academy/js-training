/*
## Abs(olute)

### Instruction

Create the `abs` function that takes one number argument
and returns its absolute value.
You are not allowed to use `Math.abs`, make your own.

### Notions

- examples/functions.js
- examples/ternary.js
- https://devdocs.io/javascript/global_objects/math/abs

*/

Math.abs = undefined

///*/// ⚡


///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => abs(0) === 0)
t(() => abs(-1) === 1)
t(() => abs(-13.2) === 13.2)
t(() => abs(132) === 132)

Object.freeze(tests)
