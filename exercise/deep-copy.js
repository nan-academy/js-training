/*
## deep-copy

### Instructions

Create a function called `cloneDeep` that deep copies an object.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ code }) => !code.includes('JSON'))

// tests the depth of the copied object
// the copy is equal
t(({ eq, ctx }) => eq(ctx.copy, ctx.depthResult))
// but different
t(({ ctx }) => ctx.copy !== ctx.depthResult)
// if we change the inner values of the copied object
// and compare it to the original object it must fail
t(({ ctx, fail, eq }) => {
  ctx.copy.a.b1.d2.f3.i4 = 2
  ctx.copy.a.c1 = 1
  return fail(() => eq(ctx.copy, ctx.depthResult))
})
t(({ ctx, eq }) => eq(ctx.copy, ctx.changedResult))

// tests the array in depth
// the copy is equal
t(({ eq, ctx }) => eq(ctx.copy1, ctx.arrayResult))
// but different
t(({ ctx }) => cloneDeep(ctx.copy1) !== ctx.arrayResult)
// if we change the inner values of the copied object, it must fail
t(({ ctx, fail, eq }) => {
  ctx.copy1.a.b1 = { e2: 1 }
  ctx.copy1.a.c1.d2 = 1
  return fail(() => eq(ctx.copy1, ctx.arrayResult))
})
t(({ ctx, eq }) => eq(ctx.copy1, ctx.changedArray))

Object.freeze(tests)

export const setup = () => ({
  copy: cloneDeep({
    a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 },
  }),
  depthResult: {
    a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 },
  },
  changedResult: {
    a: { b1: { d2: { f3: { i4: 2 }, h3: 1 }, e2: { g3: 2 } }, c1: 1 },
  },
  copy1: cloneDeep({
    a: { b1: [2, 1, 4], c1: { d2: [6, 2, 1] } },
  }),
  arrayResult: {
    a: { b1: [2, 1, 4], c1: { d2: [6, 2, 1] } },
  },
  changedArray: {
    a: { b1: { e2: 1 }, c1: { d2: 1 } },
  },
})
