const longWords = (arr) => arr.every(x => x.length >= 5)
const oneLongWord = (arr) => arr.some(x => x.length >= 10)
const noLongWords = (arr) => arr.every(x => x.length < 7)