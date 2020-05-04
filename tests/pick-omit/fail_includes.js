const pick = (obj, k) =>
  Object.fromEntries(Object.entries(obj).filter(([key, v]) => k.includes(key)))
