let vowels = /[aeiou]/gi

const vowelDots = str => {
  let vowelsOrder = str.match(vowels)
  if (vowelsOrder === null) {
    return str
  }
  let s = str.split(vowels)
  let result = '', i = 0
  while (i < s.length) {
    result += s[i]
    if (i < vowelsOrder.length) {
      result += vowelsOrder[i] + '.'
    }
    i++
  }
  return result
}
