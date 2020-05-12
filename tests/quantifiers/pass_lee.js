const every = (arr, f) => {
  for (let v of arr) if (!f(v)) return false
  return true
}
const some = (arr, f) => {
  for (let v of arr) if (f(v)) return true
  return false
}
const none = (arr, f) => !some(arr, f)
