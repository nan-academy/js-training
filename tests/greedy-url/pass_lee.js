const getURL = data => {
  let regex = /https*:\/\/\S+/g
  return data.match(regex)
}

const greedyQuery = data => {
  let regex = /https*:\/\/\S+\?(\S+=\S+\&*){3,}/g
  return data.match(regex)
}

const notSoGreedy = data => {
  let regex = /https*:\/\/\S+\?(\w+=[^&\r\n\t\f\v ]+&*){2,3}/g
  let result = data.match(regex)
  for (let i = 0; i < result.length; i++) {
    if (result[i].charAt(result[i].length - 1) == '&') {
      result.splice(i, 1)
      i = i - 1
    }
  }
  return result
}
