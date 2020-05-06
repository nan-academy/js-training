const pronoun = (str) => {
  let obj = {}
  let c = { word: [], count: 0 }
  let b = str.toLowerCase().split(/[^\w]/g)
  let reg = /^(i|you|he|she|it|we|you|they)$/

  for (let ele of b) {
    if (reg.test(ele)) {
      obj[ele] = deepCopy(c)
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (obj[b[i]]) {
      if (b[i + 1] && !reg.test(b[i + 1])) obj[b[i]].word.push(b[i + 1])
      obj[b[i]].count++
    }
  }
  return obj
}

function deepCopy(obj) {
  let res = Array.isArray(obj) ? [] : obj.constructor === Object ? {} : obj
  for (let k of Object.keys(obj)) {
    let v = obj[k]
    if ((v && typeof v === 'object' && v !== null) || Array.isArray(v)) {
      res[k] = deepCopy(v)
    } else {
      res[k] = v
    }
  }
  return res
}
