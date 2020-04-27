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
// if the value in the inner object is changed it must fail
t(({ ctx, fail, eq }) => {
  ctx.copy.a.b1.d2.f3.i4 = 2
  ctx.copy.a.c1 = 1
  return fail(() => eq(ctx.copy, ctx.depthResult))
})

// tests the array in depth
// the copy is equal
t(({ eq, ctx }) => eq(ctx.copy1, ctx.arrayResult))
// but different
t(({ ctx }) => cloneDeep(ctx.copy1) !== ctx.arrayResult)
// if the value in the inner object is changed it must fail
// so if the array is changed or sorted it must fail
t(({ ctx, fail, eq }) => {
  ctx.copy1.a.b.sort()
  ctx.copy1.a.c.d = 1
  return fail(() => eq(ctx.copy1, ctx.arrayResult))
})

Object.freeze(tests)

export const setup = () => ({
  copy: cloneDeep({
    a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 },
  }),
  depthResult: {
    a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 },
  },
  copy1: cloneDeep({
    a: { b: [2, 1, 4], c: { d: [6, 2, 1] } },
  }),
  arrayResult: {
    a: { b: [2, 1, 4], c: { d: [6, 2, 1] } },
  },
})
