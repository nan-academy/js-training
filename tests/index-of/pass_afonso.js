const indexOf = (arr, value, fromIndex) => {
  let beg = 0
  if (fromIndex !== undefined) {
    beg = fromIndex
  }
  for (let i = beg; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

const lastIndexOf = (arr, value, fromIndex) => {
  let beg = 0
  if (fromIndex !== undefined) {
    let result
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
  } else {
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
  }
  return -1
}

const includes = (arr, a) => indexOf(arr, a) !== -1
