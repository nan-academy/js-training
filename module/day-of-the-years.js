/*
## Day of the Year

### Instructions

Make a `dayOfTheYear` functions that takes a date
and returns the number of days since the first day of that year

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => dayOfTheYear(new Date('0001-01-01')) === 1)
t(() => dayOfTheYear(new Date('1664-08-09')) === 222)
t(() => dayOfTheYear(new Date('1600-12-31')) === 366)
t(() => dayOfTheYear(new Date('2020-06-22')) === 174)
t(() => dayOfTheYear(new Date('2048-12-08')) === 343)

Object.freeze(tests)
