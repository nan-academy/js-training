const indexOf = (arr, val, fromIndex) => {
  let s = 0
  if (fromIndex !== undefined) {
    s = fromIndex
  }
  for (let i = s; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

const lastIndexOf = (arr, val, fromIndex) => {
  let s = arr.length - 1
  if (fromIndex !== undefined) {
    s = fromIndex
  }
  for (let i = s; i >= 0; i--) {
    if (arr[i] == val) {
      return i
    }
  }
  return -1
}

const includes = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true
    }
  }
  return false
}
