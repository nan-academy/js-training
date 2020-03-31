const split = (str, char) => {
  let result = []
  for (let i = 0; i <= str.length; i++) {
    result.push(str.slice(0, str.indexOf(char)))
    str = str.slice(str.indexOf(char) + char.length)
  }
  result.push(str.charAt(str.length - 1))
  return result
}

const join = (array, char) => array.reduce((acc, cur) => acc + char + cur)
