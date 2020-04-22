/*
### Instruction

Create a function called `findExpression` that takes a number as parameter and returns a string

- It will be given two constant variable `add4` and `mul2`

- Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying 2
 that produces the number given has parameter.
For example, the number 8 you must first multiplying by 2 twice and then add 4.
It will look something like this `1 *2 *2 +4`

- If the number can not be reached you should return `undefined`


### Notions

- https://nan-academy.github.io/js-training/examples/loops.js
- https://nan-academy.github.io/js-training/examples/recursion.js

*/

const add4 = '+4'
const mul2 = '*2'

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const result = (expression) =>
  expression.slice(2).split(' ').reduce((total, op) => {
    if (op === '+4') return total + 4
    if (op === '*2') return total * 2
    throw Error(`unknown op ${op}`)
  }, 1)

t(
  ({ code }) =>
    !/[5-9]/g.test(code) && code.includes('add4') && code.includes('mul2')
)

t(({ eq }) => eq(result(findExpression(8)), 8))
t(({ eq }) => eq(result(findExpression(14)), 14))
t(({ eq }) => eq(result(findExpression(60)), 60))
t(({ eq }) => eq(result(findExpression(100)), 100))
t(({ eq }) => eq(result(findExpression(100)), 100))
t(({ eq }) => eq(result(findExpression(280)), 280))
t(({ eq }) => eq(result(findExpression(110)), 110))
t(({ eq }) => eq(result(findExpression(144)), 144))
t(({ eq }) => eq(result(findExpression(200)), 200))
t(({ eq }) => eq(result(findExpression(104)), 104))

t(({ eq }) => eq(findExpression(7), undefined))
t(({ eq }) => eq(findExpression(63), undefined))
t(({ eq }) => eq(findExpression(23), undefined))
t(({ eq }) => eq(findExpression(103), undefined))

Object.freeze(tests)
