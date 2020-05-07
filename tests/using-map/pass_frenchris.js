const citiesOnly = (el) => el.map((el) => el.city)

const upperCasingStates = (el) =>
  el
    .map((el) => el.split(' '))
    .map((arr) => arr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`))
    .map((el) => el.join(' '))

const farenheitToCelsius = (el) =>
  el
    .map((e) => Number(e.slice(0, -2)))
    .map((e) => e - 32)
    .map((e) => e * 5)
    .map((e) => e / 9)
    .map((e) => Math.floor(e))
    .map((e) => `${String(e)}°C`)

const trimTemp = (obj) =>
  obj.map(({ temperature, ...el }) => ({
    ...el,
    temperature: temperature.split(' ').join(''),
  }))

const formatObject = (obj) =>
  trimTemp(obj).map(({ state, temperature, ...el }) => ({
    ...el,
    state: upperCasingStates([state])[0],
    temperature: farenheitToCelsius([temperature])[0],
  }))

const tempForecasts = (obj) => {
  let data = formatObject(obj)
  return data.map((el) => `${el.temperature}elsius in ${el.city}, ${el.state}`)
}
