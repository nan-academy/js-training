is.num = x => typeof x === 'number'
is.nan = Number.isNaN
is.str = x => typeof x === 'string'
is.bool = x => typeof x === 'boolean'
is.undef = x => x === undefined
is.def = x => x !== undefined
is.arr = Array.isArray
is.obj = x => x && (x.constructor === Object || !x.constructor)
is.fun = x => typeof x === 'function'
is.falsy = x => !x
is.truthy = Boolean