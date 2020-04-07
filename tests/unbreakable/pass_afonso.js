const split = (str, sep) => {
  let result = [],
    prev = 0,
    nstr = ''
  for (let j = 0; j < str.length; j++) {
    if (str.indexOf(sep, prev) === j) {
      prev = j + 1
      result.push(nstr)
      nstr = ''
      j += sep.length - 1
    } else {
      nstr += str[j]
    }
  }
  result.push(nstr)
  return result
}

const join = (arr, sep) => {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (i != arr.length - 1) {
      result += sep
    }
  }
  return result
}
