const pick = (o, keys) => {
  const result = {}
  for (var k in o) keys.includes(k) ? (result[k] = o[k]) : {}
  return result
}
