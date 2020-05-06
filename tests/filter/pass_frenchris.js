const filterShortStateName = (arr) => arr.filter((word) => word.length < 7)

const isVowel = (letter) =>
  ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())

const filterStartVowel = (arr) => arr.filter((word) => isVowel(word[0]))

const countVowels = (word) => {
  let result = 0
  for (let letter of word) if (isVowel(letter)) result++
  return result
}

const filter5Vowels = (arr) => arr.filter((word) => countVowels(word) >= 5)

const vowelsPresent = (word) => {
  let charset = ['a', 'e', 'i', 'o', 'u']
  let result = [...Array(5)]
  for (let letter of word.toLowerCase())
    for (let i = 0; i < charset.length; i++)
      if (charset[i] === letter) result[i] = true
  return result.filter((el) => el === true).length
}

const filter1DistinctVowel = (arr) =>
  arr.filter((word) => vowelsPresent(word) === 1)

const multiFilter = (arr) =>
  arr.filter(
    (el) =>
      el.capital.length > 7 &&
      !isVowel(el.name[0]) &&
      countVowels(el.abbreviation) >= 1 &&
      el.region !== 'South'
  )
