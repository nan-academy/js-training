const longWords = (arr) => arr.every((str) => str.length > 4)
const oneLongWord = (arr) => arr.some((str) => str.length > 9)
const noLongWords = (arr) => arr.every((str) => str.length < 7)
