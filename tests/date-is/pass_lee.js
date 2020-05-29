const isValid = (date) =>
  (Object.prototype.toString.call(date) === '[object Date]' ||
    (Object.prototype.toString.call(date) === '[object Number]' &&
      !isNaN(date))) &&
  date.toString() !== 'Invalid Date'

const isFuture = (date) => isValid(date) && date >= Date.now()
const isPast = (date) => isValid(date) && date <= Date.now()

const isAfter = (date, date1) => isValid(date) && isValid(date1) && date > date1
const isBefore = (date, date1) =>
  isValid(date) && isValid(date1) && date < date1
