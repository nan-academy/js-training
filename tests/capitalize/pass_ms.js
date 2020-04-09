const capitalize = (str) => {
  let s = ''
  for (let i = 0; i < str.length; i++) {
    s = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
  return s
}
