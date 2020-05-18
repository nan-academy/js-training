const invert = (obj) =>
  Object.entries(obj).reduce((o, [key, value]) => ({ ...o, [value]: key }), {})
