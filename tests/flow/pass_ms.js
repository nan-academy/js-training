const flow = (...fun) => (...res) => {
  let out = fun[0](...res)
  for (let i = 1; i < fun.length; i++) out = fun[i](out)
  res.shift()
  return out
}
