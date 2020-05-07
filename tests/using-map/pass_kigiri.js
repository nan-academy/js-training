const citiesOnly = (arr) => arr.map((el) => el.city)
const capitalize = (s) => `${s[0].toUpperCase()}${s.slice(1)}`
const capitalizeAll = (el) => el.split(' ').map(capitalize).join(' ')
const upperCasingStates = (arr) => arr.map(capitalizeAll)
const toC = (t) => `${Math.floor(((t.split('°')[0] - 32) * 5) / 9)}°C`
const farenheitToCelsius = (temps) => temps.map(toC)

const trimTemp = (states) =>
  states.map((s) => ({ ...s, temperature: s.temperature.replace(/\s+/g, '') }))

const tempForecasts = (states) =>
  states.map((s) => {
    const state = capitalizeAll(s.state)
    return `${toC(s.temperature.trim())}elsius in ${s.city}, ${state}`
  })
