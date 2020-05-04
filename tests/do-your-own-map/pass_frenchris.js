const map = (el, fn) => {
  let result = []
  for (let i in el) result.push(fn(el[i], i, el))
  return result
}

const flatMap = (el, fn) => map(el, fn).flat()
