/*
## Remove

### Instructions

Create a function `remove` that takes an object and a key and is able to remove a certain key 
from an object.
You also need to be able to modify properties.
You will need to make sure that the name doesn't change, the difficulty 
is changed to 8 and `strconv.Itoa` is substituted by `fmt.*` and `len`.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

*/

const theObject = {
  name: 'brackets',
  difficulty: 4,
  date_of_creation: '20 / 03 / 19',
  you_can_use: [
    'strconv.Atoi',
    'os.*',
    'append',
    'strconv.Itoa',
    '--cast',
    'strings.Split',
  ],
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) =>
  eq(remove(theObject, 'date_of_creation', 'you_can_use'), $newObject)
)
t(({ eq }) =>
  eq(remove(theObject, 'date_of_creation', 'you_can_use', 'so'), $newObject)
)

t(({ eq }) => eq(remove($1, 'heLikes'), $new1))
t(({ eq }) => eq(remove($1, 'heLikes', 'country'), { name: 'Rick', age: 47 }))
t(({ eq }) => eq(remove($1, 'heLikes', 'country', 'age', 'name'), {}))

t(({ eq }) => eq(theObject.difficulty, 8))
t(({ eq }) => eq(theObject.you_can_use, $newObject.you_can_use))
t(({ fail }) => fail(() => (theObject.name.update = 'other name')))
t(() => theObject.name !== 'other name')

Object.freeze(tests)

const $newObject = {
  name: 'brackets',
  difficulty: 8,
}
const $1 = {
  name: 'Rick',
  age: 47,
  country: 'US',
  heLikes: ['computers', 'beach', 'skate', 'ice cream'],
}
const $new1 = {
  name: 'Rick',
  age: 47,
  country: 'US',
}
