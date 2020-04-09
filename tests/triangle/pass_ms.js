const triangle = (s, rows) => {
  let result = ''
  for (let i = 1; i <= rows; i++) {
    if (i === rows) {
      result += s.repeat(i)
    } else {
      let empty = rows + i
      result += ''.repeat(empty) + s.repeat(i) + '\n'
    }
  }
  return result
}
