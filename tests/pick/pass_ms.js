const pick = (o, keys) => {
  const result = {}
  for (let [k, v] of Object.entries(o)) keys.includes(k) ? (result[k] = v) : {}
  return result
}
