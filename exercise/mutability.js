/*
## Mutability

### Instruction

Create a copy of the person object called clone1.
Create an other copy of the person object called clone2.

Create a new variable `samePerson` with the same value as `person`.

Increase by one the property age of `person`
and set his contry to `'FR'`.


### Notions

- https://nan-academy.github.io/js-training/examples/set.js
- https://nan-academy.github.io/js-training/examples/get.js
- https://nan-academy.github.io/js-training/examples/data-structures.js

*/

const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => typeof samePerson === 'object')
t(() => typeof person === 'object')
t(() => typeof clone1 === 'object')
t(() => typeof clone2 === 'object')
t(({ eq }) => eq(clone1, clone2)) // equal
t(() => clone1 !== clone2) // but different !
t(() => person === samePerson) // same value
t(() => person.name === 'Rick')
t(() => person.age === 78)
t(() => person.country === 'FR')
t(() => clone1.country === 'US')
t(() => clone2.age === 77)

Object.freeze(tests)
