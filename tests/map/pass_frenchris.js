const map = (el, fn) => {
  let result = []
  for (const [i, val] of el.entries()) result.push(fn(val, i, el))
  return result
}

const flat = (el) => (Array.isArray(el) ? [...el] : el)
const flatMap = (el, fn) => flat(map(el, fn))
