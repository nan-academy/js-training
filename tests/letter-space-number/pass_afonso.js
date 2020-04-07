const letterSpaceNumber = (a) => {
  let result = a.match(/\w\s\d\b/g)
  if (result === null) {
    return []
  }
  return result
}
