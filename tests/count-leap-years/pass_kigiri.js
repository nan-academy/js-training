const countLeapYears = (d) => {
  const y = d.getFullYear() - 1
  return Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
}