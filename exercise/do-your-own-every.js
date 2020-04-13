/*
## Do Your Own Every

### Instruction

Create a function that works just like the `every` function that receives an
array and a function, that tests whether all elements in the array passes the
test implemented by the provided function.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

 */
///*/// ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

let array1 = [2, 24, 10, 32, 44, 8]
let array2 = [18, 25, 33, 12, 55, 31]
let array3 = []

for (let i = 0; i < 7; i++) {
  array3.push(Math.floor(Math.random() * 30) + 1)
}

const bigger10 = (n) => n > 10
const div2 = (n) => n % 2 === 0

t(() => array1.every(bigger10) === every(array1, bigger10))
t(() => array2.every(bigger10) === every(array1, bigger10))
t(() => array3.every(bigger10) === every(array1, bigger10))

t(() => array1.every(div2) === every(array1, div2))
t(() => array2.every(div2) === every(array1, div2))
t(() => array3.every(div2) === every(array1, div2))

t(({ code }) => !code.includes('every'))

Object.freeze(tests)
