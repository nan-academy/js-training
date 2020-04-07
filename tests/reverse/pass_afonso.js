const reverse = (vari) => {
  if (typeof vari === 'string') {
    let result = ''
    for (let i = vari.length - 1; i >= 0; i--) {
      console.log(i, vari[i])
      result += vari[i]
    }
    return result
  } else {
    let result = []
    for (let i = vari.length - 1; i >= 0; i--) {
      result.push(vari[i])
    }
    return result
  }
}
