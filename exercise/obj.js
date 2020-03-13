/*
## Obj

### Instructions

Create a constant variable named `Obj` that is an object
containing a property for each primitives:
- `str` for `String`
- `num` for `Number`
- `bool` for `Boolean`
- `undef` for `undefined`

### Notions

- Data-Structures

*/


export const tests = []
const t = f => tests.push(f)

// obj is declared and of type object
t(() => obj.constructor === Object)

// obj is constant and can not be re-assigned
t(({ fail }) => obj && fail(() => obj = 10))

// obj.str is of type string
t(() => typeof obj.str === 'string')

// obj.num is of type number
t(() => typeof obj.num === 'number')

// obj.bool is of type boolean
t(() => typeof obj.bool === 'boolean')

// obj.undef is of type undefined
t(() => 'undef' in obj && typeof obj.undef === 'undefined')

