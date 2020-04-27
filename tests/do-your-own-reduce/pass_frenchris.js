const reducingArrays = (fn, el, acc) => {
  if (acc) {
    for (let e of el) {
      acc = fn(acc, e)
    }
    return acc
  }
  let answer = el[0]
  for (let i = 0; i < el.length - 1; i++) {
    answer = fn(answer, el[i + 1])
  }
  return answer
}
