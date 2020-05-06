const map = (el, fn) => {
  let result = []
  for (let i in el) result.push(fn(el[i], i, el))
  return result
}

const flat = (el) => (Array.isArray(el) ? [...el] : el)
const flatMap = (el, fn) => flat(map(el, fn))
