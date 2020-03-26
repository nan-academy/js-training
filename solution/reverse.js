const reverse = (x) => {
  if (typeof x === 'string') return reverse([...x]).join('')
  const r = Array(x.length)
  let i = -1
  while (++i < x.length) r[x.length - (i + 1)] = x[i]
  return r
}
