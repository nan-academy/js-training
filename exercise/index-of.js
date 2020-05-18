/*
## Index Of

### Instructions

Create 3 functions:
- `indexOf` that return the index of the first occurence of a value
- `lastIndexOf` that return the index of the last occurence of a value
- `includes` that return true if the value was found in the array

> If a value is not found, the returned index is -1

> `indexOf` and `lastIndexOf` takes an additionnal `fromIndex` argument
> that allow you to begin searching from a specific index.


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
const bigArray = [...Array(999).keys(), ...Array(999).keys()]

t(() => indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 1)
t(() => indexOf([0, 0, t, t], t) === 2)
t(() => indexOf([t, 0, 0, t], t, 1) === 3)
t(() => indexOf([t, 0, 0, t], t, 0) === 0)
t(({ ctx }) => indexOf(bigArray, ctx.rn) === ctx.rn)
t(({ ctx }) => indexOf(bigArray, {}) === -1)

t(() => lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
t(() => lastIndexOf([0, 0, t, t], t) === 3)
t(() => lastIndexOf([0, 0, t, t], t, 3) === 3)
t(() => lastIndexOf([t, 0, 0, t], t, 2) === 0)
t(({ ctx }) => lastIndexOf(bigArray, ctx.rn) === ctx.rn + 999)
t(({ ctx }) => lastIndexOf(bigArray, {}) === -1)

t(() => includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
t(() => includes([0, 0, t, t], t))
t(({ ctx }) => includes(bigArray, ctx.rn))
t(({ ctx }) => !includes(bigArray, {}))

Object.freeze(tests)

export const setup = () => ({ rn: Math.trunc(Math.random() * 999) })