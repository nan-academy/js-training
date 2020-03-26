const emailType = str => {
  let arr = []
  var myRegexp = /\w+(?:[\.-]?\w+)*(@\w+)(?:[\.-]?\w+)*(?:\.\w{2,3})/g
  var match = myRegexp.exec(str)
  if (match != null) {
    arr.push(match[0])
    arr.push(match[1])
    return arr
  }
  return arr
}
