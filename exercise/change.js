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

- Functions
- Data-Structures
- Get

*/

const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

///*/// ⚡


///*/// ⚡
export const tests = []
const t = f => tests.push(f)

// Get
t(() => typeof get === 'function')
t(() => get('num') === 42)
t(() => get('bool') === true)
t(() => get('str') === 'some text')
t(() => get('log') === console.log)
t(() => get('noexist') === undefined)

// Set
t(() => typeof set === 'function')
t(() => set('num', 55) === 55)
t(() => set('noexist', 'nice') === 'nice')
t(() => get('num') === 55)
t(() => get('noexist') === 'nice')
t(() => set('log') === undefined)
t(() => get('log') === undefined)

Object.freeze(tests)
