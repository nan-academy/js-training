const deepCopy = (target) => {
  var result = Array.isArray(target) ? [] : {}
  for (let [k, v] of Object.entries(target)) {
    result[k] = typeof v === 'object' && v !== null ? deepCopy(v) : v
  }
  return result
}

const pronoun = (str) => {
  let a = {}
  let c = { word: [], count: 0 }
  let b = str.toLowerCase().split(' ')

  for (let ele of b) {
    if (/^(i|you|he|she|it|we|you|they)$/.test(ele)) {
      a[ele] = deepCopy(c)
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (a[b[i]] && i != b.length - 1) {
      a[b[i]].word.push(b[i + 1].replace(/\n/, ''))
      a[b[i]].count++
    }
  }
  return a
}
