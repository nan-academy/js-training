function chunk(arr, size) {
  var results = []

  while (arr.length) {
    results.push(arr.splice(0, size))
  }

  return results
}
