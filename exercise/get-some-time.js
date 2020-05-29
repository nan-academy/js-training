/*
## Get Some Time

### Instructions

Create a function `firstDayWeek` that receives a week of the year
(from 1 to 53) and a year (as a string), and returns the first day
of that week, in the format: 'dd-mm-yyyy'.

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({eq}) => eq(firstDayWeek(1,'1000'), '01-01-1000'))

t(({eq}) => eq(firstDayWeek(52,'1000'), '22-12-1000'))

t(({eq}) => eq(firstDayWeek(2,'0001'), '08-01-0001'))

t(({eq}) => eq(firstDayWeek(43,'1983'), '17-10-1983'))

t(({eq}) => eq(firstDayWeek(23,'0091'), '04-06-0091'))

Object.freeze(tests)
