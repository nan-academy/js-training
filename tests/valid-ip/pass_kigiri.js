const findIP = (data) =>
  data.match(
    /((25[0-5]|2[0-4]?\d|1\d\d?|\d)\.){3}(25[0-5]|2[0-4]?\d|1\d\d?|\d)(:\d+|\b)/g
  )
