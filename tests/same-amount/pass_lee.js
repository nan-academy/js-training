const sameAmount = (str, first, second) => {
  let size = str.split(first).length
  let size1 = str.split(second).length
  return size === size1
}
