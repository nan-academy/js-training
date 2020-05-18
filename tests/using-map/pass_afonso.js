const wordsToUpper = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ')
const convertCtoF = (n) =>
  Math.floor(((n.substring(0, n.length - 2) - 32) * 5) / 9) + '°C'
const joinObjs = (o1, o2) => {
  return { ...o1, ...o2 }
}

const citiesOnly = (arr) => arr.map((x) => x['city'])
const upperCasingStates = (arr) => arr.map((str) => wordsToUpper(str))
const farenheitToCelsius = (arr) => arr.map((n) => convertCtoF(n))
const trimTemp = (arr) =>
  arr.map((x) =>
    joinObjs(x, { temperature: x['temperature'].split(' ').join('') })
  )
const tempForecasts = (arr) =>
  trimTemp(arr).map(
    (obj) =>
      convertCtoF(obj['temperature']) +
      'elsius in ' +
      obj['city'] +
      ', ' +
      wordsToUpper(obj['state'])
  )
