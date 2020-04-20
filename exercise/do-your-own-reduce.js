/*
## Do your own reduce

### Instructions

Create the function `Reduce` that receives a function and an array
and works just like the method [].reduce.

The use of `[].reduce` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 10, 31, 7]
const randArr = [...new Array(10)].map(() => Math.round(Math.random() * 15))

const adder = (a, b) => a + b
const multiplier = (a, b) => a * b

t(() => Reduce(adder, arr1) === arr1.reduce(adder))
t(() => Reduce(multiplier, arr1) === arr1.reduce(multiplier))

t(() => Reduce(adder, arr2) === arr2.reduce(adder))
t(() => Reduce(multiplier, arr2) === arr2.reduce(multiplier))

t(() => Reduce(adder, randArr) === randArr.reduce(adder))
t(() => Reduce(multiplier, randArr) === randArr.reduce(multiplier))

t(({ code }) => !code.includes('reduce'))
