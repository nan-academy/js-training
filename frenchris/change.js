const get = keyWanted => {
  for (let [key, value] of Object.entries(sourceObject))
    if (keyWanted === key) return value
}

const set = (keyWanted, newValue) => {
  let exist = 0
  for (let [key] of Object.entries(sourceObject))
    if (keyWanted === key) {
      sourceObject[keyWanted] = newValue
      exist = 1
    }
  if (exist === 0) sourceObject[keyWanted] = newValue
  return newValue
}
