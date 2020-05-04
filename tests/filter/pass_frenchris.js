const vowelsPresent = (el) => {
  let charset = ['a', 'e', 'i', 'o', 'u']
  let result = [...Array(5)].map((el) => false)
  for (let e of el)
    for (let i in charset) if (charset[i] === e) result[i] = true
  return result.filter((el) => el === true).length
}

const countVowels = (el) => {
  let charset = ['a', 'e', 'i', 'o', 'u']
  let result = 0
  for (let e of el) for (let i in charset) if (charset[i] === e) result++
  return result
}

const isFirstVowel = (el) => {
  let charset = ['a', 'e', 'i', 'o', 'u']
  for (let i in charset) if (charset[i] === el[0]) return true
  return false
}

const midFunc = (el, func) =>
  el
    .map((el) => el.toLowerCase().split(''))
    .filter(func)
    .map((el) => el.join(''))
    .map((el) => `${el[0].toUpperCase()}${el.slice(1)}`)

const filterStartVowel = (el) => midFunc(el, isFirstVowel)
const filter5Vowels = (el) => midFunc(el, (el) => countVowels(el) >= 5)
const filter1DistinctVowel = (el) =>
  midFunc(el, (el) => vowelsPresent(el) === 1)

const filterNotStartVowel = (el) => midFunc(el, (el) => !isFirstVowel(el))
const filterIndexOdd = (el) =>
  filterNotStartVowel(el.filter((el, i) => i % 2 !== 0))
