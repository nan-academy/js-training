const countLeapYears = (date) => {
  let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    counter = 0
  for (let i = 1; i < year; i++) {
    if (
      (i % 4 === 0 && i % 100 === 0 && i % 400 === 0) ||
      (i % 4 === 0 && i % 100 !== 0)
    ) {
      counter++
    }
  }
  return counter
}
