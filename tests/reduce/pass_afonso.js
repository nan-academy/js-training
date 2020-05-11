const foldr = (arr, f, acc) => {
  if (!arr.length) {
    return acc
  } else {
    const head = arr[arr.length - 1]
    const tail = arr.slice(0, arr.length - 1)
    return foldr(tail, f, f(acc, head))
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

const reducingArray = (reducer, array, initialValue) => {
  let value
  if (initialValue === undefined) {
    switch (typeof array[0]) {
      case 'number':
        value = 0
        break
      case 'string':
        value = ''
        break
      case 'object':
        value = {}
        break
    }
  } else {
    value = initialValue
  }
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    value = reducer(value, currentValue)
  }
  return value
}
