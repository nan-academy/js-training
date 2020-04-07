const flat = (arr, nbr = 1) => {
  let result = [],
    a = arr
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(a[i])) {
      if (nbr > 0) {
        result.push(...flat(arr[i], nbr - 1))
      } else {
        result.push(arr[i])
      }
    } else {
      result.push(arr[i])
    }
  }
  return result
}
