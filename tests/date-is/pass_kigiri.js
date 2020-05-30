const isValid = (d) => typeof d === 'number'
  ? !isNaN(d)
  : d instanceof Date && !isNaN(d)

const isBefore = (a, b) => a < b
const isAfter = (a, b) => b < a
const isFuture = (a) => new Date() < a
const isPast = (a) => a && new Date() > a
