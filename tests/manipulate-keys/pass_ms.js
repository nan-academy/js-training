const filterKeys = (obj, keys) => {
  return Object.fromEntries(Object.entries(obj).filter(([k]) => keys(k)))
}
const reduceKeys = (obj, ...keys) => {
  return Object.keys(obj).reduce(...keys)
}
const mapKeys = (obj, keys) => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [keys(k), v]))
}
