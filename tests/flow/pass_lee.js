const flow = (...funcs) => (...args) => {
  let result = 0
  result = funcs[0](...args)
  for (let i = 1; i < funcs.length; i++) {
    result = funcs[i](result)
    args.shift()
  }
  return result
}
