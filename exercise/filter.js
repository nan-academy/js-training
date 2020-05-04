/*
## Filter

### Instructions


1) Create a function 'filterStartVowel' that takes an array of strings
and that returns only the ones that start with a vowel (a,e,i,o,u).

2) Create a function 'filter5Vowels' that takes an array of strings
and that returns only the ones which contain at least 5
vowels (a,e,i,o,u).

3) Create a function 'filter1DistinctVowel' that takes an array of
strings and that returns only the ones which contain 1 distinct
vowel (a,e,i,o,u).

Example: Alabama only contains 'a'.

4) Create a function 'filterIndexOdd' that takes an array of strings
and that returns only the ones which index in the array is odd and
which do not start with a vowel.


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
  return { filterCalls }
}

const check = (el, count) => (el.length > count ? true : false)

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

t(({ eq }) =>
  eq(filterStartVowel(arr1), [
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

t(({ eq, ctx }) => eq(check(ctx.filterCalls, 0), true))

t(({ eq }) =>
  eq(filter5Vowels(arr1), [
    'California',
    'Louisiana',
    'North carolina',
    'South carolina',
    'South dakota',
    'West virginia',
  ])
)

t(({ eq, ctx }) => eq(check(ctx.filterCalls, 1), true))

t(({ eq }) =>
  eq(filter1DistinctVowel(arr1), [
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New jersey',
    'Tennessee',
  ])
)

t(({ eq, ctx }) => eq(check(ctx.filterCalls, 2), true))

t(({ eq }) =>
  eq(filterIndexOdd(arr1), [
    'Colorado',
    'Delaware',
    'Georgia',
    'Kansas',
    'Louisiana',
    'Maryland',
    'Michigan',
    'Mississippi',
    'Montana',
    'Nevada',
    'New jersey',
    'New york',
    'North dakota',
    'Pennsylvania',
    'South carolina',
    'Tennessee',
    'Virginia',
    'West virginia',
    'Wyoming',
  ])
)

t(({ eq, ctx }) => eq(check(ctx.filterCalls, 3), true))

Object.freeze(tests)
