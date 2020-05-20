function every(arr, f) {
  for (var i = 0; i < arr.length; i++) {
    if (!f(arr[i])) return false
  }
  return true
}
const some = (arr, f) => {
  for (let i of arr) {
    if (f(i)) return true
  }
  return false
}

const none = (arr, f) => !some(arr, f)
