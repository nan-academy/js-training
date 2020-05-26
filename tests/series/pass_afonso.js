const series = async (arr) => {
  let res = []
  for (let value of arr) {
    res.push(await value())
  }
  return res
}
