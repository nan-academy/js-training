/*
## Quantifiers

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

- https://devdocs.io/javascript/global_objects/array/some
- https://devdocs.io/javascript/global_objects/array/every
*/
Array.prototype.some = Array.prototype.every = undefined
// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const greaterEq10 = (n) => n >= 10

t(({ eq, ctx }) => eq(some(ctx.small, greaterEq10), false))
t(({ eq, ctx }) => eq(some(ctx.mixed, greaterEq10), true))
t(({ eq, ctx }) => eq(some(ctx.big, greaterEq10), true))

t(({ eq, ctx }) => eq(every(ctx.small, greaterEq10), false))
t(({ eq, ctx }) => eq(every(ctx.mixed, greaterEq10), false))
t(({ eq, ctx }) => eq(every(ctx.big, greaterEq10), true))

t(({ eq, ctx }) => eq(none(ctx.small, greaterEq10), true))
t(({ eq, ctx }) => eq(none(ctx.mixed, greaterEq10), false))
t(({ eq, ctx }) => eq(none(ctx.big, greaterEq10), false))

// the function should not be called more than needed
t(({ eq, ctx }) => {
  let count = 0
  some(ctx.big, () => ++count > 2)
  return eq(count, 3)
})

t(({ eq, ctx }) => {
  let count = 0
  every(ctx.big, () => ++count < 3)
  return eq(count, 3)
})

t(({ eq, ctx }) => {
  let count = 0
  none(ctx.big, () => ++count > 2)
  return eq(count, 3)
})

Object.freeze(tests)

export const setup = () => ({
  small: [3, 6, 1, 7, 2],
  mixed: [23, 4, 10, 25, 6],
  big: [43, 30, 16, 57, 10],
})
