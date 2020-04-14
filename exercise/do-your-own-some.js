/*
## Do-Your-Own-Some

### Instruction

Create a function `Some` that works just like the [].some method that receives
an array and a function, which tests whether or not at least one element
in the array passes the test implemented by the provided function.

The use of `some` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

 */
///*/// ⚡

///*/// ⚡

export const tests = []
const t = f => tests.push(f)

let array1 = [2, 24, 10, 32, 44, 8]
let array2 = [18, 25, 33, 12, 55, 31]
let array3 = []

const randNbr = (max, min = 1) =>
  Math.floor(Math.random() * (max - min + 1) + min)

for (let i = 0; i < 7; i++) {
  array3.push(randNbr(9))
}

const greater10 = n => n > 10
const pair = n => n % 2 === 0

t(() => array1.some(greater10) === Some(array1, greater10))
t(() => array2.some(greater10) === Some(array2, greater10))
t(() => array3.some(greater10) === Some(array3, greater10))

t(() => array1.some(pair) === Some(array1, pair))
t(() => array2.some(pair) === Some(array2, pair))
t(() => array3.some(pair) === Some(array3, pair))

t(({ code }) => !code.includes('some'))

Object.freeze(tests)
