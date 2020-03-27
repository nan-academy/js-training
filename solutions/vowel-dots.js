let vowels = /[aeiou]/g

const vowelDots = str => {
  console.log("typeof : ", typeof vowels === typeof /s/g)
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
  console.log(vowelsOrder, s, result)
}
