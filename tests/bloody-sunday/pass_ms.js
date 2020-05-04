const days = [
  'Saturday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
]

const newWeek = (date) => {
  let year = date.getFullYear()
  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let days= (Date.UTC(year, month, day) - Date.UTC(year, 0, 0)) / 24 / 60 / 60 / 1000
  let leap = Math.floor((year * 97) / 400)
  if (year == 0) {
  return (year * 365 + leap + days) % 6 
  } else {
  return ((year - 1) * 365 + leap + days) % 6 
  }
}

const bloodySunday = (date) => days[newWeek(date)]
