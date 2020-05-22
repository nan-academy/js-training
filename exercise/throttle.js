/*
## throttling

### Instructions

The objective of this exercise is to learn about `callbacks` and `setTimeout` for this
you will have to create a function called `throttle` that works like `_.throttle` from lodash.

### Notions

- https://lodash.com/docs/4.17.15#throttle


// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

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

// wait 26ms and execute 4 times every 16ms
t(({ eq }) => run(throttle(add, 26), 16, 4).then((v) => eq(v.length, 2)))
// tests the trailing option
t(({ eq }) =>
  run(throttle(add, 26, { trailing: true, leading: false }), 16, 4).then((v) =>
    eq(v.length, 1)
  )
)
// tests the leading option with wait time in the leading edge of the timeout
t(({ eq }) =>
  run(throttle(add, 15, { trailing: false, leading: true }), 10, 10).then((v) =>
    eq(v.length, 5)
  )
)
// tests the leading option with wait time not in the leading edge of the timeout
t(({ eq }) =>
  run(throttle(add, 26, { trailing: false, leading: true }), 16, 4).then((v) =>
    eq(v.length, 2)
  )
)
// tests with both options false
t(({ eq }) =>
  run(throttle(add, 10, { trailing: false, leading: false }), 5, 2).then((v) =>
    eq(v.length, 0)
  )
)
// tests with both options true
t(({ eq }) =>
  run(throttle(add, 26, { trailing: true, leading: true }), 16, 4).then((v) =>
    eq(v.length, 2)
  )
)

Object.freeze(tests)
