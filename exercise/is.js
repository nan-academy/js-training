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

- https://nan-academy.github.io/js-training/examples/primitive-and-operators
- https://devdocs.io/javascript/operators/typeof
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy
- https://developer.mozilla.org/en-US/docs/Glossary/Falsy

*/

const is = {}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// your functions are all tested against all these values:
export const setup = () => [
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

const match = ({ eq, ctx }, fun, values) => eq(ctx.filter(fun), values)

// the array of value here is the ones that your function should
// return true too, while returning false to every others.
t((_) => match(_, is.num, [0, NaN]))
t((_) => match(_, is.nan, [NaN]))
t((_) => match(_, is.str, ['', '💩']))
t((_) => match(_, is.bool, [true]))
t((_) => match(_, is.undef, [undefined, undefined]))
t((_) => match(_, is.arr, [[], [1, Array(1), [], 2]]))
t((_) => match(_, is.obj, [{}, { length: 10 }, Object.create(null)]))
t((_) => match(_, is.fun, [t, console.log]))
t((_) => match(_, is.falsy, [0, NaN, '', undefined, null, void 0]))

// is.def
t(({ ctx }) => !ctx.filter(is.def).includes(undefined))
t(({ ctx }) => ctx.filter(is.def).length === ctx.length - 2)

// is.truthy
t((_) =>
  match(_, is.truthy, [
    true,
    '💩',
    t,
    [],
    {},
    [1, Array(1), [], 2],
    { length: 10 },
    Object.create(null),
    console.log,
  ])
)

Object.freeze(tests)
