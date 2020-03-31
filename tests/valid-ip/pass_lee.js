const findIP = str => {
  let regex = /((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|1\d\d|2[0-4]*\d|25[0-5])(:\d+|\b)/g
  return str.match(regex)
}
