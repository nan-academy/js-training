/*
## Every

### Instruction

Create two boolean variables called `len1` and `len2`
Those variables will return `true` if in
the array `arr1` and `arr2`, respectively, every string has at least 5 characters.

Do the same with `arrRand1` and `arrRand2` by returning `lenRand1` and `lenRand2`.

The use of `for` and `while` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every


 */

let arr1 = ['John', 'Gary', 'Susan', 'Stevie', 'Michael']
let arr2 = ['Justin', 'Taylor', 'Roger', 'Sofia', 'David']

///*/// ⚡

///*/// ⚡
const charset = 'aaaabcdeeefghiiijklmnooopqrstuuuvwxyz'
const randStr = (str = '') => {
  for (let i = 0; i < Math.floor(Math.random() * (10 - 3 + 1)) + 3; i++) {
    str += charset[Math.floor(Math.random() * charset.length)]
  }
  return str
}

let arrRand1 = []
let arrRand2 = []
for (let i = 0; i < 4; i++) {
  arrRand1.push(randStr())
  arrRand2.push(randStr())
}

const passes1 = arrRand1.map(s => s.length >= 5).indexOf(false) === -1
const passes2 = arrRand2.map(s => s.length >= 5).indexOf(false) === -1

export const tests = []
const t = f => tests.push(f)
t(() => len1 === false)
t(() => len2 === true)

t(() => lenRand1 === passes1)
t(() => lenRand2 === passes2)

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))
t(({ code }) => !code.includes('/'))
t(({ code }) => !code.includes('map'))

Object.freeze(tests)
