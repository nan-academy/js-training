/*
## throttling

### Instructions

The objective of this exercise is to learn about `callbacks` and `setTimeout` for this
you will have to create a function called `throttle` that works like the a normal throttle,
just like `_.throttle` from lodash.


### Notions

- https://lodash.com/docs/4.17.15#throttle


// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const call = () => console.log('get me a drink')
const callArgs = (str) => console.log(str)

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
  run(throttle, call, 20, 10, 4).then((v) =>{
    console.log(v)
    return eq(v.filter((x) => x !== undefined).length, 2)
  }
    // eq(v.filter((x) => x !== undefined).length, 2)
  )
)
// t(({ eq }) =>
//   run(throttle, call, 20, 10, 10).then((v) => {
//     console.log(v)
//     return eq(v.filter((x) => x !== undefined).length, 5)
//   })
// )

Object.freeze(tests)
