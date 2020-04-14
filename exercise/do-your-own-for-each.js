/*
## Do-Your-Own-For-Each

### Instructions

Create a `ForEach` function that takes an array as first argument, a function as second,
and that works like the method .forEach

The use of `forEach` is forbidden for this exercise

### Notions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

- forEach
*/

///*/ // ⚡

///*/// ⚡

let arr1 = [10, -10, 20, -95, 86]
let arr2 = []
let arr3 = []

const add1 = (el) => el + 1
const mult2 = (el) => el * 2
const sub3 = (el) => el - 3

const doAll = (el) => sub3(mult2(add1(el)))

let arrRandom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 10; i++) {
  let value = Math.round(Math.random() * (10 - -10 - 10))
  arrRandom1.push(value)
}

let arrRandom2 = []
let arrRandom3 = []

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const randomInt1 = getRandomInt(100)
const randomInt2 = getRandomInt(100)
const randomInt3 = getRandomInt(100)

const addRandom = (el) => el + randomInt1
const subRandom = (el) => el - randomInt2
const multRandom = (el) => el * randomInt3

let arrFunctions = [addRandom, subRandom, multRandom]

let randomArrFunctions = [...Array(5)].map(() => arrFunctions[getRandomInt(3)])

const randomFunc = (el) => {
  for (let i = 0; i < 5; i++) el = randomArrFunctions[i](el)
  return el
}

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => {
  arr1.forEach((el) => arr3.push(doAll(el)))
  ForEach(arr1, (el) => arr2.push(doAll(el)))
  return eq(arr2, arr3)
})

t(({ eq }) => {
  arrRandom1.forEach((el) => arrRandom3.push(randomFunc(el)))
  ForEach(arrRandom1, (el) => arrRandom2.push(randomFunc(el)))
  return eq(arrRandom2, arrRandom3)
})

t(({ eq }) =>
  eq(
    ForEach(arr1, (el) => arr2.push(doAll(el))),
    arr1.forEach((el) => arr3.push(doAll(el)))
  )
)

t(({ eq }) =>
  eq(
    ForEach(arrRandom1, (el) => arrRandom2.push(randomFunc(el))),
    arrRandom1.forEach((el) => arrRandom3.push(randomFunc(el)))
  )
)

t(({ code }) => !code.includes('forEach'))

Object.freeze(tests)
