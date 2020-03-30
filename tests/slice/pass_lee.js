const slice = (data, start, end = data.length) => {
  let s = start < 0 ? data.length + start : start
  let e = end < 0 ? data.length + end : end
  let result = ''

  for (let i = s; i < e; i++) {
    result += data[i]
  }
  return typeof data == 'string'
    ? result
    : result.split('').map(x => parseInt(x))
}
