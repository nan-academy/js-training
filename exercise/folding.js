/*
## Folding
### Instructions
Create three functions:
- `fold` that receives an array, a function and an accumulator, in this order,
and applies the function in the elements of the array starting on the left.
- `foldr` that receives an array, a function and an accumulator, in this order,
and applies the function in the elements of the array starting on the right.
- `reducingArray` that works just like the method [].reduce. The arguments
should be a function, an array and finally the accumulator if any.
The accumulator in the three exercises is the starting value of the result.
Example:
const adder = (a,b) => a + b
fold([1,2,3], adder, 2) //returns 8 (2 + 1 + 2 + 3)
foldr([1,2,3], adder, 2) //returns 8 (2 + 3 + 2 + 1)
The use of `reduce` and `reduceRight` is forbidden for this exercise.
*/
Array.prototype.reduce = undefined
Array.prototype.reduceRight = undefined
// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)


const arr = [3, 10, 26, 0]
const arr1 = [4, 24, 10, 25]
Object.freeze(arr)
Object.freeze(arr1)

const adder = (a, b) => a + b
const multiplier = (a, b) => a * b
const ifOdd = (a, b) => (b % 2 === 0 ? a + 1 : a - 1)

t(({ eq }) => eq(fold(arr, adder, 0), 39))
t(({ eq }) => eq(fold(arr, multiplier, 0), 0))
t(({ eq }) => eq(fold(arr, ifOdd, 0), 2))
t(({ eq }) => eq(fold(arr, adder, 4), 43))
t(({ eq }) => eq(fold(arr, multiplier, 5), 0))
t(({ eq }) => eq(fold(arr, ifOdd, 10), 12))

t(({ eq }) => eq(foldr(arr, adder, 0), 39))
t(({ eq }) => eq(foldr(arr, multiplier, 0), 0))
t(({ eq }) => eq(foldr(arr, ifOdd, 0), 2))
t(({ eq }) => eq(foldr(arr, adder, 4), 43))
t(({ eq }) => eq(foldr(arr, multiplier, 5), 0))
t(({ eq }) => eq(foldr(arr, ifOdd, 10), 12))

const strArr1 = ['This ', 'is ', 'a ', 'simple', 'example']
const strArr2 = 'The quick brown fox jumped over the lazy dog'
  .split(' ')
  .map((x) => (x += ' '))
const objArr = [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }]
Object.freeze(strArr1)
Object.freeze(strArr2)
Object.freeze(objArr)

const concatenate = (a = '', b) => a.concat(b)
const merger = (a, b) => ({ ...a, ...b })

t(({ eq }) => eq(reducingArray(adder, arr), 39))
t(({ eq }) => eq(reducingArray(adder, arr1), 63))
t(({ eq }) =>
  eq(reducingArray(concatenate, strArr1), 'This is a simpleexample')
)
t(({ eq }) =>
  eq(
    reducingArray(concatenate, strArr2),
    'The quick brown fox jumped over the lazy dog '
  )
)
t(({ eq }) =>
  eq(reducingArray(merger, objArr), {
    a: 12,
    b: 6,
    c: { d: 2, e: 3 },
    f: 'hello',
  })
)

t(({ eq }) => eq(reducingArray(adder, arr, 5), 44))
t(({ eq }) => eq(reducingArray(adder, arr1, 9), 72))
t(({ eq }) =>
  eq(
    reducingArray(concatenate, strArr1, ' right?'),
    ' right?This is a simpleexample'
  )
)
t(({ eq }) =>
  eq(
    reducingArray(concatenate, strArr2, ' The end'),
    ' The endThe quick brown fox jumped over the lazy dog '
  )
)
t(({ eq }) =>
  eq(reducingArray(merger, objArr, { ending: 3 }), {
    ending: 3,
    a: 12,
    b: 6,
    c: { d: 2, e: 3 },
    f: 'hello',
  })
)
Object.freeze(tests)
