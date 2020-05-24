/*
## All

### Instructions

Create a function `all` that works like `Promise.all` but with objects.
(instead of arrays)


### Notions

- https://nan-academy.github.io/js-training/examples/promise.js
- https://devdocs.io/javascript/global_objects/promise/all

*/

Promise.all = undefined

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// it should work with an empty object
t(async ({ eq }) => eq(await all({}), {}))

// it should work with synchronous values
t(async ({ eq }) => eq(await all({ a: 1, b: true }), { a: 1, b: true }))

// it should work with pending promises
t(async ({ eq }) =>
  eq(
    await all({
      a: Promise.resolve(1),
      b: Promise.resolve(true),
    }),
    { a: 1, b: true }
  )
)

// it should work with pending promises and synchronous values
t(async ({ eq, ctx }) =>
  eq(
    await all(
      Object.freeze({
        a: Promise.resolve(ctx).then((v) => v + 1),
        b: ctx,
      })
    ),
    { a: ctx + 1, b: ctx }
  )
)

// it should fail if one of the promises reject
t(async ({ eq }) =>
  eq(
    await all({
      a: Promise.resolve(1),
      b: Promise.reject(Error('oops')),
    }).catch((err) => err.message),
    'oops'
  )
)

Object.freeze(tests)

export const setup = Math.random