/*
## Every

### Instruction

Create two boolean variables called `len1` and `len2` that are true if in
the array `arr1` and `arr2`, respectively, every string has at least 5 characters.

Do the same with `arrRand` by returning `lenRand`.

The use of `for` and `while` is forbidden for this exercise.

 */

let arr1 = ['John', 'Gary', 'Susan', 'Stevie', 'Michael']
let arr2 = ['Justin', 'Taylor', 'Roger', 'Sofia', 'David']

///*/// ⚡

///*/// ⚡
const charset = 'aaaabcdeeefghiiijklmnooopqrstuuuvwxyz'
const randStr = (str = '') => {
  for (let i = 0; i < (Math.floor(Math.random() * (7 - 1 + 1)) + 1); i++) {
    str += charset[Math.floor(Math.random() * charset.length)]
  }
  return str
}

let arrRand = []
for (let i = 0; i < 5; i++) {
  arrRand.push(randStr())
}

const passes = arrRand.map(s => s >= 5).indexOf(false) === -1

export const tests = []
const t = (f) => tests.push(f)
t(() => len1 === false)
t(() => len2 === true)

t(() => lenRand === passes)

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))
t(({ code }) => !code.includes('/'))

Object.freeze(tests)
