/*
## Do-Your-Own-Map

### Instructions

1) Create a `map` function that takes an array as first argument, a function as second,
and that works like the method .map

2) Create a `flatMap` function that takes an array as first argument, a function as second,
and that works like the method .flatMap

### Notions

- Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

- FlatMap

*/
Array.prototype.map = undefined
Array.prototype.flatMap = undefined

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

let arr1 = [10, -10, 20, -95, 86, 102, 35, 89, 110]
let arr2 = [[10], -10, 20, -95, 86, [102], [35, 89], 110]
let arr3 = [[5], [4], [-3], [20], [17], [-33], [-4], [18]]

Object.freeze(arr1)
Object.freeze(arr2)
Object.freeze(arr3)

const add1 = (el) => el + 1
const mult2 = (el) => el * 2
const sub3 = (el) => el - 3

const doAll = (el) => sub3(mult2(add1(el)))
const posValsIndex = (el, i) => (el >= 0 ? `${i}: ${el}` : null)
const indexValsArray = (el, i, arr) => `${el} is at index: ${i} of array ${arr}`

// Map

t(({ eq }) => eq(map(arr1, add1), [11, -9, 21, -94, 87, 103, 36, 90, 111]))
t(({ eq }) => eq(map(arr1, mult2), [20, -20, 40, -190, 172, 204, 70, 178, 220]))
t(({ eq }) => eq(map(arr1, sub3), [7, -13, 17, -98, 83, 99, 32, 86, 107]))
t(({ eq }) => eq(map(arr1, doAll), [19, -21, 39, -191, 171, 203, 69, 177, 219]))

t(({ eq }) =>
  eq(map(arr1, posValsIndex), [
    '0: 10',
    null,
    '2: 20',
    null,
    '4: 86',
    '5: 102',
    '6: 35',
    '7: 89',
    '8: 110',
  ])
)

t(({ eq }) =>
  eq(map(arr1, indexValsArray), [
    '10 is at index: 0 of array 10,-10,20,-95,86,102,35,89,110',
    '-10 is at index: 1 of array 10,-10,20,-95,86,102,35,89,110',
    '20 is at index: 2 of array 10,-10,20,-95,86,102,35,89,110',
    '-95 is at index: 3 of array 10,-10,20,-95,86,102,35,89,110',
    '86 is at index: 4 of array 10,-10,20,-95,86,102,35,89,110',
    '102 is at index: 5 of array 10,-10,20,-95,86,102,35,89,110',
    '35 is at index: 6 of array 10,-10,20,-95,86,102,35,89,110',
    '89 is at index: 7 of array 10,-10,20,-95,86,102,35,89,110',
    '110 is at index: 8 of array 10,-10,20,-95,86,102,35,89,110',
  ])
)

//flatMap

t(({ eq }) =>
  eq(flatMap(arr2, add1), ['101', -9, 21, -94, 87, '1021', '35,891', 111])
)

t(({ eq }) =>
  eq(flatMap(arr2, posValsIndex), [
    '0: 10',
    null,
    '2: 20',
    null,
    '4: 86',
    '5: 102',
    null,
    '7: 110',
  ])
)

t(({ eq }) =>
  eq(flatMap(arr3, indexValsArray), [
    '5 is at index: 0 of array 5,4,-3,20,17,-33,-4,18',
    '4 is at index: 1 of array 5,4,-3,20,17,-33,-4,18',
    '-3 is at index: 2 of array 5,4,-3,20,17,-33,-4,18',
    '20 is at index: 3 of array 5,4,-3,20,17,-33,-4,18',
    '17 is at index: 4 of array 5,4,-3,20,17,-33,-4,18',
    '-33 is at index: 5 of array 5,4,-3,20,17,-33,-4,18',
    '-4 is at index: 6 of array 5,4,-3,20,17,-33,-4,18',
    '18 is at index: 7 of array 5,4,-3,20,17,-33,-4,18',
  ])
)

Object.freeze(tests)
