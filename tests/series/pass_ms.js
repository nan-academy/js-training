const series = async (obj) => {
  const res = []
  for (let v of Object.values(obj)) {
    res.push(await v())
  }
  return res
}
