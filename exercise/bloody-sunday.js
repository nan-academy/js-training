/*
## Bloody Sunday

### Instructions

You were missioned to make the world more productive.
Your solution ? no more sundays,
you are ask to remove them from the existing calendar.

So now, a week is 6 days from monday to saturday.

To prove your point, create a `bloodySunday` function
that return what week day the given date is.

> note that the 01/01/0001 is still a monday.

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => bloodySunday(new Date('0001-01-01')) === 'Monday')
t(() => bloodySunday(new Date('0001-01-02')) === 'Thuesday')
t(() => bloodySunday(new Date('0001-01-03')) === 'Wednesday')
t(() => bloodySunday(new Date('0001-01-04')) === 'Thursday')
t(() => bloodySunday(new Date('0001-01-05')) === 'Friday')
t(() => bloodySunday(new Date('0001-01-06')) === 'Saturday')
t(() => bloodySunday(new Date('0001-01-07')) === 'Monday')

t(() => bloodySunday(new Date('0001-12-01')) === 'Friday')
t(() => bloodySunday(new Date('1664-08-09')) === 'Saturday')

t(() => bloodySunday(new Date('2020-01-01')) === 'Monday')
t(() => bloodySunday(new Date('2048-12-08')) === 'Thursday')

Object.freeze(tests)
