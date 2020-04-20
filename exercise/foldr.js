/*
## Foldr

### Instructions

Create the function `foldr` that receives a function, an accumulator and an
array and applies the function in the elements of the array
starting on the right. The accumulator is the starting value of the result.

Example:
const adder = (a,b) => a + b
foldr(adder,2,[1,2,3]) //returns 8 (2 + 3 + 2 + 1)

The use of `reduce` is forbidden for this exercise.

*/
///*/// ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

const res = (fun, acc, arr) => arr.reduceRight(fun, acc)
const arr = [3, 10, 26, 0]
const randArr = [...new Array(10)].map(() => Math.round(Math.random() * 10))

const adder = (a, b) => a + b
const multiplier = (a, b) => a * b
const ifOdd = (a, b) => (b % 2 === 0 ? a++ : a--)

t(() => foldr(adder, 0, randArr) === res(adder, 0, randArr))
t(() => foldr(multiplier, 0, arr) === res(multiplier, 0, arr))
t(() => foldr(ifOdd, 0, arr) === res(ifOdd, 0, arr))
t(() => foldr(adder, 7, randArr) === res(adder, 7, randArr))
t(() => foldr(multiplier, 5, arr) === res(multiplier, 5, arr))
t(() => foldr(ifOdd, 10, arr) === res(ifOdd, 10, arr))

const funcs = [adder, multiplier, ifOdd]

for (let i = 0; i < 5; i++) {
  let fun = funcs[Math.round(Math.random() * 2)]
  let nbr = Math.round(Math.random() * 10)
  t(() => foldr(fun, nbr, randArr) === res(fun, nbr, randArr))
}

t(({ code }) => !code.includes('reduce'))

Object.freeze(tests)
