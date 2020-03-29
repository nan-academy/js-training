const sameAmount = (str, first, second) => {
  let reg = new RegExp(first, 'g')
  let reg1 = new RegExp(second, 'g')
  let size = str.split(reg).length
  let size1 = str.split(reg1).length
  return size === size1
}
