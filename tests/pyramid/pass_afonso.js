const pyramid = (char, nFloors) => {
  let n = maxAst(nFloors),
    i = 1,
    helper = '',
    resultArr = [char.repeat(n)]
  while (i !== nFloors) {
    n -= 2
    helper = ' '.repeat(i * char.length) + char.repeat(n)
    resultArr.push(helper)
    i++
  }
  let result = ''
  for (let i = resultArr.length - 1; i >= 0; i--) {
    result += resultArr[i]
    if (i !== 0) {
      result += '\n'
    }
  }
  return result
}

const maxAst = (n) => {
  let max = 0,
    i = 1,
    j = 1
  while (i <= n) {
    if (j % 2 !== 0) {
      max = j
      i++
    }
    j++
  }
  return max
}
1
