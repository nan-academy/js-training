const invert = (obj) =>
  Object.entries(obj).reduce((acc, cr) => {
    acc[cr[1]] = cr[0]
    return acc
  }, {})

const RNA = (dna) => {
  let result = ''
  let a = Object.fromEntries(complements)
  let splitDNA = dna.split('')
  splitDNA.forEach((ele) => {
    result += a[ele]
  })
  return result
}

const DNA = (rna) => {
  let result = ''
  let a = Object.fromEntries(complements)
  let b = invert(a)
  let splitDNA = rna.split('')
  splitDNA.forEach((ele) => {
    result += b[ele]
  })
  return result
}
