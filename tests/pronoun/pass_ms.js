const pronoun = (str) => {
  let a = {}
  let c = { word: [], count: 0 }
  let b = str.toLowerCase().split(/[^\w]/g)
  let reg = /^(i|you|he|she|it|we|you|they)$/

  for (let ele of b) {
    if (reg.test(ele)) {
      a[ele] = deepCopy(c)
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (a[b[i]]) {
      if (b[i + 1] && !reg.test(b[i + 1])) a[b[i]].word.push(b[i + 1])
      a[b[i]].count++
    }
  }
  return a
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
