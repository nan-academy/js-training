const pyramid = (char, depth) => {
  let result = ''
  let sizeof = char.length

  for (let i = 1; i <= depth; i++) {
    let aux = ''
    for (let j = 1; j <= 2 * i - 1; j++) {
      aux += char
    }
    result += aux.padStart(depth * sizeof + i * sizeof - sizeof, ' ')
    result += '\n'
  }
  return result.trimEnd()
}
