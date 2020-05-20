const vowels = /[aeiou]/gi
const vowelDots = (str) => str.replace(vowels, (s) => s + `.`)
