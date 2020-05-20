// we will do this using __callbacks and setTimeout!__
let timeOut = 0
const throttle = (callback, limit = 0) => {
  const a = () => {
    if (!timeOut) {
      timeOut = setTimeout(() => (timeOut = 0), limit)
      return callback()
    }
  }
  return a()
}

/// creating a function to pass in the throttling function
const call = () => 'get me a drink'
