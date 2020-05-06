const pronoun = (str) => {
  let b = str.toLowerCase().split(/[^\w]/g)
  let a = {}
  for (let i = 0; i < b.length; i++) {
    if (/^(i|you|he|she|it|we|you|they)$/.test(b[i])) {
      if (!a[b[i]]) {
        a[b[i]] = {}
        a[b[i]]['word'] = []
        a[b[i]]['count'] = 0
      }
      if (b[i + 1] && !/^(i|you|he|she|it|we|you|they)$/.test(b[i+1]))
      a[b[i]].word.push(b[i + 1])
      a[b[i]].count++
    }
  }
  return a
}
