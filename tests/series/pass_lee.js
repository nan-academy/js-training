const series = async (arr) => {
  let result = []
  for (let v of arr) {
    result.push(await v())
  }
  return result
}
