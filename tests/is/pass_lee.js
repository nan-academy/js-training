is.num = value => typeof value == 'number'
// NaN is the only primitive that is not equal to nothing
// so NaN === NaN is false
is.nan = value => value != value
is.str = value => typeof value == 'string'
is.bool = value => typeof value == 'boolean'
is.fun = value => typeof value == 'function'
is.undef = value => typeof value == 'undefined'
is.arr = value => Array.isArray(value)
is.truthy = value => !!value
is.falsy = value => !value
is.def = value => !is.undef(value)
// tests with arrays so had to use !Array.isArray
is.obj = value =>
  typeof value === 'object' && !Array.isArray(value) && value !== null
