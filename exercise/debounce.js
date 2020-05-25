/*
## debouncing

### Instructions

The objective of this exercise is to learn about `callbacks` and `setTimeout` for this
you will have to create a function called `debounce` that works like `_.debounce` from lodash.

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
const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => callback(arr, 1), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr)
    }, callLimit * nbr)
  })

// test with debounce wait limit inferior to wait time call (how much time we wait to the function be called again)
// (20 < 30)
t(({ eq }) => run(debounce(add, 10), 20, 5).then((v) => eq(v.length, 4)))

// testing with wait limit superior to wait time call
// execution on the trailing edge, after wait limit has elapsed
t(({ eq }) => run(debounce(add, 20), 10, 5).then((v) => eq(v.length, 0)))

// trailing edge as true
t(({ eq }) =>
  run(debounce(add, 20, { leading: false, trailing: true }), 10, 5).then((v) =>
    eq(v.length, 0)
  )
)

// leading edge as true
t(({ eq }) =>
  run(debounce(add, 20, { leading: true, trailing: false }), 10, 5).then((v) =>
    eq(v.length, 1)
  )
)

// trailing and leading as true
t(({ eq }) =>
  run(debounce(add, 20, { leading: true, trailing: true }), 10, 5).then((v) =>
    eq(v.length, 1)
  )
)

// trailing and leading as false
t(({ eq }) =>
  run(debounce(add, 20, { leading: false, trailing: false }), 10, 5).then((v) =>
    eq(v.length, 0)
  )
)

Object.freeze(tests)
