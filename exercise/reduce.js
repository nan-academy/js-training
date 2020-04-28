/*
## Reduce

### Instruction

Create a function called `sumOrMul` that receives an array and adds or
multiplies its elements depending on whether the element is an odd or an even number.

If the element is even the function should multiply it,
otherwise it should add it.

The function returns the final value.

Example:
sumOrMul([1, 2, 3, 4]) = ((1 * 2) + 3) * 4 = 20

The use of `for` and `while` is forbidden for this exercise

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 */
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(sumOrMul([1, 2, 3, 4]), 20))
t(({ eq }) => eq(sumOrMul([9, 24, 7, 11, 3]), 237))
t(({ eq }) => eq(sumOrMul([1, 30, 2, 0]), 0))
t(({ eq }) => eq(sumOrMul([29, 23, 3, 2, 25]), 135))
t(({ eq }) => eq(sumOrMul([18, 17, 7, 13, 25]), 80))
t(({ eq }) => eq(sumOrMul([8, 16, 7, 0, 32]), 0))
t(({ eq }) => eq(sumOrMul([8, 16, 7, 0, 31]), 31))

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))

Object.freeze(tests)
