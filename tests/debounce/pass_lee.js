const debounce = (callback, wait, options = {}) => {
  let timeout = 0
  return (...args) => {
    let firstExec = options.leading || (options.leading && options.trailing)
    let nothing = Object.entries(options).length && !options.leading && !options.trailing

    let callNow = firstExec && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = 0
      if (!firstExec && !nothing) {
        callback(...args)
      }
    }, wait)
    if (callNow && !nothing) callback(...args)
  }
}

