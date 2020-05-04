/*
## Do-Your-Own-Filter

### Instructions

1) Create a `Filter` function that takes an array as first argument, a function as second,
and that works like the method [].filter

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
Array.prototype.filter = undefined
///*/ // ⚡

///*/// ⚡

let arr1 = [10, -10, 20, -95, 15, 86, 2, 3, 5, 32, 33, 45, 450, 950, 66, 150]
let arr2 = [
  1,
  2,
  4,
  8,
  'hello',
  12,
  -10,
  ['how', 'are', 'the', 2],
  'of',
  ['iu', 2],
  'well',
  2,
  65,
  'good',
  2,
  2678,
  'be',
  true,
]

export const tests = []
const t = (f) => tests.push(f)

const check1 = (el) => el % 2 === 0
const check2 = (el, i) => el % 3 === 0 && i % 2 === 0
const check3 = (el) => Array.isArray(el)
const check4 = (el, i, arr) =>
  typeof el !== 'number' && i % 2 !== 0 && arr.includes(true)
const check5 = (el, i) =>
  (typeof el === 'number' || typeof el === 'boolean') && i > 5

// Filter

t(({ eq }) =>
  eq(Filter(arr1, check1), [10, -10, 20, 86, 2, 32, 450, 950, 66, 150])
)
t(({ eq }) => eq(Filter(arr1, check2), [15, 33, 450, 66]))
t(({ eq }) =>
  eq(Filter(arr2, check3), [
    ['how', 'are', 'the', 2],
    ['iu', 2],
  ])
)
t(({ eq }) =>
  eq(Filter(arr2, check4), [['how', 'are', 'the', 2], ['iu', 2], 'good', true])
)
t(({ eq }) => eq(Filter(arr2, check5), [-10, 2, 65, 2, 2678, true]))

// Reject

t(({ eq }) => eq(Reject(arr1, check1), [-95, 15, 3, 5, 33, 45]))
t(({ eq }) =>
  eq(Reject(arr1, check2), [10, -10, 20, -95, 86, 2, 3, 5, 32, 45, 950, 150])
)
t(({ eq }) =>
  eq(Reject(arr2, check3), [
    1,
    2,
    4,
    8,
    'hello',
    12,
    -10,
    'of',
    'well',
    2,
    65,
    'good',
    2,
    2678,
    'be',
    true,
  ])
)

t(({ eq }) =>
  eq(Reject(arr2, check4), [
    1,
    2,
    4,
    8,
    'hello',
    12,
    -10,
    'of',
    'well',
    2,
    65,
    2,
    2678,
    'be',
  ])
)
t(({ eq }) =>
  eq(Reject(arr2, check5), [
    1,
    2,
    4,
    8,
    'hello',
    12,
    ['how', 'are', 'the', 2],
    'of',
    ['iu', 2],
    'well',
    'good',
    'be',
  ])
)

// // Partition

t(({ eq }) =>
  eq(Partition(arr1, check1), [
    [10, -10, 20, 86, 2, 32, 450, 950, 66, 150],
    [-95, 15, 3, 5, 33, 45],
  ])
)
t(({ eq }) =>
  eq(Partition(arr1, check2), [
    [15, 33, 450, 66],
    [10, -10, 20, -95, 86, 2, 3, 5, 32, 45, 950, 150],
  ])
)
t(({ eq }) =>
  eq(Partition(arr2, check3), [
    [
      ['how', 'are', 'the', 2],
      ['iu', 2],
    ],
    [
      1,
      2,
      4,
      8,
      'hello',
      12,
      -10,
      'of',
      'well',
      2,
      65,
      'good',
      2,
      2678,
      'be',
      true,
    ],
  ])
)
t(({ eq }) =>
  eq(Partition(arr2, check4), [
    [['how', 'are', 'the', 2], ['iu', 2], 'good', true],
    [1, 2, 4, 8, 'hello', 12, -10, 'of', 'well', 2, 65, 2, 2678, 'be'],
  ])
)
t(({ eq }) =>
  eq(Partition(arr2, check5), [
    [-10, 2, 65, 2, 2678, true],
    [
      1,
      2,
      4,
      8,
      'hello',
      12,
      ['how', 'are', 'the', 2],
      'of',
      ['iu', 2],
      'well',
      'good',
      'be',
    ],
  ])
)

t(({ code }) => !code.includes('filter'))

Object.freeze(tests)
