/*
## replicate

### Instructions

Create a function called `replica` that allows you to deep assign the values of all properties from one or more
objects to a target object.

Attention with the shallow copies.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

// test the assigning of an object within an object
// to see if the inner object mutated
t(({ eq }) =>
  eq(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }), { a: { b: 1, c: 23 } })
)

// test the assigning of a primitive into an object
t(({ eq }) => eq(replica({ a: 4 }, { a: { b: 1 } }), { a: { b: 1 } }))

// test the assigning of an array into a primitive
t(({ eq }) => eq(replica({ a: [2] }, { a: 4 }), { a: 4 }))
t(({ eq }) =>
  eq(replica({ a: { b: { c: [123, 1] } } }, { a: { b: { c: '1' } } }), {
    a: { b: { c: '1' } },
  })
)

// test the assigning of a primitive into an array
t(({ eq }) => eq(replica({ a: 2 }, { a: [4] }), { a: [4] }))

// test the assigning of an object into an array
t(({ eq }) => eq(replica({ a: { b: [2] } }, { a: [4] }), { a: [4] }))

// test the assigning of an array into an object
t(({ eq }) =>
  eq(replica({ a: [1, 2, 4] }, { a: { b: [4] } }), { a: { b: [4] } })
)

// testing deep properties
t(({ eq, ctx }) => eq(replica(ctx.roy, ctx.rick), ctx.runnerResult))

// testing super deep assigning properties
// it tests the inner objects to see if it mutated
t(({ eq, ctx }) =>
  eq(
    replica({}, ctx.oneDepth, ctx.twoDepth, ctx.threeDepth, ctx.fourthDepth),
    ctx.depthResult
  )
)

Object.freeze(tests)

export const setup = () => ({
  oneDepth: { a: { b1: 1, c1: 2 } },
  twoDepth: { a: { b1: { d2: 1, e2: 2 } } },
  threeDepth: { a: { b1: { d2: { f3: 1, h3: 1 }, e2: { g3: 2 } } } },
  fourthDepth: { a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } } } },
  depthResult: {
    a: { b1: { d2: { f3: { i4: 1 }, h3: 1 }, e2: { g3: 2 } }, c1: 2 },
  },
  roy: {
    a: {
      Roy_Batty: `Not very sporting to fire on an unarmed opponent. I thought you were supposed to be good. Aren't you the "good" man? C'mon, Deckard. Show me what you're made of.`,
    },
  },
  rick: {
    Rick_Deckard: `Replicants are like any other machine, are either a benefit or a hazard. If they're a benefit it's not my problem.`,
  },
  runnerResult: {
    Rick_Deckard:
      "Replicants are like any other machine, are either a benefit or a hazard. If they're a benefit it's not my problem.",
    a: {
      Roy_Batty: `Not very sporting to fire on an unarmed opponent. I thought you were supposed to be good. Aren't you the "good" man? C'mon, Deckard. Show me what you're made of.`,
    },
  },
})
