const double = (el) => el.forEach((num, index) => (el[index] = num * 2))

const alphabet = (el) =>
  el.forEach((e, i) => {
    let charset = 'abcdefghijklmnopqrstuvwxyz'
    if (e >= 1 && e < 27) el[i] = charset[e - 1]
    else el[i] = el[i] + 1
  })

let arr = [1, 2, 3, 4, [5, 6], [7, 8, 9], [10]]

const doubleTrouble = (el) =>
  el.forEach((num, index) =>
    Array.isArray(el[index])
      ? (el[index] = [...el[index], el[index][el[index].length - 1] * 2])
      : (el[index] = [num, num * 2])
  )
