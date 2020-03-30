// - `lastIndexOf` that return the index of the last occurence of a value
// - `includes` that return true if the value was found in the array

const indexOf = (arr, char, start = 0) => {
  if (char === undefined) return -1
  for (let i = start; i < arr.length; i++) {
    if (arr[i] == char) return i
  }
}

const lastIndexOf = (arr, char, start = 0) => {
  if (char == undefined) return -1
  for (let i = arr.length; i >= start; i--) {
    if (arr[i] == char) return i
  }
}
const includes = (arr, char) => indexOf(arr, char) > 0
