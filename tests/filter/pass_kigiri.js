const filterShortStateName = (arr) => arr.filter((state) => state.length < 7)
const filterStartVowel = (arr) =>
  arr.filter((state) => /[AEIOU]/g.test(state[0]))

const filter5Vowels = (arr) =>
  arr.filter((state) => state.match(/[AEIOU]/gi).length > 4)

const filter1DistinctVowel = (arr) =>
  arr.filter((state) =>
    state
      .toUpperCase()
      .match(/[AEIOU]/g)
      .every((c, _, [first]) => c === first)
  )

const multiFilter = (arr) =>
  arr
    .filter((state) => state.capital.length > 7)
    .filter((state) => !/[AEIOU]/.test(state.name[0]))
    .filter((state) => /[AEIOU]/i.test(state.tag))
    .filter((state) => state.region !== 'South')