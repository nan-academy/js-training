/*
## debouncing

## Instruction

Create two functions that will work like `_.debounce` from lodash
- `debounce`, this function doesn't need to take care of the options
- `opDebounce`, this function will take care of the `leading` options

### Notions

- https://lodash.com/docs/4.17.15#debounce

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

const add = (arr, el) => arr.push(el)

// it uses the array to better test the leading and trailing edge of the time limit
// so if the leading edge is true it will execute the callback
// if the trailing edge is true it will execute the callback before returning the array
const run = (callback, { delay, count }) =>
  new Promise((r) => {
    const arr = []
    const inter = setInterval(() => callback(arr, 1), delay)
    setTimeout(() => {
      clearInterval(inter)
      r(arr.length)
    }, delay * count)
  })

// test with debounce wait limit inferior to wait time call (how much time we wait to the function be called again)
// it works concurrently
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(debounce(add, 5), { delay: 10, count: 5 }),
      run(debounce(add, 2), { delay: 5, count: 10 }),
    ]),
    [4, 9]
  )
)
// testing with wait limit superior to wait time call
// execution on the trailing edge, after wait limit has elapsed
t(async ({ eq }) =>
  eq(await run(debounce(add, 10), { delay: 5, count: 5 }), 0)
)

// leading edge as false
// it works concurrently
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(opDebounce(add, 4), { delay: 2, count: 5 }),
      run(opDebounce(add, 4), { delay: 2, count: 2 }),
    ]),
    [0, 0]
  )
)

// leading edge as true
// it works concurrently
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(opDebounce(add, 20, { leading: true }), { delay: 7, count: 3 }),
      run(opDebounce(add, 10, { leading: true }), { delay: 14, count: 3 }),
    ]),
    [1, 3]
  )
)

Object.freeze(tests)
