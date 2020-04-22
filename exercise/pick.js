/*
## Pick

### Instructions

Create a `pick` function that takes an object and keys.
This function will pick only the keys, in the second argument, from the object passed as argument.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(pick($person, ['firstName', 'lastName']), $newperson))
t(({ eq }) => eq(pick($1, ['brand', 'year']), $new1))
t(({ eq }) => eq(pick($data, 'age'), $newdata))
t(({ eq }) => eq(pick($test, 'graphic'), {}))

Object.freeze(tests)
const $person = {
  firstName: 'James',
  lastName: 'Bond',
  age: 25,
  email: 'jamesbond@hotmail.com',
}
const $newperson = { firstName: 'James', lastName: 'Bond' }
const $1 = { brand: 'ford', motor: 'v8', year: 2000 }
const $new1 = { brand: 'ford', year: 2000 }
const $data = { firstName: 'John', lastName: 'Doe', age: 32 }
const $newdata = { age: 32 }
const $test = { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' }
