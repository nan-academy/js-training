/*
## Do your own reduce

### Instructions

Create the function `reducingArrays` that receives a function and an array
and works just like the method [].reduce.

The use of `[].reduce` is forbidden for this exercise.

### Notions

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

*/
///*/// ⚡

///*/// ⚡
export const tests = []
const t = (f) => tests.push(f)

const randomString = (size) => {
  var alphaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz       '
  var generatedString = ''
  for (var i = 0; i < size; i++) {
    generatedString += alphaChars[Math.random() * alphaChars.length]
  }
  return generatedString
}
const createRandomObj = (fieldCount, allowNested) => {
  var generatedObj = {}

  for (var i = 0; i < fieldCount; i++) {
    var generatedObjField
    switch (Math.floor(Math.random() * (allowNested ? 6 : 5))) {
      case 0:
        generatedObjField = Math.floor(Math.random() * 1000)
        break
      case 1:
        generatedObjField = Math.random()
        break
      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false
        break
      case 3:
        generatedObjField = randomString(Math.floor(Math.random() * 4) + 4)
        break
      case 4:
        generatedObjField = null
        break
      case 5:
        generatedObjField = createRandomObj(fieldCount, allowNested)
        break
    }
    generatedObj[randomString(8)] = generatedObjField
  }
  return generatedObj
}

const intArr = [5, 10, 31, 7]
const randIntArr = [...Array(10)].map(() => Math.round(Math.random() * 15))
const strArr = ['This ', 'is ', 'a ', 'simple', 'example']
const randStrArr = [...Array(5)].map(() => {
  randomString(10)
})
const objArr = [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }]
const randObj = [...Array(4)].map(() => createRandomObj(2, true))

const adder = (a, b) => a + b
const concatenate = (a = '', b) => a.concat(b)
const merger = (a, b) => ({ ...a, ...b })

t(({ eq }) => eq(reducingArrays(adder, intArr), intArr.reduce(adder)))
t(({ eq }) => eq(reducingArrays(concatenate, strArr), strArr.reduce(concatenate)))
t(({ eq }) => eq(reducingArrays(merger, objArr), objArr.reduce(merger)))

t(({ eq }) => eq(reducingArrays(adder, intArr, 5), intArr.reduce(adder, 5)))
t(({ eq }) =>
  eq(
    reducingArrays(concatenate, strArr, ' right?'),
    strArr.reduce(concatenate, ' right?')
  )
)

t(({ eq }) => eq(reducingArrays(adder, randIntArr), randIntArr.reduce(adder)))
t(({ eq }) =>
  eq(reducingArrays(concatenate, randStrArr), randStrArr.reduce(concatenate))
)
t(({ eq }) => eq(reducingArrays(merger, randObj), randObj.reduce(merger)))

t(({ eq }) => eq(reducingArrays(adder, randIntArr, 9), randIntArr.reduce(adder, 9)))
t(({ eq }) =>
  eq(
    reducingArrays(concatenate, randStrArr, 'almost there'),
    randStrArr.reduce(concatenate, 'almost there')
  )
)
t(({ eq }) =>
  eq(
    reducingArrays(merger, randObj, { 'last one': 247 }),
    randObj.reduce(merger, { 'last one': 247 })
  )
)

t(({ code }) => !code.includes('reduce'))
