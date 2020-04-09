function slice(array, begin, end = array.length) {
  let res = ''
  let beg = ''
  let en = ''
  if (begin < 0) {
    beg = array.length + begin
  } else {
    beg = begin
  }

  if (end < 0) {
    en = array.length + end
  } else {
    en = end
  }
  for (let i = beg; i < en; i++) {
    res += array[i]
  }

  if (typeof array == 'string') {
    return res
  } else {
    return res.split('').map((x) => parseInt(x))
  }
}
