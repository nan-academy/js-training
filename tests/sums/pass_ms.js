const parts = Array(200)
let res = []

const printPart = (n) => {
  let helper = []
  for (let i = 1; i < n; i++) {
    helper.push(parts[i])
  }
  res.push(helper)
}

const algoSolver = (reslt, val, i, count) => {
  if (reslt === 0) {
    printPart(i)
    count++
    return
  }
  for (let j = val; j >= 1; j--) {
    if (j <= reslt) {
      parts[i] = j
      algoSolver(reslt - j, j, i + 1, count)
    }
  }
}
const sums = (n) => {
  res = []
  if (!n) return []
  algoSolver(n, n - 1, 1, 0)
  return res.map((v) => v.sort())
}
