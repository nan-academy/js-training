const all = async (pObj) => {
  let result = {}
  for (let [k, v] of Object.entries(pObj)) {
    result[k] = await v
  }
  return result
}
