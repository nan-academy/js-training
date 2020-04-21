const foldl = (f, acc, arr) => {
  if (!arr.length) {
    return acc
  } else {
    const head = arr[0]
    const tail = arr.slice(1)
    return foldl(f, f(acc, head), tail)
  }
}
