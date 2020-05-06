/*
## Circular

### Instructions

Create an object named `circular` that has a property named `circular` with
itself as the value


### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js
- https://nan-academy.github.io/js-training/examples/get.js
- https://nan-academy.github.io/js-training/examples/set.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => circular.constructor === Object)
t(() => circular.circular === circular)
t(() => circular.circular.circular === circular)
t(() => circular.circular.circular.circular === circular)
t(() => circular.circular.circular.circular.circular === circular)

/*
  To understand recursion,
  one must first understand recursion.
*/

Object.freeze(tests)
