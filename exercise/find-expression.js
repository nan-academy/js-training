/*
### Instruction

Create a function called `findExpression` that takes a number as parameter and returns an expression

- This expression starts from the number 1 and repeatedly either adds 4 or multiplies by 2

- Your goal is to try to find a sequence of such additions and multiplications that produces that number
For example, the number 8 you must first multiplying by 2 twice and then add 4.
It will look something like this `(((1 * 2) * 2) + 4)`

- If the number can not be reached you should return `null`

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = f => tests.push(f)

t(() => typeof findExpression === 'function')
t(() => findExpression.length === 1)

t(() => findExpression(8) === '(((1 * 2) * 2) + 4)')
t(() => findExpression(14) === '(((1 + 4) * 2) + 4)')
t(() => findExpression(60) === '((((((1 + 4) + 4) + 4) * 2) + 4) * 2)')
t(
  () =>
    findExpression(100) === '((((((((1 + 4) + 4) + 4) + 4) + 4) + 4) * 2) * 2)'
)
t(() => findExpression(7) === null)
t(() => findExpression(63) === null)
t(
  () =>
    findExpression(100) === '((((((((1 + 4) + 4) + 4) + 4) + 4) + 4) * 2) * 2)'
)

Object.freeze(tests)
