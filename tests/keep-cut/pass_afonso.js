const cutFirst = (str) => str.slice(2)

const cutLast = (str) => str.slice(0, str.length - 2)

const cutFirstLast = (str) => cutFirst(cutLast(str))

const keepFirst = (str) => str.slice(0, 2)

const keepLast = (str) => str.slice(str.length - 2)

const keepFirstLast = (str) =>
  str.length <= 4 ? str : keepFirst(str) + keepLast(str)
