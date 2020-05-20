/*
## throttling

### Instructions

The objective of this exercise is to learn about `callbacks` and `setTimeout` for this
you will have to create a function called `throttle` that works like the a normal throttle,
just like `_.throttle` from lodash.

Create 2 functions to be used as callbacks:
- 
- 

### Notions

- https://lodash.com/docs/4.17.15#throttle


// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const run = (callback, f, limit, callLimit, nbr) =>
  new Promise((r) => {
    let a = []
    let inter = setInterval(() => a.push(callback(f, limit)), callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(a)
    }, callLimit * nbr)
  })

t(({ eq }) =>
  run(throttle, call, 500, 250, 4).then((v) => {
    console.log(v)
    return eq(v.filter((x) => x !== undefined).length, 2)
  })
)

Object.freeze(tests)
