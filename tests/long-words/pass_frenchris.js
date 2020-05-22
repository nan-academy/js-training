const longWords = arr => arr.every(el => el.length >= 5)

const oneLongWord = arr => arr.some(el => el.length >= 10)

const noLongWords = arr => !arr.some(el => el.length >= 7)
