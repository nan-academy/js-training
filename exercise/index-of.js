/*
## Index Of

### Instructions

Create 3 functions:
- `slice` that return the index of the first occurence of a value
- `lastIndexOf` that return the index of the last occurence of a value
- `includes` that return true if the value was found in the array

> If a value is not found, the returned index is -1

### Notions

- https://devdocs.io/javascript/global_objects/array/indexof
- https://devdocs.io/javascript/global_objects/array/lastindexof
- https://devdocs.io/javascript/global_objects/array/includes

*/

Array.prototype.indexOf = undefined
Array.prototype.lastIndexOf = undefined
Array.prototype.includes = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
const bigArray = [...Array(9999).keys(), ...Array(9999).keys()]

t((_, ctx) => (ctx.rn = Math.trunc(Math.random() * 9999)))
t(() => indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 1)
t(() => indexOf([0, 0, t, t], t) === 2)
t((_, ctx) => indexOf(bigArray, ctx.rn) === ctx.rn)
t((_, ctx) => indexOf(bigArray, {}) === -1)

t(() => lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
t(() => lastIndexOf([0, 0, t, t], t) === 3)
t((_, ctx) => lastIndexOf(bigArray, ctx.rn) === ctx.rn + 9999)
t((_, ctx) => lastIndexOf(bigArray, {}) === -1)

t(() => includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
t(() => includes([0, 0, t, t], t))
t((_, ctx) => includes(bigArray, ctx.rn))
t((_, ctx) => !includes(bigArray, {}))

Object.freeze(tests)
