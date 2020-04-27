/*
## pronoun

### Instruction

Create a function called `pronoun` that has as parameters a string and returns an object. 
This object will have all the pronouns as keys and a sub object with the 
word in front of the pronouns and a property `count` with the amount of occurrences .

#### Example

```js
const ex = 'Using Array Destructuring, you can iterate through objects easily.'

{ you: { next: [ 'can' ], count: 1 } }

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
    we: { next: ['will'], count: 1 },
    you: { next: [], count: 0 },
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
  i: { next: ['buy', 'to'], count: 2 },
  you: { next: ['buy', 'buy'], count: 2 },
  he: { next: ['buys'], count: 1 },
  she: { next: ['buys'], count: 1 },
  it: { next: ['buys', 'buys', 'buys', 'buys'], count: 4 },
  we: { next: ['buy'], count: 1 },
  they: { next: ['buy'], count: 1 },
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
  you: { next: ['to'], count: 1 },
  it: { next: ['corresponds'], count: 1 },
  they: { next: ['may', 'may'], count: 2 },
}
