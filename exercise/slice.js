/*
## Slice

### Instructions

Create the `slice` function that works like `Array.slice` and `String.slice`

It takes an additionnal first argument which is the string or the array

### Notions

- https://devdocs.io/javascript/global_objects/array/slice

*/

Array.prototype.slice = () => { throw Error('forbidden') }
String.prototype.slice = () => { throw Error('forbidden') }

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

// handle String
t(() => slice('abcdef', 2) === 'cdef')
t(() => slice('abcdef', -2) === 'ef')
t(() => slice('abcdef', 0, 2) === 'ab')
t(() => slice('abcdef', 0, -2) === 'abcd')
t(() => slice('abcdef', 2, 4) === 'cd')
t(() => slice('abcdef', -3, -1) === 'de')

// handle Array
t(({ eq }) => eq(slice([1,2,3,4,5,6], 2), [3,4,5,6]))
t(({ eq }) => eq(slice([1,2,3,4,5,6], -2), [5,6]))
t(({ eq }) => eq(slice([1,2,3,4,5,6], 0, 2), [1,2]))
t(({ eq }) => eq(slice([1,2,3,4,5,6], 0, -2), [1,2,3,4]))
t(({ eq }) => eq(slice([1,2,3,4,5,6], 2, 4), [3,4]))
t(({ eq }) => eq(slice([1,2,3,4,5,6], -3, -1), [4,5]))