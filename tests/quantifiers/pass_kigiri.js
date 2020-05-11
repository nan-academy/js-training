const every = (arr, fn) => {
  let i = -1
  while (++i < arr.length) if (!fn(arr[i])) return false
  return true
}

const some = (arr, fn) => !every(arr, x => !fn(x))
const none = (arr, fn) => every(arr, x => !fn(x))
