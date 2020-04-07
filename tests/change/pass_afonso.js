const get = (key) => sourceObject[key]

const set = (key, value) => {
  sourceObject[key] = value
  return get(key)
}
