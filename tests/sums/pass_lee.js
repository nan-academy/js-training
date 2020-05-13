const sums = (nbr) => {
  if (!nbr) return []
  let p = []
  let last = 0 // index of last element in a partition
  p[last] = nbr
  return algo(nbr, p, last)
    .slice(1)
    .map((ele) => ele.sort())
}
const algo = (n, p, i, result = []) => {
  result.push([...p])
  let auxVal = 0
  while (i >= 0 && p[i] === 1) {
    auxVal += p[i]
    i--
  }
  if (i < 0) return result
  p[i]--
  auxVal++

  while (auxVal > p[i]) {
    p[i + 1] = p[i]
    auxVal = auxVal - p[i]
    i++
  }

  p[i + 1] = auxVal
  let pSize = p.reduce((a, c) => a + c)
  p = pSize !== n ? p.slice(0, n - pSize) : p
  i++
  return algo(n, p, i, result)
}
