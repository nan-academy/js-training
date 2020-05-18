const pick = (obj, str) => {
  let res = {}
  if (typeof str === 'string') {
    if (obj.hasOwnProperty(str)) {
      res[str] = obj[str]
    }
  } else {
    str.forEach((s) => {
      if (obj.hasOwnProperty(s)) res[s] = obj[s]
    })
  }
  return res
}

const omit = (obj, str) => {
  let res = {...obj}
  if (typeof str === 'string') {
    if (obj.hasOwnProperty(str)) {
      delete res[str]
    }
  } else {
    str.forEach((s) => {
      if (obj.hasOwnProperty(s)) delete res[s]
    })
  }
  return res
}
