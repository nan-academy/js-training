const days = [
  'Saturday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const countLeapYears = date => {
  let i = date.getFullYear()
  let count = 0
  for (let init = 1; init < i; init++) {
    if (
      (init % 4 == 0 && init % 100 != 0) ||
      (init % 4 == 0 && init % 100 == 0 && init % 400 == 0)
    ) {
      count++
    }
  }
  return count
}

const dayOfTheYear = date => {
  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let count = 0

  for (let i = 0; i < month; i++) {
    if (i == 1) {
      count += countLeapYears(date) ? 29 : 28
    } else {
      // month of august
      count += i >= 7 ? (i % 2 == 0 ? 30 : 31) : i % 2 == 0 ? 31 : 30
    }
  }
  count += day
  return count
}

const bloodySunday = date => days[getWeek(date)]

// first day of the year 1 is saturday??
const getWeek = date => {
  let year = date.getFullYear()
  let fullDays =
    year == 0
      ? year * 365 + countLeapYears(date) + dayOfTheYear(date)
      : (year - 1) * 365 + countLeapYears(date) + dayOfTheYear(date)
  return fullDays % 6
}
