const pyramid = (s, rows) => {
  let re = ''
  let l = s.length

  for (let i = 1; i <= rows; i++) {
    let str = ' '.repeat(rows - i)
    let str2 = s.repeat(i * 2 - 1)
    re += str.repeat(l) + str2 + '\n'
  }
  return re.trimEnd()
}
