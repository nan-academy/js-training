/*
## Circular

### Instructions

Create an object named `circular` that has a property named `circular` with
itself as the value


### Notions

- Data-Structures
- Get
- Set

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
