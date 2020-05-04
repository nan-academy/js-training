/*
## ForEach

### Instructions

1) Create a function `double` that takes an array as argument and double its values.
The function will return `undefined`

2) Create a function `alphabet` that takes an array as argument and that switch
the numbers of this array to their match in the roman alphabet
example : 1 -> 'a'

If there is no match, the element has`1` added or concatenated to it
(depending on its type).

The function will return `undefined`

3) Create a function 'doubleTrouble' that takes an array in argument
and which :

if the element of the array is a number, doubles it, and puts it
in an array along with its initial value.

example: [1, 4] -> [[1, 2], [4, 8]]

if the element of the array is an array of number, it doubles the
last value of that array and puts it along in the same array.

example: [[1, 4, 10]] -> [[1 , 4, 10, 20]]

### Notions

- forEach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

// Monkey patching forEach

export const setup = () => {
  const forEachCalls = []
  const _forEach = Array.prototype.forEach
  Array.prototype.forEach = function () {
    forEachCalls.push(this)
    return _forEach.apply(this, arguments)
  }
  return { forEachCalls }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 65, -100, 201, -950, 1086]
let arr2 = [...Array(30).keys()]
let arr3 = [1, 2, 3, 4, [5, 6], [7, 8, 9], [10]]

// tests with arr1 and double

t(({ eq }) => eq(double(arr1), undefined))
t(({ eq }) => eq(arr1[1], 4))
t(({ eq }) => eq(arr1[2], 6))
t(({ eq }) => eq(arr1[7], 16))
t(({ eq }) => eq(arr1[11], -200))
t(({ eq }) => eq(arr1[12], 402))

t(({ eq }) => eq(double(arr1), undefined))
t(({ eq }) => eq(arr1[1], 8))
t(({ eq }) => eq(arr1[2], 12))
t(({ eq }) => eq(arr1[7], 32))
t(({ eq }) => eq(arr1[11], -400))
t(({ eq }) => eq(arr1[12], 804))

// this one checks that the method [].forEach() has been called with arr1
t(({ eq, ctx }) => eq(ctx.forEachCalls[ctx.forEachCalls.length - 1], arr1))

// test with arr2 and alphabet

t(({ eq }) => eq(alphabet(arr2), undefined))
t(({ eq }) => eq(arr2[0], 1))
t(({ eq }) => eq(arr2[1], 'a'))
t(({ eq }) => eq(arr2[2], 'b'))
t(({ eq }) => eq(arr2[7], 'g'))
t(({ eq }) => eq(arr2[26], 'z'))
t(({ eq }) => eq(arr2[27], 28))

t(({ eq }) => eq(alphabet(arr2), undefined))
t(({ eq }) => eq(arr2[0], 'a'))
t(({ eq }) => eq(arr2[1], 'a1'))
t(({ eq }) => eq(arr2[2], 'b1'))
t(({ eq }) => eq(arr2[7], 'g1'))
t(({ eq }) => eq(arr2[26], 'z1'))
t(({ eq }) => eq(arr2[27], 29))

t(({ eq }) => eq(alphabet(arr2), undefined))
t(({ eq }) => eq(arr2[0], 'a1'))
t(({ eq }) => eq(arr2[1], 'a11'))
t(({ eq }) => eq(arr2[2], 'b11'))
t(({ eq }) => eq(arr2[7], 'g11'))
t(({ eq }) => eq(arr2[26], 'z11'))
t(({ eq }) => eq(arr2[27], 30))

t(({ eq, ctx }) => eq(ctx.forEachCalls[ctx.forEachCalls.length - 1], arr2))

//test with arr3 and doubleTrouble

t(({ eq }) => eq(doubleTrouble(arr3), undefined))
t(({ eq }) => eq(arr3[0], [1, 2]))
t(({ eq }) => eq(arr3[1], [2, 4]))
t(({ eq }) => eq(arr3[4], [5, 6, 12]))
t(({ eq }) => eq(arr3[5], [7, 8, 9, 18]))
t(({ eq }) => eq(arr3[6], [10, 20]))

t(({ eq }) => eq(doubleTrouble(arr3), undefined))
t(({ eq }) => eq(arr3[0], [1, 2, 4]))
t(({ eq }) => eq(arr3[1], [2, 4, 8]))
t(({ eq }) => eq(arr3[4], [5, 6, 12, 24]))
t(({ eq }) => eq(arr3[5], [7, 8, 9, 18, 36]))
t(({ eq }) => eq(arr3[6], [10, 20, 40]))

Object.freeze(tests)
