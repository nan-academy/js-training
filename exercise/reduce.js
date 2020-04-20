/*
## Reduce

### Instruction

Create a function called `sumOrMul` that receives an array and adds or
multiplies its elements depending if the element is an odd or even number and
returns the final value. If the element is even you should multiply it,
otherwise you should add it.

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

const randArr = [...new Array(10)].map(() => Math.round(Math.random() * 15))

const resultRand = () => {
  let res = 0
  for (let i = 0; i < randArr.length; i++) {
    if (i === 0) {
      res += randArr[i]
    } else {
      res = randArr[i] % 2 === 0 ? res * randArr[i] : res + randArr[i]
    }
  }
  return res
}

t(() => sumOrMul([1, 2, 3, 4]) === 20)
t(() => sumOrMul([9, 24, 7, 11, 3]) === 237)
t(() => sumOrMul([1, 30, 2, 0]) === 0)
t(() => sumOrMul([1, 30, 0, 3]) === 3)

t(() => sumOrMul(randArr) === resultRand())

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))

Object.freeze(tests)
