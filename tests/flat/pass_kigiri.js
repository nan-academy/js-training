const flat = (arr, depth = 1) => {
  if (depth < 1) return arr
  const res = []
  for (const el of arr) {
    Array.isArray(el) ? res.push(...flat(el, depth - 1)) : res.push(el)
  }
  return res
}
