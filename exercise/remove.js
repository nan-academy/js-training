/*
## Remove

### Instructions

In this exercise you need to be able to remove and modify a property from a given object.
You will need to make sure that the name doesn't change, the `date_of_creation` property is removed, 
the difficulty is changed to 8 and `strconv.Itoa` is substituted by `fmt.*` and `len`.

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
const size = Object.keys(theObject).length

t(() => size === 3)
t(({ eq }) => eq(theObject.difficulty, 8))
t(({ eq }) => eq(typeof theObject.date_of_creation, 'undefined'))
t(({ eq }) =>
  eq(theObject.you_can_use, [
    'strconv.Atoi',
    'os.*',
    'append',
    'fmt.*',
    'len',
    '--cast',
    'strings.Split',
  ])
)
t(({ fail }) => fail(() => (theObject.name.update = 'other name')))
t(() => theObject.name !== 'other name')

Object.freeze(tests)
