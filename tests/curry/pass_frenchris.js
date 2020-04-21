const addSpace = (el) => (ele) => el.split(ele).join(ele + ' ')

const toUpper = (el) => (ele) => el.split(ele).join(ele.toUpperCase())

const curry = (el, fn) => fn(el)
