let dp = Array(200)
let res = []
const save = (idx) => {
  let helper = []
  for (let i = 1; i < idx; i++) {
    helper.push(dp[i])
  }
  res.push(helper)
}

const solve = (remSum, maxVal, idx, count) => {
  if (remSum === 0) {
    save(idx)
    count++
    return
  }
  for (let i = maxVal; i >= 1; i--) {
    if (i <= remSum) {
      dp[idx] = i
      solve(remSum - i, i, idx + 1, count)
    }
  }
}

const sums = (nbr) => {
  dp = Array(200)
  res = []
  if (nbr === 0 || nbr === 1) return []
  solve(nbr, nbr - 1, 1, 0)
  return res.map((v) => v.sort())
}
