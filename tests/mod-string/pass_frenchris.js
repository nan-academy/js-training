const addSpace = (el) => (ele) => el.split(ele).join(ele + ' ')

const toUpper = (el) => (ele) => el.split(ele).join(ele.toUpperCase())

const modString = (el, fn) => fn(el)
