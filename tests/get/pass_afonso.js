const get = (src, path) => {
  var parts = path.split('.')
  if (parts.length === 1) {
    return src[path]
  }
  if (Array.isArray(parts)) {
    var last = parts.pop(),
      l = parts.length,
      i = 1,
      current = parts[0]

    while ((src = src[current]) && i < l) {
      current = parts[i]
      i++
    }

    if (src) {
      return src[last]
    }
  }
}
