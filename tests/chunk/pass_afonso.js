const chunk = (arr, size) => {
  let results = []
  while (arr.length) {
    results.push(arr.splice(0, size))
  }
  return results
}
