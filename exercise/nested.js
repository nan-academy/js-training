/*
## Nested

### Instructions

Create a `nested` constant variable that contains
- arr: an array of the 3 values: 4, undefined, '2'
- obj: an object with 3 property (str, num & bool)

`nested` and `obj` must be frozen to prevent changes from them.

### Notions

- Data Structures
- https://devdocs.io/javascript/global_objects/object/freeze

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => nested.constructor === Object)

// nested is constant and can not be re-assigned
t(({ fail }) => nested && fail(() => (nested = 10)))

t(() => nested.obj.constructor === Object)
t(() => typeof nested.obj.str === 'string')
t(() => typeof nested.obj.num === 'number')
t(() => typeof nested.obj.bool === 'boolean')

t(() => Array.isArray(nested.arr))
t(() => nested.arr[0] === 4)
t(() => nested.arr[1] === undefined)
t(() => nested.arr[2] === '2')
t(() => nested.arr.length === 3)

// nested is frozen and can not be changed
t(({ fail }) => fail(() => (nested.obj = 5)))
t(() => nested.obj !== 5)

// nested.obj is also frozen and can not be changed
t(({ fail }) => fail(() => (nested.obj.update = 5)))
t(() => nested.obj.update === undefined)

// nested.arr is not frozen and can be changed
t(() => nested.arr.push('hot stuff'))
t(() => nested.arr.length === 4)

Object.freeze(tests)
