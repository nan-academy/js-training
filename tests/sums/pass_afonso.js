/*
const sumer = (a, b) => a + b;

const sums = (n) => {
  if (n === 0 || n === 1) {
    return []
  }
  if (n === 2) {
    return [[1, 1]]
  }
  let wantedArrs = []
  for (let j = 2; j < n; j++) {
    wantedArrs.push(findProds(n, j))
  }
  wantedArrs = wantedArrs.reduce((a, b) => a.concat(b))
  for (let i = 0; i < wantedArrs.length; i++) {
    wantedArrs[i].sort()
  }
  wantedArrs.push(Array(n).fill(1))
  return removeDup(wantedArrs)
}

const removeDup = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    while (j < arr.length) {
      if (JSON.stringify(arr[i]) === JSON.stringify(arr[j])) {
        arr.splice(j, 1)
      } else {
        j++
      }
    }
  }
  return arr
}

const findProds = (n, size) => {
  let i = 1, helper = [], result = [];
  while (result.length <= n) {
    helper.push(i)
    if (helper.length === size) {
      if (helper.reduce(sumer) === n) {
        result.push(helper.slice())
        i = helper[helper.length - 2] + 1
        helper.splice(-2)
      } else if (helper.reduce(sumer) > n) {
        helper.splice(-size)
        i++
      } else {
        i++
        helper.splice(-1)
      }
    } else {
      if (i > 1) {
        i = 1
      }
    }
  }
  return result
}
*/
const all = (n) =>
  [...Array(n + 1).keys()]
    .slice(1)
    .reduce((s, x) => [...s, [x], ...all(n - x).map((t) => [t, x])], [])

const sums = (n) =>
  [...new Set(all(n)
    .map((n) => n.flat(Infinity).sort().join('.')))]
    .map(n => n.split('.').map(Number))
    .filter((r) => r.length > 1 && r.reduce((a, b) => a + b) === n)
