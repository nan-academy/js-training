const throttle = (callback, waitLimit, options = {}) => {
  let context, args, result
  let timeOut = 0
  let beginning = 0
  const timeEdge = () => {
    beginning = options.leading ? Date.now() : 0
    result = callback.apply(context, args)
  }
  // With normal javascript functions, `this` is bound when the function is called.
  // With arrow functions, `this` is bound to the context in which the function is originally created.
  // so we must not use the arrow function here
  return function () {
    let now = Date.now()
    if (!beginning && options.leading === false) beginning = now
    let remaining = waitLimit - (now - beginning)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > waitLimit) {
      beginning = now
      result = callback.apply(context, args)
    } else if (!timeOut && options.trailing) {
      timeOut = setTimeout(timeEdge, remaining)
    }
    return result
  }
}
