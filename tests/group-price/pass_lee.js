const groupPrice = (str) => {
  let first = str.split(/[a-z]+ /gi).join('').split(' ')
  let result = []
  if (!/USD|\$/.test(first)) return result
  for (let price of first) {
    let inner = []
    inner.push(price.replace(/\.$/, ''))
    for (let div of price.split(/(?:\$|USD)(\d+)\.(\d+)/g)) {
      if (div && div !== '.') inner.push(div)
    }
    result.push(inner)
  }
  return result
}

