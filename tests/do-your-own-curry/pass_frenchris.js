const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...extraArg) => curry(fn, ...args, ...extraArg)
