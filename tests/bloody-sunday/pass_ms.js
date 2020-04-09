const days = [
  'Saturday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
]
const bloodySunday = (date) => {
  let year = date.getUTCFullYear()
  let month = date.getUTCMonth()
  let day = date.getUTCDate()
  let newd = new Date()
  newd.setFullYear(year, month, day)
  let fd = new Date()
  fd.setFullYear(1, 0, 1)

  let nbr = 1
  while (fd.getTime() !== newd.getTime()) {
    fd.setDate(fd.getDate() + 1)
    nbr++
    if (nbr === 6) {
      nbr = 0
    }
  }
  return days[nbr]
}
