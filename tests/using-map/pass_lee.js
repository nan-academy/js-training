const citiesOnly = (arr) => arr.map((ele) => ele.city)
const upperCasingStates = (arr) =>
  arr.map((ele) =>
    ele
      .split(' ')
      .map((e) => e[0].toUpperCase() + e.slice(1))
      .join(' ')
  )

const farenheitToCelsius = (arr) =>
  arr.map((ele) => `${Math.floor((Number(ele.slice(0, -2)) - 32) * (5 / 9))}°C`)

const trimTemp = (arr) =>
  arr.map(({ temperature, ...ele }) => ({
    ...ele,
    temperature: temperature.replace(/\s/g, ''),
  }))

const tempForecasts = (arr) =>
  arr.map(
    (ele) =>
      `${farenheitToCelsius([
        trimTemp([{ temperature: ele.temperature }])[0].temperature,
      ])}elsius in ${ele.city}, ${upperCasingStates([ele.state])}`
  )
