const slice = (x, begin, end = x.length) => {
  if (typeof x === 'string') return slice([...x], begin, end).join('')
  if (begin < 0) return slice(x, x.length + begin, end)
  if (end < 0) return slice(x, begin, x.length + end)
  const result = []
  while (begin < end) result.push(x[begin++])
  return result
}
