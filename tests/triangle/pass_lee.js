// const triangle = (char, givenDepth) => {
//   if (givenDepth == 0) return '\n'
//   return triangle(char + char, givenDepth - 1) + char + '\n'
// }

const triangle = (char, depth) => {
  let result = ''
  for (let i = 0; i < depth; i++) {
    for (let j = 0; j <= i; j++) {
      result += char
    }
    if (i != depth - 1) result += '\n'
  }
  return result
}
