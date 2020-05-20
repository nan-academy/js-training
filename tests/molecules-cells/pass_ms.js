const complements = [
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]

const RNA = (dna) => {
  let res = ''
  res += dna
    .split('')
    .map((f) => Object.fromEntries(complements)[f])
    .join('')
  return res
}

const DNA = (rna) => {
  let res = ''
  res = rna
    .split('')
    .map((f) => {
      for (let c of complements) {
        if (c[1] === f) return c[0]
      }
    })
    .join('')
  return res
}
