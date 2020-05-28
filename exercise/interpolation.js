/*
## interpolation

### Instructions

Create a function called `interpolation` that has as parameters `step`, `start`, `end`, `callback` and `duration`.
This function must calculate the interpolation points, (x, y), from the `start` position to `end` position depending
on the number of `steps`. All the points must be calculated in the duration time.

For each interpolation point you must execute and pass as parameters to the callback the interpolation point ([x, y])

### Example

steps = 5
start = 0
end = 1
duration = 10

   t
   |
10 |___________________. <- execute callback([1.0, 10])
   |                   |
   |                   |
 8 |_______________.   |
   |               |   |
   |               |   |
 6 |___________.   |   |
   |           |   |   |
   |           |   |   |
 4 |_______.   |   |   |
   |       |   |   |   |
   |       |   |   |   |
 2 |___.   |   |   |   |
   |   |   |   |   |   |
   |___|___|___|___|___|__d
   0  0.2 0.4 0.6 0.8  1

### Notions

- https://javascript.info/settimeout-setinterval

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const add = (el, arr) => arr.push(el)
const run = async (step, start, end, duration, waitTime, wait) => {
  let arr = []
  interpolation(step, start, end, (ele) => add(ele, arr), duration)
  await wait(waitTime)
  return arr
}

// testing duration time, forbid loops
t(async ({ eq, wait }) => eq((await run(5, 0, 4, 25, 14, wait)).length, 2))

// testing duration time stamp
t(async ({ eq }) => {
  let arr = []
  interpolation(5, 0, 4, (ele) => add(ele, arr), 10)
  return eq(arr.length, 0)
})

// testing the amount of times the callback was called
t(async ({ eq, wait }) => eq((await run(5, 0, 1, 10, 15, wait)).length, 5))

// testing the interpolation points
t(async ({ eq, wait }) =>
  eq(await run(5, 0, 1, 10, 15, wait), [
    [0, 2],
    [0.2, 4],
    [0.4, 6],
    [0.6, 8],
    [0.8, 10],
  ])
)

// testing with different values
t(async ({ eq, wait }) =>
  eq(await run(3, 1, 2, 10, 15, wait), [
    [1, 3.33],
    [1.33, 6.66],
    [1.67, 9.99],
  ])
)

// testing with `duration` inferior to `step`
t(async ({ eq, wait }) =>
  eq(await run(10, 2, 6, 4, 15, wait), [
    [2, 0.4],
    [2.4, 0.8],
    [2.8, 1.2],
    [3.2, 1.6],
    [3.6, 2],
    [4, 2.4],
    [4.4, 2.8],
    [4.8, 3.2],
    [5.2, 3.6],
    [5.6, 4],
  ])
)

// testing with `start` superior to `end`
// inverted straight line
t(async ({ eq, wait }) =>
  eq(await run(5, 6, 2, 6, 10, wait), [
    [6, 1.2],
    [5.2, 2.4],
    [4.4, 3.6],
    [3.6, 4.8],
    [2.8, 6],
  ])
)

Object.freeze(tests)
