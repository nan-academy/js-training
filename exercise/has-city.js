/*
## Has City

### Instruction

Create a function `hasCity` that given a country and an array of cities
of that country and it returns whether a city is part of that country or not.

If it is, it should be returned '<city> is a city from <country>', otherwise
'<city> is not a city from <country>.'

 */
// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

const isFrenchCity = (city) =>
  hasCity('France', [
    'Bordeaux',
    'Paris',
    'Lille',
    'Lyon',
    'Marseille',
    'Saint-Étienne',
  ])(city)

const isAmericanCity = (city) =>
  hasCity('America', [
    'New York',
    'Chicago',
    'San Francisco',
    'Washington DC',
    'Los Angeles',
  ])(city)

const isChineseCity = (city) =>
  hasCity('China', [
    'Beijing',
    'Shanghai',
    'Wuhan',
    'Shenzhen',
    'Tianjin',
    'Chengdu',
  ])(city)

t(({ eq }) => eq(isFrenchCity('Lisbon'), 'Lisbon is not a city from France'))
t(({ eq }) => eq(isFrenchCity('Lille'), 'Lille is a city from France'))
t(({ eq }) => eq(isFrenchCity('Chengdu'), 'Chengdu is not a city from France'))
t(({ eq }) => eq(isFrenchCity('Paris'), 'Paris is a city from France'))

t(({eq})=> eq(isAmericanCity('Manchester'), 'Manchester is not a city from America'))
t(({eq})=> eq(isAmericanCity('New York'), 'New York is a city from America'))
t(({eq})=> eq(isAmericanCity(''), ' is not a city from America'))
t(({eq})=> eq(isAmericanCity('Los Angeles'), 'Los Angeles is a city from America'))

t(({eq})=> eq(isChineseCity('Wuhan'), 'Wuhan is a city from China'))
t(({eq})=> eq(isChineseCity('Tokyo'), 'Tokyo is not a city from China'))
t(({eq})=> eq(isChineseCity('Seul'), 'Seul is not a city from China'))
t(({eq})=> eq(isChineseCity('Beijing'), 'Beijing is a city from China'))
Object.freeze(tests)
