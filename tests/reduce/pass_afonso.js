const foldRight = (arr, f, acc) => {
  if (!arr.length) {
    return acc
  } else {
    const head = arr[arr.length - 1]
    const tail = arr.slice(0, arr.length - 1)
    return foldRight(tail, f, f(acc, head))
  }
}

const fold = (arr, f, acc) => {
  if (!arr.length) {
    return acc
  } else {
    const head = arr[0]
    const tail = arr.slice(1)
    return fold(tail, f, f(acc, head))
  }
}

const reduce = (array, reducer) => {
  let value =
    typeof array[0] === 'string' ? '' : typeof array[0] === 'number' ? 0 : {}
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    value = reducer(value, currentValue)
  }
  return value
}

const reduceRight = (array, reducer) => {
  let value =
    typeof array[0] === 'string' ? '' : typeof array[0] === 'number' ? 0 : {}
  for (let i = array.length - 1; i >= 0; i--) {
    let currentValue = array[i]
    value = reducer(value, currentValue)
  }
  return value
}
