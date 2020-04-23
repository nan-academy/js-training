const complements = [
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]

const RNA = (dna) => {
  let res = ''
  for (let i of dna.split('')) {
    res += complements[i]
  }
  return res
}

const DNA = (rna) => {
  let res = ''
  let a = invert(complements)
  for (let i of rna.split('')) {
    res += a[i]
  }
  return res
}

const invert = (obj) => {
  let ret = {}
  for (let key of Object.keys(obj)) {
    ret[obj[key]] = key
  }
  obj = ret
  return ret
}
