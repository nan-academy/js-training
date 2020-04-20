/*
## Do-Your-Own-Filter

### Instructions

1) Create a `Filter` function that takes an array as first argument, a function as second,
and that works like the method .filter

The use of `filter` is forbidden for this exercise

2) Create a `Reject` function that takes an array as first argument, a function as second,
and that works like the reject function from lodash.

3) Create a `Partition` function that takes an array as first argument, a function as second,
and that works like the partition function from lodash.

### Notions

-filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
-reject
https://lodash.com/docs/4.17.15#reject
-partition
https://lodash.com/docs/4.17.15#partition

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

t(({ eq }) => eq(Reject(arr1, check1), [-95, 15, 3, 5, 33, 45]))
t(({ eq }) => eq(Reject(arr1, check2), [10, -10, 20, -95, 86, 2, 5, 32, 950]))
t(({ eq }) => eq(Reject(arr1, check3), [86, 2, 3, 32, 33, 66]))
t(({ eq }) => eq(Reject(arr1, check4), [-95, 15, 86, 2, 3, 5, 32, 33, 45, 66]))
t(({ eq }) =>
  eq(Reject(arr1, check5), [10, -10, 20, -95, 15, 86, 2, 3, 5, 32, 33, 45, 950])
)
t(({ eq }) =>
  eq(Reject(arr1, check9), [10, -10, 20, -95, 86, 2, 3, 5, 32, 33, 950, 66])
)
t(({ eq }) => eq(Reject(arr1, check10), [-95, 15, 86, 2, 3, 5, 32, 33, 45, 66]))

t(({ eq }) =>
  eq(Partition(arr1, check6), [
    [10, -10, 20, 450, 950, 150],
    [-95, 15, 86, 2, 3, 5, 32, 33, 45, 66],
  ])
)

t(({ eq }) =>
  eq(Partition(arr1, check9), [
    [15, 45, 450, 150],
    [10, -10, 20, -95, 86, 2, 3, 5, 32, 33, 950, 66],
  ])
)
t(({ eq }) =>
  eq(Partition(arr1, check10), [
    [10, -10, 20, 450, 950, 150],
    [-95, 15, 86, 2, 3, 5, 32, 33, 45, 66],
  ])
)

/// those are random tests.
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
