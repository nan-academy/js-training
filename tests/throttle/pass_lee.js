let timeOut = 0
const throttle = (callback, waitLimit = 0, options = {}) => {
  let context
  options =
    !Object.keys(options).length || options.trailing || options.leading
      ? { leading: true, trailing: false }
      : { ...options }
  // With normal javascript functions, `this` is bound when the function is called.
  // With arrow functions, `this` is bound to the context in which the function is originally created.
  // so we must not use the arrow function
  return function (...args) {
    context = this
    if (!timeOut) {
      timeOut = setTimeout(() => {
        if (options.trailing) callback.apply(context, args)
        timeOut = 0
      }, waitLimit)
      if (!options.trailing && options.leading) callback.apply(context, args)
    }
  }
}
