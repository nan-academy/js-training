const all = async obj => {
  const result = {}
  for (const [k, v] of Object.entries(obj)) {
    result[k] = await v
  }
  return result
}