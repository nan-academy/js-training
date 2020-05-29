const debounce = (callback, wait) => {
  let timeout = 0
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), wait)
  }
}

const opDebounce = (callback, wait, options = {}) => {
  let timeout = 0
  return (...args) => {
    let callNow = options.leading && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), wait)
    if (callNow) callback(...args)
  }
}
