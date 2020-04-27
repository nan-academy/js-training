/*
## Do your own reduce

### Instructions

Create the function `reducingArrays` that receives a function and an array
and works just like the method [].reduce.

The use of `[].reduce` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

const intArr1 = [5, 10, 31, 7]
const intArr2 = [0, 3, 17, 9, 1]
const strArr1 = ['This ', 'is ', 'a ', 'simple', 'example']
const strArr2 = 'The quick brown fox jumped over the lazy dog'.split(' ')
const objArr = [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }]

const adder = (a, b) => a + b
const concatenate = (a = '', b) => a.concat(b)
const merger = (a, b) => ({ ...a, ...b })

t(({ eq }) => eq(reducingArrays(adder, intArr1), intArr1.reduce(adder)))
t(({ eq }) => eq(reducingArrays(adder, intArr2), intArr2.reduce(adder)))
t(({ eq }) =>
  eq(reducingArrays(concatenate, strArr1), strArr1.reduce(concatenate))
)
t(({ eq }) =>
  eq(reducingArrays(concatenate, strArr2), strArr2.reduce(concatenate))
)
t(({ eq }) => eq(reducingArrays(merger, objArr), objArr.reduce(merger)))

t(({ eq }) => eq(reducingArrays(adder, intArr1, 5), intArr1.reduce(adder, 5)))
t(({ eq }) => eq(reducingArrays(adder, intArr2, 9), intArr2.reduce(adder, 9)))
t(({ eq }) =>
  eq(
    reducingArrays(concatenate, strArr1, ' right?'),
    strArr1.reduce(concatenate, ' right?')
  )
)
t(({ eq }) =>
  eq(
    reducingArrays(concatenate, strArr2, ' The end'),
    strArr2.reduce(concatenate, ' The end')
  )
)
t(({ eq }) =>
  eq(
    reducingArrays(merger, objArr, { ending: 3 }),
    objArr.reduce(merger, { ending: 3 })
  )
)

t(({ code }) => !code.includes('reduce'))
