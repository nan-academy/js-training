/*
## Do-Your-Own-Map

### Instructions

Create a map function that takes an array as first argument, a function as second,
and that works like the method .map

The use of `map` is forbidden for this exercise

### Notions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- Map
*/

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = f => tests.push(f)

let arr1 = [10, -10, 20, -95, 86]

const add1 = el => el + 1
const mult2 = el => el * 2
const sub3 = el => el - 3

const doAll = el => sub3(mult2(add1(el)))

let arr2 = arr1.map(el => doAll(el))

let arrRandom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 10; i++) {
  let value = Math.round(Math.random() * (10 - -10 - 10))
  arrRandom1.push(value)
}

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const randomInt1 = getRandomInt(100)
const randomInt2 = getRandomInt(100)
const randomInt3 = getRandomInt(100)

const addRandom = el => el + randomInt1
const subRandom = el => el - randomInt2
const multRandom = el => el * randomInt3

let arrFunctions = [addRandom, subRandom, multRandom]

let randomArrFunctions = [...Array(5)].map(() => arrFunctions[getRandomInt(3)])

const randomFunc = el => {
  for (let i = 0; i < 5; i++) el = randomArrFunctions[i](el)
  return el
}

t(() => arr2[0] === doAll(arr1[0]))
t(() => arr2[1] === doAll(arr1[1]))
t(() => arr2[2] === doAll(arr1[2]))
t(() => arr2[3] === doAll(arr1[3]))
t(() => arr2[4] === doAll(arr1[4]))

t(({ eq }) =>
  eq(
    map(arr1, el => doAll(el)),
    arr1.map(el => doAll(el))
  )
)

t(({ eq }) =>
  eq(
    map(arrRandom1, el => randomFunc(el)),
    arrRandom1.map(el => randomFunc(el))
  )
)

t(({ code }) => !code.includes('map'))

Object.freeze(tests)
