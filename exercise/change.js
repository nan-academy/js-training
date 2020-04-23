/*
## Change

### Instructions

Create 2 functions:
- `get`: a function that takes a key and return the corresponding
  value from the sourceObject

- `set`: a function that takes a key and a value update the
  value for the corresponding property of the sourceObject
  and return the set value


### Notions

- https://nan-academy.github.io/js-training/examples/functions.js
- https://nan-academy.github.io/js-training/examples/data-structures.js
- https://nan-academy.github.io/js-training/examples/get.js
- https://nan-academy.github.io/js-training/examples/set.js

*/

const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// Get
t(({ eq }) => eq(typeof get, 'function'))
t(({ eq }) => eq(typeof get, 'function'))
t(({ eq }) => eq(get('num'), 42))
t(({ eq }) => eq(get('bool'), true))
t(({ eq }) => eq(get('str'), 'some text'))
t(({ eq }) => eq(get('log'), console.log))
t(({ eq }) => eq(get('noexist'), undefined))

// Set
t(({ eq }) => eq(typeof set, 'function'))
t(({ eq }) => eq(set('num', 55), 55))
t(({ eq }) => eq(set('noexist', 'nice'), 'nice'))
t(({ eq }) => eq(get('num'), 55))
t(({ eq }) => eq(get('noexist'), 'nice'))
t(({ eq }) => eq(set('log'), undefined))
t(({ eq }) => eq(get('log'), undefined))

Object.freeze(tests)
