const chunk = (arr, size) => {
  let result = []
  let helper = []
  for (let i = 0; i < arr.length; i++) {
    helper.push(arr[i])
    if ((i + 1) % size === 0) {
      result.push(helper)
      helper = []
    }
  }
  if (helper.length !== 0) {
    result.push(helper)
  }
  return result
}
