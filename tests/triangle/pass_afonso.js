const triangle = (char, nbr) => {
  let result = ''
  for (let i = 1; i <= nbr; i++) {
    result += char.repeat(i)
    if (i !== nbr) {
      result += '\n'
    }
  }
  return result
}
