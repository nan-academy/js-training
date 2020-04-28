const pronoun = (str) => {
  let a = {}
  let c = { word: [], count: 0 }
  let b = str.toLowerCase().split(' ')

  for (let ele of b) {
    if (/^(i|you|he|she|it|we|you|they)$/.test(ele)) {
      a[ele] = copyObject(c)
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (a[b[i]]) {
      if (i != b.length - 1) a[b[i]].word.push(b[i + 1].replace(/\n/, ''))
      a[b[i]].count++
    }
  }
  return a
}

const copyObject = (target) => {
  if (!Array.isArray(target)) {
    let res = {}
    for (let [key, value] of Object.entries(target)) {
      res[key] =
        typeof value === 'object' && value !== null ? copyObject(value) : value
    }
    return res
  } else if (Array.isArray(target)) {
    let ans = []
    for (let [key, value] of Object.entries(target)) {
      ans[key] =
        typeof value === Array.isArray && value !== null
          ? copyObject(value)
          : value
    }
    return ans
  }
}
