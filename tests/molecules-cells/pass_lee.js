const complements = [
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]

const RNA = (dna) =>
  dna
    .split('')
    .map((ele) => Object.fromEntries(complements)[ele])
    .join('')

const DNA = (rna) =>
  rna
    .split('')
    .map((ele) => {
      for (let c of complements) {
        if (c[1] === ele) return c[0]
      }
    })
    .join('')
