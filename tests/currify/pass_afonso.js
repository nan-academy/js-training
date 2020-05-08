function currify(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f(...args)
    } else {
      return function (a) {
        return curried(...[...args, a])
      }
    }
  }
}
