/*
## Min Max

### Instructions

Create the `max` function that takes 2 number as arguments
and returns the greatest

> You must not just use `Math.max`, make your own.

Create the `min` function that takes 2 number as arguments
and returns the lowest

> You must not just use `Math.min`, make your own.


### Notions

- Functions
- Ternary
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

*/

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => max(0, -2) === 0)
t(() => max(-1, 10) === 10)
t(() => max(-13.2, -222) === -13.2)
t(() => max(132, 133) === 133)

t(() => min(0, -2) === -2)
t(() => min(-1, 10) === -1)
t(() => min(-13.2, -222) === -222)
t(() => min(132, 133) === 132)

Object.freeze(tests)
