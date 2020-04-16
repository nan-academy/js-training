/*
## Some

### Instruction

Create a function called `someThing` that has as parameters an array and a
number and returns whether the array contains the number or not, displaying
true or false, respectively.

The use of `for`, `while`, `include` and `indexOf` is forbidden for this
exercise.

 */
///*/// ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

let array1 = [2, 24, 10, 32, 44, 8]
let array2 = [18, 25, 33, 12, 55, 31]
let array3 = []

const randNbr = (max, min = 1) =>
  Math.floor(Math.random() * (max - min + 1) + min)

for (let i = 0; i < 7; i++) {
  array3.push(randNbr(9))
}

const equals10 = (el) => el === 10
t(() => array1.some(equals10) === someThing(array1, 10))
t(() => array2.some(equals10) === someThing(array2, 10))
t(() => array3.some(equals10) === someThing(array3, 10))

const equals55 = (el) => el === 55
t(() => array1.some(equals55) === someThing(array1, 55))
t(() => array2.some(equals55) === someThing(array2, 55))
t(() => array3.some(equals55) === someThing(array3, 55))

let x = randNbr(7)
const equalsX = (el) => el === x
t(() => array1.some(equalsX) === someThing(array1, x))
t(() => array2.some(equalsX) === someThing(array2, x))
t(() => array3.some(equalsX) === someThing(array3, x))

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))
t(({ code }) => !code.includes('include'))
t(({ code }) => !code.includes('indexOf'))

Object.freeze(tests)
