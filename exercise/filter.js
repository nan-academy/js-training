/*
## Filter

### Instructions


1) Create a function 'filterShortStateName' that takes an array of
strings and that returns the ones with less than 7 characters.

Example: 'Iowa' only contains 4 characters

2) Create a function 'filterStartVowel' that takes an array of strings
and that returns only the ones that start with a vowel (a,e,i,o,u).

Example: 'Alabama' starts with a vowel

3) Create a function 'filter5Vowels' that takes an array of strings
and that returns only the ones which contain at least 5
vowels (a,e,i,o,u).

Example: 'California' countains at least 5 vowels

4) Create a function 'filter1DistinctVowel' that takes an array of
strings and that returns only the ones which vowels are of only
one distinct one (a,e,i,o,u).

Example: Alabama only contains 1 disctinct vowels 'a'.

5) Create a function 'multiFilter' that takes an array of
objects and that returns only the ones which:

-the key `capital` contains at least 7 characters.
-the key `name` does not start with a vowel
-the key `abbreviation` has at least one vowel.
-the key `region` is not `South`

Example of an array of objects matching the criterias:

[
  {
    name: 'California',
    capital: 'Sacramento',
    abbreviation: 'CA',
    region: 'West'
  },
  {
    name: 'Pennsylvania',
    capital: 'Harrisburg',
    abbreviation: 'PA',
    region: 'Northeast'
  }
]

### Notions

- filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

// Monkey patching to check that filter will be used.

export const setup = () => {
  const filterCalls = []
  const _filter = Array.prototype.filter
  Array.prototype.filter = function () {
    filterCalls.push(this)
    return _filter.apply(this, arguments)
  }
  let arr1 = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  let arr2 = [
    {
      name: 'Alabama',
      capital: 'Montgomery',
      abbreviation: 'AL',
      region: 'South',
    },
    {
      name: 'Alaska',
      capital: 'Juneau',
      abbreviation: 'AK',
      region: 'West',
    },
    {
      name: 'Arizona',
      capital: 'Phoenix',
      abbreviation: 'AZ',
      region: 'West',
    },
    {
      name: 'Arkansas',
      capital: 'Little Rock',
      abbreviation: 'AR',
      region: 'South',
    },
    {
      name: 'California',
      capital: 'Sacramento',
      abbreviation: 'CA',
      region: 'West',
    },
    {
      name: 'Colorado',
      capital: 'Denver',
      abbreviation: 'CO',
      region: 'West',
    },
    {
      name: 'Connecticut',
      capital: 'Hartford',
      abbreviation: 'CT',
      region: 'Northeast',
    },
    {
      name: 'Delaware',
      capital: 'Dover',
      abbreviation: 'DE',
      region: 'South',
    },
    {
      name: 'District Of Columbia',
      capital: 'Washington',
      abbreviation: 'DC',
      region: 'South',
    },
    {
      name: 'Florida',
      capital: 'Tallahassee',
      abbreviation: 'FL',
      region: 'South',
    },
    {
      name: 'Georgia',
      capital: 'Atlanta',
      abbreviation: 'GA',
      region: 'South',
    },
    {
      name: 'Hawaii',
      capital: 'Honolulu',
      abbreviation: 'HI',
      region: 'West',
    },
    {
      name: 'Idaho',
      capital: 'Boise',
      abbreviation: 'ID',
      region: 'West',
    },
    {
      name: 'Illinois',
      capital: 'Springfield',
      abbreviation: 'IL',
      region: 'Midwest',
    },
    {
      name: 'Indiana',
      capital: 'Indianapolis',
      abbreviation: 'IN',
      region: 'Midwest',
    },
    {
      name: 'Iowa',
      capital: 'Des Moines',
      abbreviation: 'IA',
      region: 'Midwest',
    },
    {
      name: 'Kansas',
      capital: 'Topeka',
      abbreviation: 'KS',
      region: 'Midwest',
    },
    {
      name: 'Kentucky',
      capital: 'Frankfort',
      abbreviation: 'KY',
      region: 'South',
    },
    {
      name: 'Louisiana',
      capital: 'Baton Rouge',
      abbreviation: 'LA',
      region: 'South',
    },
    {
      name: 'Maine',
      capital: 'Augusta',
      abbreviation: 'ME',
      region: 'Northeast',
    },
    {
      name: 'Maryland',
      capital: 'Annapolis',
      abbreviation: 'MD',
      region: 'South',
    },
    {
      name: 'Massachusetts',
      capital: 'Boston',
      abbreviation: 'MA',
      region: 'Northeast',
    },
    {
      name: 'Michigan',
      capital: 'Lansing',
      abbreviation: 'MI',
      region: 'Midwest',
    },
    {
      name: 'Minnesota',
      capital: 'St. Paul',
      abbreviation: 'MN',
      region: 'Midwest',
    },
    {
      name: 'Mississippi',
      capital: 'Jackson',
      abbreviation: 'MS',
      region: 'South',
    },
    {
      name: 'Missouri',
      capital: 'Jefferson City',
      abbreviation: 'MO',
      region: 'Midwest',
    },
    {
      name: 'Montana',
      capital: 'Helena',
      abbreviation: 'MT',
      region: 'West',
    },
    {
      name: 'Nebraska',
      capital: 'Lincoln',
      abbreviation: 'NE',
      region: 'Midwest',
    },
    {
      name: 'Nevada',
      capital: 'Carson City',
      abbreviation: 'NV',
      region: 'West',
    },
    {
      name: 'New Hampshire',
      capital: 'Concord',
      abbreviation: 'NH',
      region: 'Northeast',
    },
    {
      name: 'New Jersey',
      capital: 'Trenton',
      abbreviation: 'NJ',
      region: 'Northeast',
    },
    {
      name: 'New Mexico',
      capital: 'Santa Fe',
      abbreviation: 'NM',
      region: 'West',
    },
    {
      name: 'New York',
      capital: 'Albany',
      abbreviation: 'NY',
      region: 'Northeast',
    },
    {
      name: 'North Carolina',
      capital: 'Raleigh',
      abbreviation: 'NC',
      region: 'South',
    },
    {
      name: 'North Dakota',
      capital: 'Bismarck',
      abbreviation: 'ND',
      region: 'Midwest',
    },
    {
      name: 'Ohio',
      capital: 'Colombus',
      abbreviation: 'OH',
      region: 'Midwest',
    },
    {
      name: 'Oklahoma',
      capital: 'Oklahoma City',
      abbreviation: 'OK',
      region: 'South',
    },
    {
      name: 'Oregon',
      capital: 'Salem',
      abbreviation: 'OR',
      region: 'West',
    },
    {
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      abbreviation: 'PA',
      region: 'Northeast',
    },
    {
      name: 'Rhode Island',
      capital: 'Providence',
      abbreviation: 'RI',
      region: 'Northeast',
    },
    {
      name: 'South Carolina',
      capital: 'Columbia',
      abbreviation: 'SC',
      region: 'South',
    },
    {
      name: 'South Dakota',
      capital: 'Pierre',
      abbreviation: 'SD',
      region: 'Midwest',
    },
    {
      name: 'Tennessee',
      capital: 'Nashville',
      abbreviation: 'TN',
      region: 'South',
    },
    {
      name: 'Texas',
      capital: 'Austin',
      abbreviation: 'TX',
      region: 'South',
    },
    {
      name: 'Utah',
      capital: 'Salt Lake City',
      abbreviation: 'UT',
      region: 'West',
    },
    {
      name: 'Vermont',
      capital: 'Montpelier',
      abbreviation: 'VT',
      region: 'Northeast',
    },
    {
      name: 'Virginia',
      capital: 'Richmond',
      abbreviation: 'VA',
      region: 'South',
    },
    {
      name: 'Washington',
      capital: 'Olympia',
      abbreviation: 'WA',
      region: 'West',
    },
    {
      name: 'West Virginia',
      capital: 'Charleston',
      abbreviation: 'WV',
      region: 'South',
    },
    {
      name: 'Wisconsin',
      capital: 'Madison',
      abbreviation: 'WI',
      region: 'Midwest',
    },
    {
      name: 'Wyoming',
      capital: 'Cheyenne',
      abbreviation: 'WY',
      region: 'West',
    },
  ]
  return { filterCalls, arr1, arr2 }
}

const check = (el, count, arr) =>
  el.length >= count && el.includes(arr) ? true : false

// 1) filterShortStateName
// 1st check
t(({ eq, ctx }) =>
  eq(filterShortStateName(ctx.arr1), [
    'Alaska',
    'Hawaii',
    'Idaho',
    'Iowa',
    'Kansas',
    'Maine',
    'Nevada',
    'Ohio',
    'Oregon',
    'Texas',
    'Utah',
  ])
)

// 2nd check (use of filter)
t(({ eq, ctx }) => eq(check(ctx.filterCalls, 1, ctx.arr1), true))

// 2) filterStartVowel
// 1st check
t(({ eq, ctx }) =>
  eq(filterStartVowel(ctx.arr1), [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Utah',
  ])
)

//2nd check (use of filter)
t(({ eq, ctx }) => eq(check(ctx.filterCalls, 2, ctx.arr1), true))

// 3) filter5vowels
// 1st check

t(({ eq, ctx }) =>
  eq(filter5Vowels(ctx.arr1), [
    'California',
    'Louisiana',
    'North Carolina',
    'South Carolina',
    'South Dakota',
    'West Virginia',
  ])
)

//2nd check (use of filter)
t(({ eq, ctx }) => eq(check(ctx.filterCalls, 3, ctx.arr1), true))

// 4) filter1DistinctVowel
// 1st check

t(({ eq, ctx }) =>
  eq(filter1DistinctVowel(ctx.arr1), [
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
  ])
)

//2nd check (use of filter)
t(({ eq, ctx }) => eq(check(ctx.filterCalls, 4, ctx.arr1), true))

// 5) multiFilter
// 1st check

t(({ eq, ctx }) =>
  eq(multiFilter(ctx.arr2), [
    {
      name: 'California',
      capital: 'Sacramento',
      abbreviation: 'CA',
      region: 'West',
    },
    {
      name: 'Hawaii',
      capital: 'Honolulu',
      abbreviation: 'HI',
      region: 'West',
    },
    {
      name: 'Missouri',
      capital: 'Jefferson City',
      abbreviation: 'MO',
      region: 'Midwest',
    },
    {
      name: 'Pennsylvania',
      capital: 'Harrisburg',
      abbreviation: 'PA',
      region: 'Northeast',
    },
    {
      name: 'Rhode Island',
      capital: 'Providence',
      abbreviation: 'RI',
      region: 'Northeast',
    },
  ])
)
//2nd check (use of filter)
t(({ eq, ctx }) => eq(check(ctx.filterCalls, 5, ctx.arr2), true))

Object.freeze(tests)
