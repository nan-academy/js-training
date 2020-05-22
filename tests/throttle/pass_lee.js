const throttle = (callback, waitLimit = 0, options = {}) => {
  let timeOut = 0
  let beginning = options.leading && !options.trailing ? Date.now() : 0
  options = !Object.keys(options).length
    ? { leading: true, trailing: true }
    : { ...options }
  // With normal javascript functions, `this` is bound when the function is called.
  // With arrow functions, `this` is bound to the context in which the function is originally created.
  // so we must not use the arrow function here
  return function (...args) {
    let now = Date.now()
    let remaining = (now - beginning) - waitLimit
    let context = this
    if (!timeOut) {
      timeOut = setTimeout(() => {
        if (
          (options.trailing && !options.leading) ||
          (!options.trailing && options.leading && !remaining)
        )
          callback.apply(context, args)
        timeOut = 0
      }, waitLimit)
      if (options.trailing && options.leading) callback.apply(context, args)
    }
  }
}

