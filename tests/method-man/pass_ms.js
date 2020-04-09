const words = (str) => {
  var space = ' '
  var arrayOfStrings = str.split(space)
  arrayOfStrings.join(' / ')

  return arrayOfStrings
}

const yell = (str) => {
  var res = str.toUpperCase()
  return res
}
const sentence = (arr) => {
  var newArr = arr.join(',').replace(/,/g, ' ').split()
  arr = String(newArr)
  return arr
}
const whisper = (str) => {
  var res = '*' + str.toLowerCase() + '*'

  return res
}
