const complements = [
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]

const RNA = (dna) => {
  let res = ''
  let obj = Object.fromEntries(complements)
  for (let i of dna.split('')) {
    res += obj[i]
  }
  return res
}

const DNA = (rna) => {
  let res = ''
  let invobj = invert(Object.fromEntries(complements))
  for (let i of rna.split('')) {
    res += invobj[i]
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
