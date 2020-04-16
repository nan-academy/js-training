/*
## Do-Your-Own-Filter

### Instructions

Create a Filter function that takes an array as first argument, a function as second,
and that works like the method .filter

The use of `filter` is forbidden for this exercise

### Notions

-filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

*/

///*/ // ⚡

///*/// ⚡

let arr1 = [10, -10, 20, -95, 15, 86, 2, 3, 5, 32, 33, 45, 450, 950, 66, 150]

let arrRandom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 20; i++) {
  let value = Math.round(Math.random() * 1000 - 1000)
  arrRandom1.push(value)
}

const check1 = (el) => el % 2 === 0
const check2 = (el) => el % 3 === 0
const check3 = (el) => el % 5 === 0
const check4 = (el) => el % 10 === 0
const check5 = (el) => el % 2 === 0 && el % 3 === 0
const check6 = (el) => el % 5 === 0 && el % 10 === 0
const check7 = (el) => el % 2 === 0 && el % 5 === 0
const check8 = (el) => el % 2 === 0 && el % 10 === 0
const check9 = (el) => el % 3 === 0 && el % 5 === 0
const check10 = (el) => el % 5 === 0 && el % 10 === 0

let arrFunctions = [...Array(10).keys()].map((el) => eval(`check${el + 1}`))

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

let randomArrFunctions = [...Array(5)].map(() => arrFunctions[getRandomInt(10)])

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(Filter(arr1, check1), arr1.filter(check1)))
t(({ eq }) => eq(Filter(arr1, check2), arr1.filter(check2)))
t(({ eq }) => eq(Filter(arr1, check3), arr1.filter(check3)))
t(({ eq }) => eq(Filter(arr1, check4), arr1.filter(check4)))
t(({ eq }) => eq(Filter(arr1, check5), arr1.filter(check5)))
t(({ eq }) => eq(Filter(arr1, check6), arr1.filter(check6)))
t(({ eq }) => eq(Filter(arr1, check7), arr1.filter(check7)))
t(({ eq }) => eq(Filter(arr1, check8), arr1.filter(check8)))
t(({ eq }) => eq(Filter(arr1, check9), arr1.filter(check9)))
t(({ eq }) => eq(Filter(arr1, check10), arr1.filter(check10)))

t(({ eq }) =>
  eq(
    Filter(arrRandom1, randomArrFunctions[0]),
    arrRandom1.filter(randomArrFunctions[0])
  )
)

t(({ eq }) =>
  eq(
    Filter(arrRandom1, randomArrFunctions[1]),
    arrRandom1.filter(randomArrFunctions[1])
  )
)

t(({ eq }) =>
  eq(
    Filter(arrRandom1, randomArrFunctions[2]),
    arrRandom1.filter(randomArrFunctions[2])
  )
)
t(({ eq }) =>
  eq(
    Filter(arrRandom1, randomArrFunctions[3]),
    arrRandom1.filter(randomArrFunctions[3])
  )
)
t(({ eq }) =>
  eq(
    Filter(arrRandom1, randomArrFunctions[4]),
    arrRandom1.filter(randomArrFunctions[4])
  )
)

t(({ code }) => !code.includes('filter'))

Object.freeze(tests)
