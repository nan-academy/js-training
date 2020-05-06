/*
## Do-Your-Own-For-Each

### Instructions

Create a `ForEach` function that takes an array as first argument, a function as second,
and that works like the method .forEach

### Notions

-https://devdocs.io/javascript/global_objects/array/foreach

*/
Array.prototype.forEach = undefined
///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

export const setup = () => {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -10, 20, -95, 86, 32]
  arr1.__proto__[15] = 1
  let arrCheck = []
  return { arr1, arrCheck }
}

const double = (el, i, arr) => (arr[i] = el * 2)
const decuple = (el, i, arr) => (arr[i] = el * 10)
const box = (el, i, arr) => (arr[i] = [el])

t(({ eq, ctx }) => eq(forEach(ctx.arr1, double), undefined))

t(({ eq, ctx }) => eq(ctx.arr1[0], 2))
t(({ eq, ctx }) => eq(ctx.arr1[1], 4))
t(({ eq, ctx }) => eq(ctx.arr1[2], 6))
t(({ eq, ctx }) => eq(ctx.arr1[3], 8))
t(({ eq, ctx }) => eq(ctx.arr1[4], 10))

t(({ eq, ctx }) => eq(forEach(ctx.arr1, box), undefined))

t(({ eq, ctx }) => eq(ctx.arr1[5], [12]))
t(({ eq, ctx }) => eq(ctx.arr1[6], [14]))
t(({ eq, ctx }) => eq(ctx.arr1[7], [16]))
t(({ eq, ctx }) => eq(ctx.arr1[8], [18]))
t(({ eq, ctx }) => eq(ctx.arr1[9], [20]))

t(({ eq, ctx }) => eq(forEach(ctx.arr1, decuple), undefined))

t(({ eq, ctx }) => eq(ctx.arr1[10], -200))
t(({ eq, ctx }) => eq(ctx.arr1[11], 400))
t(({ eq, ctx }) => eq(ctx.arr1[12], -1900))
t(({ eq, ctx }) => eq(ctx.arr1[13], 1720))
t(({ eq, ctx }) => eq(ctx.arr1[14], 640))

// check of arr1.__proto__[15] = 1 (To avoid for...in)
t(({ eq, ctx }) => eq(ctx.arr1[15], 1))

Object.freeze(tests)
