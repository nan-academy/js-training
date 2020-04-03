const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const eras = {
  BC: 'Before Christ',
  AD: 'Anno Domini'
}

const weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const padding = (nbr, n) => String(nbr).padStart(n, '0')

const year = (date, form) =>
  /y{4}/.test(form)
    ? padding(Math.abs(date.getFullYear()), 4)
    : Math.abs(date.getFullYear())

const era = (date, form) =>
  /G{4}/.test(form)
    ? Math.sign(date.getFullYear()) == -1
      ? eras.BC
      : eras.AD
    : Math.sign(date.getFullYear()) == -1
    ? 'BC'
    : 'AD'

const monthF = (date, form) =>
  /\bM{2}\b/.test(form)
    ? padding(date.getUTCMonth() + 1, 2)
    : /\bM{3}\b/.test(form)
    ? months[date.getUTCMonth()].slice(0, 3)
    : /\bM{4}\b/.test(form)
    ? months[date.getUTCMonth()]
    : date.getUTCMonth() + 1

const day = (date, form) =>
  /d{2}/.test(form) ? padding(date.getUTCDate(), 2) : date.getUTCDate()

const week = (date, form) =>
  /E{4}/.test(form) ? weeks[date.getDay()] : weeks[date.getDay()].slice(0, 3)

const hours = (date, form) =>
  /h{2}/.test(form)
    ? padding(date.getHours() % 12, 2)
    : /H{2}/.test(form)
    ? padding(date.getHours(), 2)
    : /H/.test(form)
    ? date.getHours()
    : date.getHours() % 12

const minutes = (date, form) =>
  /m{2}/.test(form) ? padding(date.getMinutes(), 2) : date.getMinutes()

const seconds = (date, form) =>
  /s{2}/.test(form) ? padding(date.getSeconds(), 2) : date.getSeconds()

const format = (date, form) => {
  let result = form.split(/[^A-Za-z]/)
  for (let i = 0; i < result.length; i++) {
    // console.log(result[i])
    if (result[i].includes('y')) form = form.replace(/y+/, year(date, form))
    if (result[i].includes('G')) form = form.replace(/G+/, era(date, form))
    if (result[i].includes('M')) form = form.replace(/M+/, monthF(date, form))
    if (result[i].includes('d')) form = form.replace(/d+/, day(date, form))
    if (result[i].includes('E')) form = form.replace(/E+/, week(date, form))
    if (result[i].includes('h')) form = form.replace(/h+/, hours(date, form))
    if (result[i].includes('H')) form = form.replace(/H+/, hours(date, form))
    if (result[i].includes('m')) form = form.replace(/m+/, minutes(date, form))
    if (result[i].includes('s')) form = form.replace(/s+/, seconds(date, form))
    if (result[i].includes('a'))
      form = form.replace(/a/, date.getHours() > 12 ? 'PM' : 'AM')
  }

  return form
}
