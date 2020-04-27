/*
## pronoun

### Instruction

Create a function called `pronoun` that has a string as parameter. This function returns an object 
that will have all the pronouns, present in the string, as keys. Each key will have a sub object with the 
first word after each of the pronouns found in the string.
Also, a property `count` must be added, to the sub object, with the amount of occurrences of the pronoun.

#### Example

```js
const ex = 'Using Array Destructuring, you can iterate through objects easily.'

{ you: { word: [ 'can' ], count: 1 } }

const ex = 'If you want to buy something you have to pay.'

{ you: { word: [ 'want', 'have' ], count: 2 } }

```

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(pronoun(''), {}))
t(({ eq }) => eq(pronoun($pronoun0), {}))
t(({ eq }) => eq(pronoun($pronoun1), $resultPronoun1))
t(({ eq }) => eq(pronoun($pronoun2), $resultPronoun2))
t(({ eq }) =>
  eq(pronoun('we will rock you'), {
    we: { word: ['will'], count: 1 },
    you: { word: [], count: 0 },
  })
)

Object.freeze(tests)

const $pronoun0 = `Your reducer function's
returned value is assigned to the accumulator,
whose value is remembered
across each iteration throughout the
array and ultimately becomes the final,
single resulting value.`

const $pronoun1 = `
 I buy
 i to
 you buy
 he buys
 she buys
 it buys
 it buys
 it buys
 it buys
 we buy
 you buy
 they buy`

const $resultPronoun1 = {
  i: { word: ['buy', 'to'], count: 2 },
  you: { word: ['buy', 'buy'], count: 2 },
  he: { word: ['buys'], count: 1 },
  she: { word: ['buys'], count: 1 },
  it: { word: ['buys', 'buys', 'buys', 'buys'], count: 4 },
  we: { word: ['buy'], count: 1 },
  they: { word: ['buy'], count: 1 },
}

const $pronoun2 = `
 The conjugator allows you to conjugate any verb as
 long as it corresponds
 to an existing conjugation model.
 They may be imaginary verbs, they may contain
 spelling mistakes or often be buzz verbs,
 not yet aggregated to our conjugation
 tables like google, crowdfund, retweet.
 `

const $resultPronoun2 = {
  you: { word: ['to'], count: 1 },
  it: { word: ['corresponds'], count: 1 },
  they: { word: ['may', 'may'], count: 2 },
}
