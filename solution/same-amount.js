const sameAmount = (str, first, second) => {
  let reg = new RegExp(first, 'g')
  let reg1 = new RegExp(second, 'g')
  let x = str.split(reg).length
  let o = str.split(reg1).length
  return x === o
}
