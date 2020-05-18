const neuron = (arr) => {
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    let twoDots = arr[i].split(':')
    let mainKey = twoDots[0].toLowerCase()
    let firstValue = twoDots[1].split(' - ')[0].slice(1)
    let secondKey = firstValue
      .replace(/\!|\?/g, '')
      .replace(/ /g, '_')
      .toLowerCase()
    let response = twoDots[2].slice(1)
    if (!res[mainKey]) {
      res[mainKey] = {}
      res[mainKey][secondKey] = {}
      res[mainKey][secondKey][mainKey.slice(0, -1)] = firstValue
      res[mainKey][secondKey]['responses'] = [response]
    } else if (!res[mainKey][secondKey]) {
      res[mainKey][secondKey] = {}
      res[mainKey][secondKey][mainKey.slice(0, -1)] = firstValue
      res[mainKey][secondKey]['responses'] = [response]
    } else {
      res[mainKey][secondKey]['responses'].push(response)
    }
  }
  return res
}
