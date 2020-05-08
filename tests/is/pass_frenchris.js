is.num = el => typeof el === 'number'
is.str = el => typeof el === 'string'
is.bool = el => typeof el === 'boolean'
is.undef = el => typeof el === 'undefined'
is.arr = el => Array.isArray(el)
is.fun = el => typeof el === 'function'

is.nan = el => Number.isNaN(el)

is.def = el => typeof el !== 'undefined'

is.truthy = el => el
is.falsy = el => !el

is.obj = el => el && (el.constructor === Object || el.constructor === undefined)
