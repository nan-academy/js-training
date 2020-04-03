const chunk = (arr, ch) => {
  let result = []
  for (let i = 0; i < arr.length; i += ch) {
    result.push(arr.slice(i, i + ch))
  }
  return result
}
