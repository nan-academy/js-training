const cutFirst = (s) => s.slice(2)
const cutLast = (s) => s.slice(0, -2)
const cutFirstLast = (s) => s.slice(2, -2)
const keepFirst = (s) => s.slice(0, 2)
const keepLast = (s) => s.slice(-2)
const keepFirstLast = (s) =>
  s.length < 5 ? s : `${keepFirst(s)}${keepLast(s)}`

