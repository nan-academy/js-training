/*
## interpolation

### Instructions

Create a function called `interpolation` that has as parameter `step`, `start`, `end`, `callback` and `duration`.
This function must calculate the interpolation points, (x, y), from the `start` position to `end` position depending
on the number of `steps`. All the point must be calculated in the duration time.

For each interpolation point you must execute and pass as parameter to the callback the interpolation point ([x, y])

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

- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval


// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const add = (el, arr) => arr.push(el)

// testing the amount of times the callback was called
t(async ({ eq, wait }) => {
  let arr = []
  interpolation(5, 0, 1, (ele) => add(ele, arr), 10)
  await wait(15)
  return eq(arr.length, 5)
})

// testing the interpolation points
t(async ({ eq, wait }) => {
  let arr = []
  interpolation(5, 0, 1, (ele) => add(ele, arr), 10)
  await wait(15)
  return eq(arr, [
    [0, 2],
    [0.2, 4],
    [0.4, 6],
    [0.6, 8],
    [0.8, 10],
  ])
})

// testing with different values
t(async ({ eq, wait }) => {
  let arr = []
  interpolation(3, 1, 2, (ele) => add(ele, arr), 10)
  await wait(15)
  return eq(arr, [
    [1, 3.33],
    [1.33, 6.66],
    [1.67, 9.99],
  ])
})

// testing with `duration` inferior to `step`
t(async ({ eq, wait }) => {
  let arr = []
  interpolation(10, 2, 6, (ele) => add(ele, arr), 4)
  await wait(15)
  return eq(arr, [
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
})

// testing with `start` superior to `end`
// inverted straight
t(async ({ eq, wait }) => {
  let arr = []
  interpolation(5, 6, 2, (ele) => add(ele, arr), 6)
  await wait(15)
  return eq(arr, [
    [6, 1.2],
    [5.2, 2.4],
    [4.4, 3.6],
    [3.6, 4.8],
    [2.8, 6],
  ])
})

Object.freeze(tests)
