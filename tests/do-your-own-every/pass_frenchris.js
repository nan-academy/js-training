const Every = (arr, func) => {
  for (let el of arr) if (!func(el)) return false
  return true
}
