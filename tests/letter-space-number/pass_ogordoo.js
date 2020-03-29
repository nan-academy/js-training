const letterSpaceNumber = a =>{
  let result = a.match(/\w\s\d\b/g)
  console.log("result : ",result)
  if (result === null) {
    return []
  }
  return result
}
