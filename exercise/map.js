/*
## Map

### Instructions

Create an array named 'arr2' that contains the values of 'arr1'
with the following modification:
- multiplied by 2
- substracted 4
- replaced by `null` if strictly negative

then do the same with arrRandom1 by returning arrRandom2

THe use of for and while is forbidden for this exercise

### Notions

- Map

///*/ // ⚡
let arr1 = [10, -10, 20, -95, 86]

///*/// ⚡

let arrRandom1 = []

for (let i = 0; i < 10; i++) {
  let value = Math.round(Math.random() * (100 - -100 - 100))
  arrRandom1.push(value)
}

export const tests = []
const t = f => tests.push(f)

t(() => arr2[0] === 10 * 2 - 4)
t(() => arr2[1] === 1)
t(() => arr2[2] === 20 * 2 - 4)
t(() => arr2[3] === 0)
t(() => arr2[4] === 86 * 2 - 4)

t(() => {
  for (let i of arrRandom1) {
    if ((arrRandom2[i] = arrRandom1[i] >= 2 ? arrRandom1[i] * 2 - 4 : 0)) {
      return false
    }
    return true
  }
})

t(({ code }) => !code.includes('for'))
t(({ code }) => !code.includes('while'))

Object.freeze(tests)
