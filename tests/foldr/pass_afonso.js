const foldr = (f, acc, arr) => {
  if (!arr.length) {
    return acc
  } else {
    const head = arr[arr.length - 1]
    const tail = arr.slice(0, arr.length - 1)
    return foldr(f, f(acc, head), tail)
  }
}
