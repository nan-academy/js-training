const slice = (str, a, b) => {
  let result
  if (typeof str === 'string') {
    result = ''
  } else if (typeof str === 'object') {
    result = []
  }

  let beg = 0,
    end = 0
  if (b === undefined) {
    end = str.length
  } else {
    end = b
  }

  if (end < 0) {
    end = str.length + b
  }

  if (a >= 0) {
    beg = a
  } else {
    beg = str.length + a
  }
  for (let i = beg; i < end; i++) {
    if (typeof str === 'string') {
      result += str[i]
    } else {
      result.push(str[i])
    }
  }
  return result
}
