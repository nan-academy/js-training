/*
## Unicode Technical Report 35

### Subject

Implement a `format` function that takes 2 arguments:
- a valid javascript Date object
- a format string that handle all of the following fields:
  - y
  - yyyy
  - G
  - GGGG
  - M
  - MM
  - MMM
  - MMMM
  - d
  - dd
  - E
  - EEEE
  - h
  - hh
  - m
  - mm
  - s
  - ss
  - H
  - HH
  - a


### Notions

- https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const landing = new Date('July 20, 1969, 20:17:40 UTC')
const returning = new Date('July 21, 1969, 17:54:12 UTC')
const eclipse = new Date(-585, 4, 28)
const ending = new Date('2 September 1945, 9:02:14')

// year
t(({ eq }) => eq(format(eclipse, 'y'), '585'))
t(({ eq }) => eq(format(landing, 'y'), '1969'))
t(({ eq }) => eq(format(eclipse, 'yyyy'), '0585'))
t(({ eq }) => eq(format(landing, 'yyyy'), '1969'))
t(({ eq }) => eq(format(eclipse, 'yyyy G'), '0585 BC'))
t(({ eq }) => eq(format(landing, 'yyyy G'), '1969 AD'))
t(({ eq }) => eq(format(eclipse, 'yyyy GGGG'), '0585 Before Christ'))
t(({ eq }) => eq(format(landing, 'yyyy GGGG'), '1969 Anno Domini'))

// month
t(({ eq }) => eq(format(eclipse, 'M'), '5'))
t(({ eq }) => eq(format(eclipse, 'MM'), '05'))
t(({ eq }) => eq(format(eclipse, 'MMM'), 'May'))
t(({ eq }) => eq(format(eclipse, 'MMMM'), 'May'))
t(({ eq }) => eq(format(landing, 'M'), '7'))
t(({ eq }) => eq(format(landing, 'MM'), '07'))
t(({ eq }) => eq(format(landing, 'MMM'), 'Jul'))
t(({ eq }) => eq(format(landing, 'MMMM'), 'July'))
t(({ eq }) => eq(format(ending, 'M'), '9'))
t(({ eq }) => eq(format(ending, 'MM'), '09'))
t(({ eq }) => eq(format(ending, 'MMM'), 'Sep'))
t(({ eq }) => eq(format(ending, 'MMMM'), 'September'))

// day
t(({ eq }) => eq(format(landing, 'd'), '20'))
t(({ eq }) => eq(format(ending, 'd'), '2'))
t(({ eq }) => eq(format(landing, 'dd'), '20'))
t(({ eq }) => eq(format(ending, 'dd'), '02'))
t(({ eq }) => eq(format(landing, 'E'), 'Sun'))
t(({ eq }) => eq(format(returning, 'E'), 'Mon'))
t(({ eq }) => eq(format(landing, 'EEEE'), 'Sunday'))
t(({ eq }) => eq(format(returning, 'EEEE'), 'Monday'))

// time
t(({ eq }) => eq(format(landing, 'H:m:s'), '22:17:40'))
t(({ eq }) => eq(format(landing, 'HH:mm:ss'), '22:17:40'))
t(({ eq }) => eq(format(landing, 'h:m:s a'), '10:17:40 PM'))
t(({ eq }) => eq(format(landing, 'hh:mm:ss a'), '10:17:40 PM'))
t(({ eq }) => eq(format(returning, 'H:m:s'), '19:54:12'))
t(({ eq }) => eq(format(returning, 'HH:mm:ss'), '19:54:12'))
t(({ eq }) => eq(format(returning, 'h:m:s a'), '7:54:12 PM'))
t(({ eq }) => eq(format(returning, 'hh:mm:ss a'), '07:54:12 PM'))
t(({ eq }) => eq(format(ending, 'H:m:s'), '9:2:14'))
t(({ eq }) => eq(format(ending, 'HH:mm:ss'), '09:02:14'))
t(({ eq }) => eq(format(ending, 'h:m:s a'), '9:2:14 AM'))
t(({ eq }) => eq(format(ending, 'hh:mm:ss a'), '09:02:14 AM'))

// mix
t(({ eq }) => eq(format(ending, 'HH(mm)ss [dd] <MMM>'), '09(02)14 [02] <Sep>'))
t(({ eq }) => eq(format(ending, 'dd/MM/yyyy'), '02/09/1945'))

Object.freeze(tests)
