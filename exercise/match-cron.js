/*
## Match Cron

### Instructions

Create a function called `matchCron` it takes a valid cron schedule string
and a valid date. \
It returns true if the date match the pattern

> You only have to implement numbers and `*`. \
> other complex patterns are not required.

Only valid pattern will be tested.

### Example

```js
matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 standing for Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)
```


### Notions

- https://crontab.guru/
- https://devdocs.io/javascript/global_objects/date

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(() => matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
t(() => matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
t(() => matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))
t(() => matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
t(() => matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
t(() => matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
t(() => matchCron('* * * * *', new Date()))
t(({ ctx }) => matchCron('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))

t(() => !matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))
t(() => !matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
t(() => !matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')))
t(() => !matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')))
t(() => !matchCron('1 * * * *', new Date('2020-05-30 19:00:00')))
t(() => !matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')))
t(({ ctx }) => !matchCron('* 7 * * *', new Date(`201${ctx}-01-01 06:00:00`)))

Object.freeze(tests)

export const setup = () => Math.ceil(Math.random() * 9)
