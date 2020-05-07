const partition = (arr, fn) => {
  let i = -1
  const yes = []
  const no = []
  while (++i < arr.length) (fn(arr[i], i, arr) ? yes : no).push(arr[i])
  return [yes,no]
}

const filter = (arr, fn) => partition(arr, fn)[0]
const reject = (arr, fn) => partition(arr, fn)[1]