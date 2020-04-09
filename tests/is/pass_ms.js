is.num = (val) => typeof val === 'number'
is.nan = Number.isNaN
is.str = (val) => typeof val === 'string'
is.bool = (val) => typeof val === 'boolean'
is.undef = (val) => val === undefined
is.def = (val) => val !== undefined
is.arr = Array.isArray
is.obj = (val) => typeof val === 'object' && !Array.isArray(val) && val !== null
is.fun = (val) => typeof val === 'function'
is.falsy = (val) => !val
is.truthy = Boolean
