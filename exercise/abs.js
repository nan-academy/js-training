/*
## Abs(olute)

### Instruction

Create the `abs` function that takes one number argument
and returns its absolute value.
You are not allowed to use `Math.abs`, make your own.
see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

### Notions

- Functions
- Ternary
*/


export const tests = []
const t = f => tests.push(f)

t(() => typeof abs === 'function')
t(() => abs.toString().includes('Math.abs') === false)
t(() => abs !== Math.abs)
t(() => abs.length === 1)
t(() => abs(0) === 0)
t(() => abs(-1) === 1)
t(() => abs(-13.2) === 13.2)
t(() => abs(132) === 132)
