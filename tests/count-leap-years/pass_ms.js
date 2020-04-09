const countLeapYears = (years) => {
  const year = years.getUTCFullYear()
  let res = (year * 97) / 400
  return Math.floor(res)
}
