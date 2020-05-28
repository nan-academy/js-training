/*
## Keep Trying or Give Up

### Instructions

Create a `retry` function, that takes 2 arguments
- a `count`, that tells how many retries must be done
- an async `callback`, that will be call every try

and it return a new function, passing arguments given to the
callback on every tries.

> for count of 3, the function will be called at most 4 times:
> the initial call + 3 retries.


Create a `timeout` function, that takes 2 arguments
- a `delay`, that tells how long to wait
- an async `callback`, that will be call

and it return a new function, passing arguments given to the callback
and either the async callback resolve before the delay is reached,
in that case we return the value from the callback,
or reject an error using the message `"timeout"`


### Notions

- https://nan-academy.github.io/js-training/examples/promise.js
- https://devdocs.io/dom/windoworworkerglobalscope/settimeout
- https://devdocs.io/javascript/global_objects/promise/race

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const fail = (q) =>
  q.then(
    (v) => Promise.reject('should fail'),
    (e) => e.message
  )

t(async ({ eq, ctx }) => eq(await retry(0, ctx.failNTimes(0))(ctx.r), [ctx.r]))
t(async ({ eq, ctx }) => eq(await retry(3, ctx.failNTimes(3))(ctx.r), [ctx.r]))
t(async ({ eq, ctx }) => eq(await retry(10, ctx.failNTimes(5))(ctx.r, ctx.r), [ctx.r, ctx.r]))
t(async ({ eq, ctx }) =>
  eq(await fail(retry(3, ctx.failNTimes(9))(ctx.r)), `x:${ctx.r}`)
)

t(async ({ eq, ctx }) => eq(await timeout(2, ctx.delayed(0))(ctx.r), [ctx.r]))
t(async ({ eq, ctx }) => eq(await timeout(2, ctx.delayed(0))(ctx.r, ctx.r), [ctx.r, ctx.r]))
t(async ({ eq, ctx }) => eq(await fail(timeout(2, ctx.delayed(4))(ctx.r)), 'timeout'))

Object.freeze(tests)

export const setup = () => ({
  r: Math.random().toString(36).slice(2),
  failNTimes: (n) => async (...v) => --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
  delayed: (delay) => (...v) => new Promise(s => setTimeout(s, delay, v)),
})
