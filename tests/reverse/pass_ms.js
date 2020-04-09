function reverse(str) {
  let reversed = []
  if (str === '') {
    return str
  }
  if (typeof str === 'string') {
    return reverse(str.substr(1)) + str[0]
  } else {
    for (var i = str.length - 1; i >= 0; i--) {
      reversed.push(str[i])
    }
    return reversed
  }
}
