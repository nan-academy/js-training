const groupPrice = (str) => {
  let myregex = /(?:\$|(?:USD))([0-9]+)\.([0-9]{2})/g
  let match = myregex.exec(str)
  let res = []

  while (match) {
    let arr = []
    arr.push(match[0])
    arr.push(match[1])
    arr.push(match[2])
    res.push(arr)
    match = myregex.exec(str)
  }
  return res
}
