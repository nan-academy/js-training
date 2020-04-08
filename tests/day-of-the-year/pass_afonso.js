const countLeapYears = (date) => {
  let year = date.getFullYear()
  return (
    (year % 4 == 0 && year % 100 != 0) ||
    (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
  )
}

const dayOfTheYear = (date) => {
  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let count = 0

  for (let i = 0; i < month; i++) {
    if (i === 1) {
      count += countLeapYears(date) ? 29 : 28
    } else {
      count += (i % 2 === 0 && i <= 6) || (i % 2 !== 0 && i > 6) ? 31 : 30
    }
  }
  count += day
  console.log(count)
  return count
}
