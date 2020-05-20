const getURL = (data) => data.match(/https*:\/\/\S+/g)

const greedyQuery = (data) => data.match(/https*:\/\/\S+\?(\S+=\S+\&*){3,}/g)

const notSoGreedy = (data) => {
  let res = data.match(/https*:\/\/\S+\?(\w+=[^&\r\n\t\f\v ]+&*){2,3}/g)
  for (let i = 0; i < res.length; i++) {
    if (res[i].charAt(res[i].length - 1) == '&') {
      res.splice(i, 1)
      i = i - 1
    }
  }
  return res
}
