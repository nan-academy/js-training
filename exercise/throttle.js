/*
## throttling

### Instructions

Create two functions that will work like `_.throttle` from lodash
- `throttle`, this function doesn't need to take care of the options
- `opThrottle`, this function will take care of the `trailing` and `leading` options

### Notions

- https://lodash.com/docs/4.17.15#throttle


// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ code }) => !code.includes('this'))

const add = (arr, el) => arr.push(el)
const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => callback(arr, 1), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr)
    }, callLimit * nbr)
  })

// wait 26ms and execute 4 times every 16ms, executes with a wait time of 26
t(({ eq }) => run(throttle(add, 26), 16, 4).then((v) => eq(v.length, 2)))
// wait 20ms and execute 2 times every 10ms, executes with a wait time of 26
t(({ eq }) => run(throttle(add, 20), 10, 2).then((v) => eq(v.length, 1)))
// wait 16ms and execute 5 times every 26ms, will execute with out waiting
t(({ eq }) => run(throttle(add, 16), 26, 5).then((v) => eq(v.length, 4)))

// tests the trailing option
t(({ eq }) =>
  run(opThrottle(add, 26, { trailing: true, leading: false }), 16, 4).then((v) =>
    eq(v.length, 1)
  )
)
// tests the leading option with wait time in the leading edge of the timeout
t(({ eq }) =>
  run(opThrottle(add, 15, { trailing: false, leading: true }), 10, 10).then((v) =>
    eq(v.length, 5)
  )
)
// tests the leading option with wait time not in the leading edge of the timeout
t(({ eq }) =>
  run(opThrottle(add, 26, { trailing: false, leading: true }), 16, 4).then((v) =>
    eq(v.length, 2)
  )
)
// tests with both options false
t(({ eq }) =>
  run(opThrottle(add, 10, { trailing: false, leading: false }), 5, 2).then((v) =>
    eq(v.length, 0)
  )
)
// tests with both options true
t(({ eq }) =>
  run(opThrottle(add, 26, { trailing: true, leading: true }), 16, 4).then((v) =>
    eq(v.length, 2)
  )
)

Object.freeze(tests)
