const sign = (n) => {
  if (n > 0) {
    return 1
  }
  if (n < 0) {
    return -1
  } else {
    return 0
  }
}
const sameSign = (n1, n2) => {
  if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0) || (n1 == 0 && n2 == 0)) {
    return true
  } else {
    return false
  }
}
