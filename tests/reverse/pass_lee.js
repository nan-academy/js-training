const swap = (value, start, end) => {
  let temp = value[start]
  value[start] = value[end]
  value[end] = temp
}

let flag = false
// dont like the solution will try a better one
const reverse = (value, start = 0, end = value.length - 1) => {
  if (start >= end && flag) {
    return value.join('')
  } else if (start >= end) {
    return value
  }

  if (typeof value == 'string') {
    value = value.split('')
    flag = true
  }

  swap(value, start, end)
  return reverse(value, start + 1, end - 1)
}
