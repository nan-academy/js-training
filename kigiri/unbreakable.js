const split = (str, sep) => {
  const r = []
  let curr = '',
    i = -1
  while (++i < str.length) {
    const c = str[i]
    let j = 0
    while (true) {
      if (str[i + j] !== sep[j]) {
        curr += c
        break
      }
      if (j >= sep.length - 1) {
        r.push(curr)
        curr = ''
        i += j
        break
      }
      j++
    }
  }
  r.push(curr)
  return r
}

const join = (words, sep) => {
  let ret = '',
    i = -1
  while (++i < words.length) ret += i ? `${sep}${words[i]}` : words[i]
  return ret
}
