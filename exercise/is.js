/*
## Is

### Instructions

Create an object of functions to check a value type
- `is.num` value is a number
- `is.nan` value is NaN
- `is.str` value is a string
- `is.bool` value is a boolean
- `is.undef` value is undefined
- `is.def` value is defined
- `is.arr` value is an array
- `is.obj` value is a simple object or null objects
- `is.fun` value is a function

### Notions

- Primitive and operators
- https://devdocs.io/javascript/operators/typeof

*/

export const tests = []
const t = f => tests.push(f)

// setup context for following tests
t((_, ctx) => ctx.values = [
  1,
  NaN,
  true,
  '',
  '💩',
  undefined,
  () => {},
  [],
  {},
  [1, Array(1), [], 2],
  { length: 10 },
  Object.create(null),
  null,
  console.log,
  void 0,
])

// is.num
t(({ eq }, ctx) => eq(ctx.values.filter(is.num), [1, NaN]))

// is.nan
t(({ eq }, ctx) => eq(ctx.values.filter(is.nan), [NaN]))

// is.str
t(({ eq }, ctx) => eq(ctx.values.filter(is.str), ['', '💩']))

// is.bool
t(({ eq }, ctx) => eq(ctx.values.filter(is.bool), [true]))

// is.undef
t(({ eq }, ctx) => eq(ctx.values.filter(is.undef), [undefined, undefined]))

// is.def
t((_, ctx) => !ctx.values.filter(is.def).includes(undefined))
t((_, ctx) => ctx.values.filter(is.def).length === ctx.values.length - 2)

// is.arr
t(({ eq }, ctx) => eq(ctx.values.filter(is.arr), [[], [1, Array(1), [], 2]]))

// is.obj
t(({ eq }, ctx) => eq(ctx.values.filter(is.obj), [
  {},
  { length: 10 },
  Object.create(null),
]))

// is.fun
t((_, ctx) => ctx.values.filter(is.fun).length === 2)
t((_, ctx) => ctx.values.filter(is.fun)[1] === console.log)
