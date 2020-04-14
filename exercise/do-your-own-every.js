/*
## Do-Your-Own-Every

### Instruction

Create a function `Every` that works just like the [].every method that receives an
array and a function, which tests whether or not all elements in the array passes the
test implemented by the provided function.

The use of `every` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

 */
///*/// ⚡

///*/// ⚡

export const tests = []
const t = f => tests.push(f)

let array1 = [2, 24, 10, 32, 44, 8]
let array2 = [18, 25, 33, 12, 55, 31]
let array3 = []

for (let i = 0; i < 7; i++) {
  array3.push(Math.floor(Math.random() * (40 - 0 + 1)))
}

const greaterThan10 = n => n > 10
const lowerThan10 = n => n < 10

t(() => array1.every(greaterThan10) === Every(array1, greaterThan10))
t(() => array2.every(greaterThan10) === Every(array2, greaterThan10))
t(() => array3.every(greaterThan10) === Every(array3, greaterThan10))

t(() => array1.every(lowerThan10) === Every(array1, lowerThan10))
t(() => array2.every(lowerThan10) === Every(array2, lowerThan10))
t(() => array3.every(lowerThan10) === Every(array3, lowerThan10))

t(({ code }) => !code.includes('every'))

Object.freeze(tests)
