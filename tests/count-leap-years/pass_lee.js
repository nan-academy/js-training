const countLeapYears = date => {
  let i = date.getFullYear()
  return countYear(i, 1)
}

const countYear = (i, init) =>
  i == init
    ? 0
    : (init % 4 == 0 && init % 100 != 0) ||
      (init % 4 == 0 && init % 100 == 0 && init % 400 == 0)
    ? 1 + countYear(i, init + 1)
    : countYear(i, init + 1)
