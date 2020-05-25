/*
## debouncing

## Instruction

Create two functions that will work like `_.debounce` from lodash
- `debounce`, this function doesn't need to take care of the options
- `opDebounce`, this function will take care of the `trailing` and `leading` options

### Notions

- https://lodash.com/docs/4.17.15#debounce

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ code }) => !code.includes('this'))

const add = (arr, el) => arr.push(el)

// it uses the array to better test the leading and trailing edge of the time limit
// so if the leading edge is true it will execute the callback
// if the trailing edge is true it will execute the callback before returning the array
const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => callback(arr, 1), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr.length)
    }, callLimit * nbr)
  })

// test with debounce wait limit inferior to wait time call (how much time we wait to the function be called again)
// it works concurrently
t(async ({ eq }) =>
  eq(
    await Promise.all([
      run(debounce(add, 10), 20, 5),
      run(debounce(add, 5), 15, 10),
    ]),
    [4, 9]
  )
)
// testing with wait limit superior to wait time call
// execution on the trailing edge, after wait limit has elapsed
t(async ({ eq }) => eq(await run(debounce(add, 20), 10, 5), 0))

// trailing edge as true
t(async ({ eq }) =>
  eq(
    await run(opDebounce(add, 20, { leading: false, trailing: true }), 10, 5),
    0
  )
)

// leading edge as true
t(async ({ eq }) =>
  eq(
    await run(opDebounce(add, 20, { leading: true, trailing: false }), 10, 5),
    1
  )
)

// trailing and leading as true
t(async ({ eq }) =>
  eq(
    await run(opDebounce(add, 20, { leading: true, trailing: true }), 10, 5),
    1
  )
)

// trailing and leading as false
t(async ({ eq }) =>
  eq(
    await run(opDebounce(add, 20, { leading: false, trailing: false }), 10, 5),
    0
  )
)

Object.freeze(tests)
