/*
## Cut corners

### Instructions

Create a function for each rounding math functions:
- round (like `Math.round`)
- ceil (like `Math.ceil`)
- floor (like `Math.floor`)
- trunc (like `Math.trunc`)


### Notions

- https://devdocs.io/javascript/global_objects/math

*/

Math.round = Math.ceil = Math.floor = Math.trunc = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0]

t((_, ctx) => ctx.r = Math.random() * 10)
t(({ eq }) => eq(nums.map(round), [3, -3, 3, -3, 0]))
t(({ eq }) => eq(nums.map(floor), [3, -4, 2, -3, 0]))
t(({ eq }) => eq(nums.map(trunc), [3, -3, 2, -2, 0]))
t(({ eq }) => eq(nums.map(ceil), [4, -3, 3, -2, 0]))
t((_, { r }) => trunc(0xfffffffff + r) === 0xfffffffff + ~~(r))
t(({ code }) => !code.includes('~'))
t(({ code }) => !code.includes('parseInt'))

Object.freeze(tests)
