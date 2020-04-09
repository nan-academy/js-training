const filterEntries = (obj, f) => {
  const entries = Object.entries(obj).filter(f)
  return Object.fromEntries(entries)
}

const mapEntries = (obj, f) => {
  const entries = Object.entries(obj).map(f)
  return Object.fromEntries(entries)
}

const reduceEntries = (obj, f, init) =>
  init == undefined
    ? Object.entries(obj).reduce(f)
    : Object.entries(obj).reduce(f, init)
