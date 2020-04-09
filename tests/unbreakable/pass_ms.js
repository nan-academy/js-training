const split = (str, sep) => {
  let res = []
  for (let i = 0; i <= str.length; i++) {
    res.push(str.slice(0, str.indexOf(sep)))
    str = str.slice(str.indexOf(sep) + sep.length)
  }
  res.push(str.charAt(str.length - 1))
  return res
}

const join = (arr, sep) => {
  let result = ''
  for (var i = 0; i < arr.length; i++) {
    if (result) {
      result += sep
    }
    result += arr[i]
  }
  return result
}
