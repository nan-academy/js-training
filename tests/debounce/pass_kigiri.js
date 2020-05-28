const debounce = (fn, limit) => {
  let t
  return (...args) => {
    clearTimeout(t)
    t = setTimeout(fn, limit, ...args)
  }
}

const opDebounce = (fn, limit, { leading } = {}) => {
  let t
  return (...args) => {
    if (!t && leading) {
      t = true
      fn(...args)
    }
    clearTimeout(t)
    t = setTimeout(fn, limit, ...args)
  }
}
