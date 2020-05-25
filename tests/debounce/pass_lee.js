const debounce = (callback, wait) => {
  let timeout = 0
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), wait)
  }
}

const opDebounce = (callback, wait, options = {}) => {
  let timeout = 0
  let firstExec = options.leading || (options.leading && options.trailing)
  let nothing =
    Object.entries(options).length && !options.leading && !options.trailing
  return (...args) => {
    let callNow = firstExec && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = 0
      if (!firstExec && !nothing) {
        callback(...args)
      }
    }, wait)
    if (callNow && !nothing) callback(...args)
  }
}
