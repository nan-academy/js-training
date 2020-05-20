const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'Jun',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const format = (date, format) => {
  let fields = {
    G: date.getFullYear() < 0 ? 'BC' : 'AD',
    GGGG: date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini',
    d: date.getDate(),
    dd: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    E: date.toString().split(' ')[0],
    EEEE: days[date.getDay()],
    M: date.getMonth() + 1,
    MM:
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1,
    MMM: date.toString().split(' ')[1],
    MMMM: months[date.getMonth()],
    y: date.getFullYear() < 0 ? date.getFullYear() * -1 : date.getFullYear(),
    yyyy:
      date.getFullYear() < 0
        ? date.toString().split(' ')[3].slice(1)
        : date.toString().split(' ')[3],
    H: date.getHours(),
    HH: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    h: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    m: date.getMinutes(),
    mm: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    s: date.getSeconds(),
    ss: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    a: date.getHours() < 12 ? 'AM' : 'PM',
  }
  fields['hh'] = fields['h'] < 10 ? `0${fields['h']}` : fields['h']

  let splforms = format.split(/( |\(|\)|\[|]|<|>|:|\/)/gm)
  for (let i = 0; i < splforms.length; i++) {
    for (let v in fields) {
      if (v === splforms[i]) {
        splforms[i] = fields[v]
      }
    }
  }
  return splforms.join('')
}
