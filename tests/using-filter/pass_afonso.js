const isVowel = (c) => ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
const beginsVowel = (str) => isVowel(str[0])
const returnVowels = (str) =>
  [...str].filter((s) => isVowel(s)).map((l) => l.toLowerCase())
const checkEquals = (arr) => arr.every((v) => v === arr[0])

const filterShortStateName = (arr) => arr.filter((str) => str.length < 7)
const filterStartVowel = (arr) => arr.filter((str) => beginsVowel(str))
const filter5Vowels = (arr) =>
  arr.filter((str) => returnVowels(str).length >= 5)
const filter1DistinctVowel = (arr) =>
  arr.filter((str) => checkEquals(returnVowels(str)))
const multiFilter = (arr) =>
  arr.filter(
    (obj) =>
      obj['capital'].length >= 8 &&
      !beginsVowel(obj['name']) &&
      returnVowels(obj['tag']).length >= 1 &&
      obj['region'] !== 'South'
  )
