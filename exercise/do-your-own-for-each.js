/*
## Do-Your-Own-For-Each

### Instructions

Create a `ForEach` function that takes an array as first argument, a function as second,
and that works like the method .forEach

The use of `forEach` is forbidden for this exercise

### Notions

- forEach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

*/
Array.prototype.forEach = undefined
///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, 20, -95, 86, 32]

const double = (el, i, arr) => (arr[i] = el * 2)
const decuple = (el, i, arr) => (arr[i] = el * 10)
const box = (el, i, arr) => (arr[i] = [el])

t(({ eq }) => eq(forEach(arr1, double), undefined))

t(({ eq }) => eq(arr1[0], 2))
t(({ eq }) => eq(arr1[1], 4))
t(({ eq }) => eq(arr1[2], 6))
t(({ eq }) => eq(arr1[3], 8))
t(({ eq }) => eq(arr1[4], 10))

t(({ eq }) => eq(forEach(arr1, box), undefined))

t(({ eq }) => eq(arr1[5], [12]))
t(({ eq }) => eq(arr1[6], [14]))
t(({ eq }) => eq(arr1[7], [16]))
t(({ eq }) => eq(arr1[8], [18]))
t(({ eq }) => eq(arr1[9], [20]))

t(({ eq }) => eq(forEach(arr1, decuple), undefined))

t(({ eq }) => eq(arr1[10], -200))
t(({ eq }) => eq(arr1[11], 400))
t(({ eq }) => eq(arr1[12], -1900))
t(({ eq }) => eq(arr1[13], 1720))
t(({ eq }) => eq(arr1[14], 640))

Object.freeze(tests)
