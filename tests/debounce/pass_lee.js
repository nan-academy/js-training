const debounce = (callback, wait) => {
  let timeout = 0
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), wait)
  }
}

const opDebounce = (callback, wait, options = {}) => {
  let timeout = 0
  let nothing = Object.entries(options).length && !options.leading
  return (...args) => {
    let callNow = options.leading && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = 0
      if (!options.leading && !nothing) {
        callback(...args)
      }
    }, wait)
    if (callNow && !nothing) callback(...args)
  }
}
