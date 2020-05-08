const modString = (pattern, fn) => fn(pattern)
const toUpper = pattern => str => str.split(pattern).join(pattern.toUpperCase())
const addSpace = pattern => str => str.split(pattern).join(`${pattern} `)
