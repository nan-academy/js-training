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

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)
const nums = [Math.PI, -Math.PI, Math.E, -Math.E]

t(({ eq }) => eq(nums.map(round), [3, -3, 3, -3]))
t(({ eq }) => eq(nums.map(floor), [3, -4, 2, -3]))
t(({ eq }) => eq(nums.map(trunc), [3, -3, 2, -2]))
t(({ eq }) => eq(nums.map(ceil), [4, -3, 3, -2]))

Object.freeze(tests)
