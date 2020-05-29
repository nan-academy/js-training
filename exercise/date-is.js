/*
## Is

### Instructions

Create the following functions:
- `isValid`, this function must return false if its an Invalid Date
- `isAfter`, this function will receive two dates and return true if the first date is bigger then the second date
- `isBefore`, this function will receive two dates and return true if the first date is lesser then the second date
- `isFuture`, will return true if the date given as parameter is higher then the present date
- `isPast`, will return true if the date given as parameter less then the present date

### Notions

- https://date-fns.org/v2.14.0/docs/isValid
- https://date-fns.org/v2.14.0/docs/isAfter
- https://date-fns.org/v2.14.0/docs/isBefore
- https://date-fns.org/v2.14.0/docs/isFuture
- https://date-fns.org/v2.14.0/docs/isPast

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// is the date a valid date?
const invalid = (callback) =>
  [new Date(''), new Date(NaN), '', '2013-01-01', NaN]
    .map((el) => !callback(el))
    .includes(false)

// isValid
t(() => !invalid(isValid))
// true
t(() => isValid(new Date()))
t(() => isValid(Date.now()))
t(() => isValid(new Date('December 17, 1995 03:24:00')))
t(() => isValid(new Date(1488370835081)))
t(() => isValid(new Date('1995-12-17T03:24:00')))
t(() => isValid(new Date('1995-12-17T03:24:00').getTime()))

// isFuture
t(() => !invalid(isFuture))
// false
t(() => !isFuture(new Date('1992-01-01')))
t(() => !isFuture(new Date(Date.now() - 1)))
// true
t(() => isFuture(new Date(2021, 11, 31)))
t(() => isFuture(new Date(Date.now() + 1)))

// isPast
t(() => !invalid(isPast))
// false
t(() => !isPast(new Date(Date.now() + 1)))
t(() => !isPast(new Date(2021, 11, 31)))
// true
t(() => isPast(new Date(1442, 11, 31)))
t(() => isPast(new Date(Date.now() - 1)))

// isAfter
t(() => !isAfter('2021-11-31', '2020-11-31'))
t(() => !isAfter(new Date(NaN), new Date(NaN)))
t(() => !isAfter(new Date(''), new Date('')))
t(() => !isAfter('', ''))
// false
t(() => !isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
t(() => !isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
// true
t(() => isAfter(new Date(2321, 11, 21), new Date(Date.now())))
t(() => isAfter(123123, 526))

// isBefore
t(() => !isBefore('2021-11-31', '2020-11-31'))
t(() => !isBefore(new Date(NaN), new Date(NaN)))
t(() => !isBefore(new Date(''), new Date('')))
t(() => !isBefore('', ''))
// false
t(() => !isBefore(new Date(2321, 11, 21), new Date(Date.now())))
t(() => !isBefore(123123, 526))
// true
t(() => isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
t(() => isBefore(new Date('1992-01-01'), new Date('1992-01-02')))

Object.freeze(tests)
