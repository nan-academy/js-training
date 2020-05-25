const debounce = (func, wait, options = {}) => {
  let timeout = 0
  return function (...args) {
    let context = this
    let firstExec = options.leading || (options.leading && options.trailing)
    let nothing = Object.entries(options).length && !options.leading && !options.trailing

    let callNow = firstExec && !timeout
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = 0
      if (!firstExec && !nothing) {
        func.apply(context, args)
      }
    }, wait)
    if (callNow && !nothing) func.apply(context, args)
  }
}
