const is = {}

/*
## Is

### Instructions

Add new function properties to the object `is`` to check a value type
- `is.num` value is a number
- `is.nan` value is NaN
- `is.str` value is a string
- `is.bool` value is a boolean
- `is.undef` value is undefined
- `is.def` value is defined
- `is.arr` value is an array
- `is.obj` value is a simple object or null objects
- `is.fun` value is a function
- `is.truthy` value is truthy
- `is.falsy` value is falsy

### Notions

- Primitive and operators
- https://devdocs.io/javascript/operators/typeof
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

// setup context for following tests

const match = (fun, values) => ({ eq }) => eq(vals().filter(fun), values)

t(match(is.num, [0, NaN]))
t(match(is.nan, [NaN]))
t(match(is.str, ['', '💩']))
t(match(is.bool, [true]))
t(match(is.undef, [undefined, undefined]))
t(match(is.arr, [[], [1, Array(1), [], 2]]))
t(match(is.obj, [ {}, { length: 10 }, Object.create(null) ]))
t(match(is.fun, [t, console.log]))
t(match(is.falsy, [0, NaN, '', undefined, null, void 0]))

// is.def
t(() => !vals().filter(is.def).includes(undefined))
t(() => vals().filter(is.def).length === vals().length - 2)

// is.truthy
t(match(is.truthy, [
  true,
  '💩',
  t,
  [],
  {},
  [1, Array(1), [], 2],
  { length: 10 },
  Object.create(null),
  console.log,
]))


const vals = () => [
  0,
  NaN,
  true,
  '',
  '💩',
  undefined,
  t,
  [],
  {},
  [1, Array(1), [], 2],
  { length: 10 },
  Object.create(null),
  null,
  console.log,
  void 0,
]

Object.freeze(tests)
