const chunk = (arr, size) => {
  const ret = []
  let chunk = []
  for (const el of arr) {
    chunk.push(el)
    if (chunk.length === size) {
      ret.push(chunk)
      chunk = []
    }
  }
  chunk.length && ret.push(chunk)
  return ret
}
