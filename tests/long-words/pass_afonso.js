const longWords = (arr) => arr.every((str) => str.length >= 5)
const oneLongWord = (arr) => arr.some((str) => str.length >= 10)
const noLongWords = (arr) => arr.every((str) => str.length < 7)
