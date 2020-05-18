const isPronoun = (str) =>
  str.match(/(\b(s?he|it|you|i|they|we)\b)/gim) !== null

const pronoun = (str) => {
  const arr = str.split(/,*[\s.]+/g)
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    if (isPronoun(arr[i])) {
      if (!(arr[i].toLowerCase() in res)) {
        res[arr[i].toLowerCase()] = {
          word: (i !== arr.length - 1 && !isPronoun(arr[i + 1])) ? [arr[i + 1]] : [],
          count: 1
        }
      } else {
        i !== arr.length - 1 && !isPronoun(arr[i + 1]) && res[arr[i].toLowerCase()].word.push(arr[i + 1])
        res[arr[i].toLowerCase()].count++
      }
    }
  }
  return res
}
