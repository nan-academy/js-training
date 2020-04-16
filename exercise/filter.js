/*
## Filter

### Instructions

Create an array named 'arr2' that contains the values of 'arr1'
that:
- are divisible by 2.

Create an array named 'arr3' that contains the values of 'arr1'
that:
- are divisible by 3.

Create an array named 'arr4' that contains the values of 'arr1'
that:
-are divisible by 2 and 3.

The use of `for` and `while` is forbidden for this exercise

Create an array named 'arrRandom2' that contains the values of 'arrRandom1'
that:
-are divisible by 2 and 3.

### Notions

- filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
let arr1 = [
  10,
  -10,
  12,
  18,
  19,
  20,
  6,
  -95,
  30,
  26,
  36,
  86,
  41,
  60,
  63,
  66,
  257,
  331,
  383,
  229,
  192,
  200,
]
///*/ // ⚡

///*/// ⚡

let arrRandom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 20; i++) {
  let value = Math.round(Math.random() * 1000) + 10
  arrRandom1.push(value)
}

export const tests = []
const t = (f) => tests.push(f)

const check1 = (arg) => arg % 2 === 0
const check2 = (arg) => arg % 3 === 0
const check3 = (arg) => arg % 2 === 0 && arg % 3 === 0

t(() => arr2[0] === 10)
t(() => arr2[1] === -10)
t(() => arr2[2] === 12)
t(() => arr2[3] === 18)
t(() => arr2[4] === 20)
t(() => arr2[5] === 6)

t(() => arr2.length === 14)

t(() => {
  for (let el of arr2) {
    if (!check1(el)) return false
  }
  return true
})

t(() => {
  for (let el of arr3) {
    if (!check2(el)) return false
  }
  return true
})

t(() => {
  for (let el of arr4) {
    if (!check3(el)) return false
  }
  return true
})

t(() => {
  for (let el of arrRandom2) {
    if (!check3(el)) return false
  }
  return true
})

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))

Object.freeze(tests)
