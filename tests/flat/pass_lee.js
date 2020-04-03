const flat = (arr, depth = 1) => {
  if (depth < 1) return arr
  let result = []
  arr.map(ele => {
    if (!Array.isArray(ele)) result.push(ele)
    else result.push(...flat(ele, depth - 1))
  })
  return result
}
