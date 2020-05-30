/*
## throttling

### Instructions

Create two functions that will work like `_.throttle` from lodash
- `throttle`, this function doesn't need to take care of the options
- `opThrottle`, this function will take care of
  the `trailing` and `leading` options


### Notions

- https://lodash.com/docs/4.17.15#throttle

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const add = (arr, el) => arr.push(el)
const run = (callback, { delay, count }) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => callback(arr, 1), delay)
    setTimeout(() => {
      clearInterval(inter)
      r(arr.length)
    }, delay * count)
  })

// wait 26ms and execute 4 times every 16ms, executes with a wait time of 26
t(async ({ eq }) =>
  eq(await run(throttle(add, 26), { delay: 16, count: 4 }), 2)
)

// wait 20ms and execute 2 times every 10ms, executes with a wait time of 26
t(async ({ eq }) =>
  eq(await run(throttle(add, 20), { delay: 10, count: 2 }), 1)
)

// wait 16ms and execute 5 times every 26ms, will execute with out waiting
t(async ({ eq }) =>
  eq(await run(throttle(add, 16), { delay: 26, count: 5 }), 4)
)

// it works concurently
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(throttle(add, 16), { delay: 26, count: 5 }),
      run(throttle(add, 16), { delay: 26, count: 5 }),
    ]),
    [4, 4]
  )
)

// tests the trailing option
t(async ({ eq }) =>
  eq(
    await run(opThrottle(add, 26, { trailing: true }), { delay: 16, count: 4 }),
    1
  )
)

// tests the leading option with wait time in the leading edge of the timeout
// tests the leading option with wait time not in the leading edge of the timeout
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(opThrottle(add, 15, { leading: true }), { delay: 10, count: 10 }),
      run(opThrottle(add, 26, { leading: true }), { delay: 16, count: 4 }),
    ]),
    [5, 2]
  )
)

// tests without options
t(async ({ eq }) =>
  eq(await run(opThrottle(add, 10), { delay: 5, count: 2 }), 0)
)

// tests with both options true
t(async ({ eq }) =>
  eq(
    await run(opThrottle(add, 26, { trailing: true, leading: true }), {
      delay: 16,
      count: 4,
    }),
    2
  )
)

Object.freeze(tests)
