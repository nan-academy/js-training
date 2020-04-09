const repeat = (str, n) => {
  let res = ''
  while (n > 0) {
    res += str
    n--
  }
  return res
}
