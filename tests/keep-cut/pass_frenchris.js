const cutFirst = el => el.slice(2)
const cutLast = el => el.slice(0, -2)
const cutFirstLast = el => el.slice(2, -2)

const keepFirst = el => el.slice(0, 2)
const keepLast = el => el.slice(el.length - 2, el.length)
const keepFirstLast = el =>
        el.length > 4 ? `${keepFirst(el)}${keepLast(el)}` : el
