const citiesOnly = (arr) => arr.map((ele) => ele.city)

const capitalize = (words) =>
  words
    .split(' ')
    .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
    .join(' ')

const upperCasingStates = (arr) => arr.map(capitalize)

const farenheitToCelsius = (arr) =>
  arr
    .map((ele) => Number(ele.slice(0, -2)))
    .map((ele) => Math.floor(((ele - 32) * 5) / 9) + `°C`)

const trimTemp = (arr) =>
  arr.map(({ temperature, ...ele }) => ({
    ...ele,
    temperature: temperature.split(' ').join(''),
  }))

const tempForecasts = (arr) =>
  arr.map(
    (ele) =>
      farenheitToCelsius([
        trimTemp([{ temperature: ele.temperature }])[0].temperature,
      ]) + `elsius in ${ele.city}, ${upperCasingStates([ele.state])}`
  )
