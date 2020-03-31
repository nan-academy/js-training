const indexOf = (arr, char, start = 0) => {
  for (let i = start; i < arr.length; i++) {
    if (arr[i] == char) return i
  }
  return -1
}

const lastIndexOf = (arr, char, start = arr.length - 1) => {
  for (let i = start; i >= 0; i--) {
    if (arr[i] == char) return i
  }
  return -1
}

const includes = (arr, char) => indexOf(arr, char) > 0
