const map = (arr, f) =>
  arr.reduce((acc, cr, i) => acc.push(f(cr, i, arr)) && acc, [])

const flatMap = (arr, f) => flat(map(arr, f))

const flat = (arr, depth = 1) => {
    if (depth < 1) return arr
    let result = []
    map(arr, (ele => {
      if (!Array.isArray(ele)) result.push(ele)
      else result.push(...flat(ele, depth - 1))
    }))
    return result
  }