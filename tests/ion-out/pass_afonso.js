const ionOut = str => {
  let regex = /\w+t(?=ion)/g
  let result = str.match(regex)
  if (result === null){
    return []
  }
  return result
}
