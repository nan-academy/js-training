/*
## Has City

### Instruction

Create a function `hasCity` that given a country and an array of cities
of that country and it returns whether a city is part of that country or not.

If it is, it should be returned `<city> is a city from <country>`, otherwise
`<city> is not a city from <country>.`

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// create specialized functions
t(
  ({ ctx }) => {
    ctx.isFrench = hasCity('France', [
      'Bordeaux',
      'Paris',
      'Lille',
      'Lyon',
      'Marseille',
      'Saint-Étienne',
    ])
    ctx.isUS = hasCity('the US', [
      'New York',
      'Chicago',
      'San Francisco',
      'Washington DC',
      'Los Angeles',
    ])
    ctx.isChinese = hasCity('China', [
      'Beijing',
      'Shanghai',
      'Wuhan',
      'Shenzhen',
      'Tianjin',
      'Chengdu',
    ])
    return true
})

t(({ eq, ctx }) => eq(ctx.isChinese('Beijing'), 'Beijing is a city from China'))
t(({ eq, ctx }) => eq(ctx.isFrench('Lille'), 'Lille is a city from France'))
t(({ eq, ctx }) => eq(ctx.isUS('New York'), 'New York is a city from the US'))
t(({ eq, ctx }) => eq(ctx.isChinese('Tokyo'), 'Tokyo is not a city from China'))
t(({ eq, ctx }) => eq(ctx.isFrench('Paris'), 'Paris is a city from France'))
t(({ eq, ctx }) => eq(ctx.isUS('Abidjan'), 'Abidjan is not a city from the US'))
t(({ eq, ctx }) => eq(ctx.isChinese('Seul'), 'Seul is not a city from China'))
t(({ eq, ctx }) => eq(ctx.isUS(''), ' is not a city from the US'))
t(({ eq, ctx }) => eq(ctx.isChinese('Wuhan'), 'Wuhan is a city from China'))

t(({ eq, ctx }) =>
  eq(ctx.isFrench('Lisbon'), 'Lisbon is not a city from France')
)

t(({ eq, ctx }) =>
  eq(ctx.isUS('Los Angeles'), 'Los Angeles is a city from the US')
)

t(({ eq, ctx }) =>
  eq(ctx.isFrench('Chengdu'), 'Chengdu is not a city from France')
)

Object.freeze(tests)