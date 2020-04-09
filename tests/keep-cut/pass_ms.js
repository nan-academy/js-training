const cutFirst = (str) => {
  var s2 = str.substr(2)
  return s2
}

const cutLast = (str) => {
  var s2 = str.substr(0, str.length - 2)
  return s2
}

const cutFirstLast = (str) => {
  var s2 = str.substr(2)
  var s3 = s2.substr(0, s2.length - 2)
  return s3
}
const keepFirst = (str) => {
  let keep = str.charAt(0)
  let keep2 = str.charAt(1)

  return keep + keep2
}

const keepLast = (str) => {
  let keep = str.charAt(str.length - 1)
  let keep2 = str.charAt(str.length - 2)

  return keep2 + keep
}

const keepFirstLast = (str) => {
  if (str.length < 4) {
    return str
  }
  let keep = str.charAt(0)
  let keep1 = str.charAt(1)
  let keep2 = str.charAt(str.length - 1)
  let keep3 = str.charAt(str.length - 2)
  return keep + keep1 + keep3 + keep2
}
