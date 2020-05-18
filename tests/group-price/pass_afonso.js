const groupPrice = (str) => {
  const regex = /(\$|USD)[0-9]+.[0-9]+/gim
  let match = regex.exec(str)
  let dollars = 0,
    cents = 0,
    res = []
  while (match != null) {
    let money =
      match[0][0] === '$'
        ? match[0].substr(1).split('.')
        : match[0].substr(3).split('.')
    res.push([match[0], money[0], money[1]])
    match = regex.exec(str)
  }
  return res
}
