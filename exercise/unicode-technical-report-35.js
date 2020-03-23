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

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

const landing = new Date('July 20, 1969, 20:17:40 UTC')
const returning = new Date('July 21, 1969, 17:54:12 UTC')
const eclipse = new Date(-585, 4, 28)
const ending = new Date('2 September 1945, 9:02:14')

// year
t(() => format(eclipse, 'y') === '585')
t(() => format(landing, 'y') === '1969')
t(() => format(eclipse, 'yyyy') === '0585')
t(() => format(landing, 'yyyy') === '1969')
t(() => format(eclipse, 'yyyy G') === '0585 BC')
t(() => format(landing, 'yyyy G') === '1969 AD')
t(() => format(eclipse, 'yyyy GGGG') === '0586 Before Christ')
t(() => format(landing, 'yyyy GGGG') === '1969 Anno Domini')

// month
t(() => format(eclipse, 'M') === '5')
t(() => format(eclipse, 'MM') === '05')
t(() => format(eclipse, 'MMM') === 'May')
t(() => format(eclipse, 'MMMM') === 'May')
t(() => format(landing, 'M') === '7')
t(() => format(landing, 'MM') === '07')
t(() => format(landing, 'MMM') === 'Jul')
t(() => format(landing, 'MMMM') === 'July')
t(() => format(ending, 'M') === '9')
t(() => format(ending, 'MM') === '09')
t(() => format(ending, 'MMM') === 'Sep')
t(() => format(ending, 'MMMM') === 'September')

// day
t(() => format(landing, 'd') === '20')
t(() => format(ending, 'd') === '2')
t(() => format(landing, 'dd') === '20')
t(() => format(ending, 'dd') === '02')
t(() => format(landing, 'E') === 'Sun')
t(() => format(returning, 'E') === 'Mon')
t(() => format(landing, 'EEEE') === 'Sunday')
t(() => format(returning, 'EEEE') === 'Monday')

// time
t(() => format(landing, 'H:m:s') === '21:17:40')
t(() => format(landing, 'HH:mm:ss') === '21:17:40')
t(() => format(landing, 'h:m:s a') === '9:17:40 PM')
t(() => format(landing, 'hh:mm:ss a') === '09:17:40 PM')
t(() => format(returning, 'H:m:s') === '18:54:12')
t(() => format(returning, 'HH:mm:ss') === '18:54:12')
t(() => format(returning, 'h:m:s a') === '6:54:12 PM')
t(() => format(returning, 'hh:mm:ss a') === '06:54:12 PM')
t(() => format(ending, 'H:m:s') === '9:2:14')
t(() => format(ending, 'HH:mm:ss') === '09:02:14')
t(() => format(ending, 'h:m:s a') === '9:2:14 AM')
t(() => format(ending, 'hh:mm:ss a') === '09:02:14 AM')

// mix
t(() => format(ending, 'HH(mm)ss [dd] <MMM>') === '09(02)14 [02] <Sep>')
t(() => format(ending, 'dd/MM/yyyy') === '02/09/1945')

Object.freeze(tests)
