const map = (arr, f) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(f(arr[i],i,arr))
  }
  return res
}

Array.prototype.flat = function(depth = 1, stack = []) {
    for (let item of this) {
      if (item instanceof Array && depth > 0) {
        item.flat(depth - 1, stack)
      } else {
        stack.push(item)
      }
    }
    return stack
}
const flatMap = (arr, f) => map(arr, f).flat()
