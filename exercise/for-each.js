/*
## ForEach

### Instructions

Fill the 'arr2' that contains the values of 'arr1'
with the following modifications applied to each of the values:
1) They have to be multiplied by 2
2) Then the results have to be subtracted by 4
3) finally, the negative values have to be replaced by null

then do the same with arrRandom1 by filling arrRandom2

The use of `for` and `while` is forbidden for this exercise

### Notions

- Map
*/
let arr1 = [10, -10, 20, -95, 86]
let arr2 = []
let arrRandom2 = []
///*/ // ⚡

///*/// ⚡

let arrRandom1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
  let value = Math.round(Math.random() * (10 - -10 - 10))
  arrRandom1.push(value)
}

export const tests = []
const t = f => tests.push(f)

const check = arg => arg * 2 - 4

t(() => arr2[0] === check(arr1[0]))
t(() => arr2[1] === null)
t(() => arr2[2] === check(arr1[2]))
t(() => arr2[3] === null)
t(() => arr2[4] === check(arr1[4]))

t(() => arr1[0] === 10)
t(() => arr1[1] === -10)
t(() => arr1[2] === 20)
t(() => arr1[3] === -95)
t(() => arr1[4] === 86)

t(() => {
  for (let i of arrRandom1) {
    if (arrRandom1[i] >= 2)
      if (arrRandom2[i] !== check(arrRandom1[i])) return false
    if (arrRandom1[i] < 2) if (arrRandom2[i] !== null) return false
    return true
  }
})

t(({ code }) => !code.includes('for '))
t(({ code }) => !code.includes('for ('))
t(({ code }) => !code.includes('for('))

t(({ code }) => !code.includes('while'))

Object.freeze(tests)
