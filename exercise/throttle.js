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

let arr = []
const add = (el) => arr.push(el)

const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let inter = setInterval(() => callback(1), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr)
    }, callLimit * nbr)
  })

// wait 26ms and execute 4 times every 16ms
t(({ eq }) =>
  run(throttle(add, 26), 16, 4).then((v) => eq(v.length, 2) && (arr = []))
)
// wait 26ms and execute 6 times every 16ms
t(({ eq }) =>
  run(throttle(add, 26), 16, 6).then((v) => eq(v.length, 3) && (arr = []))
)
// tests the trailing option
t(({ eq }) =>
  run(throttle(add, 26, { trailing: true, leading: false }), 16, 4).then(
    (v) => eq(v.length, 1) && (arr = [])
  )
)
// tests the leading option
t(({ eq }) =>
  run(throttle(add, 26, { trailing: false, leading: true }), 16, 4).then(
    (v) => eq(v.length, 1) && (arr = [])
  )
)
// tests with different time 10 times
t(({ eq }) =>
  run(throttle(add, 30), 20, 10).then(
    (v) => eq(v.length, 6) && (arr = [])
  )
)
// tests with both options false
t(({ eq }) =>
  run(throttle(add, 26, { trailing: false, leading: false }), 16, 2).then(
    (v) => eq(v.length, 0) && (arr = [])
  )
)
// tests with both options true
t(({ eq }) =>
  run(throttle(add, 26, { trailing: true, leading: true }), 16, 4).then(
    (v) => eq(v.length, 2) && (arr = [])
  )
)

Object.freeze(tests)
