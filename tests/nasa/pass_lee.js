const nasa = size => {
  let result = ''
  for (let i = 1; i <= size; i++) {
    i % 15 == 0
      ? (result += 'NASA ')
      : i % 3 == 0
      ? (result += 'NA ')
      : i % 5 == 0
      ? (result += 'SA ')
      : (result += i + ' ')
  }
  return result.trimEnd()
}
