async function all(obj) {
  const ret = {}
  for (let [key, value] of Object.entries(obj)) {
    ret[key] = await value
  }
  return ret
}
