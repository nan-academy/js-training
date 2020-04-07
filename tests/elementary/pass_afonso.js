const multiply = (a, b) => {
  let result = 0
  if (b < 0 && a > 0) {
    for (let i = 0; i < a; i++) {
      result += b
    }
  }
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      result += a
    }
  } else if (b < 0 && a < 0) {
    for (let i = 0; i < parseInt(String(b).split('-')[1]); i++) {
      result += parseInt(String(a).split('-')[1])
    }
  }
  return result
}

const divide = (a, b) => {
  if (a < b && a > 0) {
    return 0
  }
  let helper = a,
    result = 0,
    neg = false,
    a1 = 0,
    b1 = 0
  if (b < 0) {
    b1 = parseInt(String(b).split('-')[1])
    neg = true
  } else {
    b1 = b
  }
  if (a < 0) {
    a1 = parseInt(String(a).split('-')[1])
    neg = true
  } else {
    a1 = a
  }
  if (a < 0 && b < 0) {
    neg = false
  }
  helper = a1
  while (helper >= b1) {
    helper -= b1
    result++
  }

  if (neg) {
    result = parseInt('-' + result)
  }
  return result
}

const modulo = (a, b) => {
  if (a < b && a > 0) {
    return a
  }
  let helper = a,
    result = 0,
    neg = false,
    a1 = 0,
    b1 = 0
  if (b < 0) {
    b1 = parseInt(String(b).split('-')[1])
  } else {
    b1 = b
  }
  if (a < 0) {
    a1 = parseInt(String(a).split('-')[1])
    neg = true
  } else {
    a1 = a
  }
  helper = a1
  while (helper >= b1) {
    helper -= b1
    result++
  }

  if (neg) {
    helper = parseInt('-' + helper)
  }
  return helper
}
