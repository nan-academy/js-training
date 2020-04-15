/*
## Invert

### Instructions

Create a function called `invert` that inverts the object keys and values.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(invert($data), $invData))
t(({ eq }) => eq(invert($1), $inv1))
t(({ eq }) => eq(invert($0), $inv0))

Object.freeze(tests)

const $0 = { language: 'english' }
const $inv0 = { english: 'language' }

const $1 = {
  brand: 'ford',
  motor: 'v8',
  year: 2000,
}

const $inv1 = {
  ford: 'brand',
  v8: 'motor',
  '2000': 'year',
}

const $data = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
}

const $invData = {
  John: 'firstName',
  Doe: 'lastName',
  '32': 'age',
}
