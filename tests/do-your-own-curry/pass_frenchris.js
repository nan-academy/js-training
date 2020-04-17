const Curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...extraArg) => Curry(fn, ...args, ...extraArg)
