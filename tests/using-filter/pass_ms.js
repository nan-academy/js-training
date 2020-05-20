const filterShortStateName = (arr) => arr.filter((ele) => ele.length < 7)

const isVowel = /[AEIOUaeiou]/g

const filterStartVowel = (arr) => {
  return arr.filter((ele) => ele[0].match(isVowel))
}

const filter5Vowels = (arr) =>
  arr.filter((ele) => ele.match(isVowel).length >= 5)

const multiFilter = (arr) =>
  arr.filter(
    (ele) =>
      ele.capital.length > 7 &&
      !/[aeiou]/i.test(ele.name[0]) &&
      /[aeiou]/i.test(ele.tag) &&
      ele.region !== 'South'
  )

const find = (ele, letter) =>
  ele
    .split(/[^aeiou]/i)
    .join('')
    .split(new RegExp(letter, 'i'))
    .join('')

const filter1DistinctVowel = (arr) =>
  arr.filter((ele) => {
    return (
      !find(ele, 'a') ||
      !find(ele, 'e') ||
      !find(ele, 'i') ||
      !find(ele, 'o') ||
      !find(ele, 'u')
    )
  })
