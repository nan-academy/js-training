let timeOut = 0
const throttle = (callback, limit) => {
  return (...args) => {
    if (!timeOut) {
      timeOut = setTimeout(() => (timeOut = 0), limit)
      callback(...args)
    }
  }
}

const opThrottle = (callback, waitLimit, options = {}) => {
  let result
  let beginning = 0
  return (...args) => {
    let now = Date.now()
    if (!beginning && options.leading === false) beginning = now
    let remaining = waitLimit - (now - beginning)
    if (remaining <= 0 || remaining > waitLimit) {
      beginning = now
      result = callback(...args)
    } else if (!timeOut && options.trailing) {
      timeOut = setTimeout(() => {
        beginning = options.leading ? Date.now() : 0
        result = callback(...args)
      }, remaining)
    }
    return result
  }
}
