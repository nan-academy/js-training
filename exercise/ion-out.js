/*
## Ion Out

### Instruction

Make a function `ionOut` that receives a string and returns an array with every
word containing 'ion' following a t, without the 'ion'.


### Notions

- https://github.com/ziishaned/learn-regex#4-lookarounds

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(ionOut('attention, direction'), ['attent', 'direct']))
t(({ eq }) => eq(ionOut('promotion, provision'), ['promot']))
t(({ eq }) => eq(ionOut('transfusion'), []))
t(({ eq }) =>
  eq(ionOut(' 1st position is the vision of the 2nd position'), [
    'posit',
    'posit',
  ])
)

Object.freeze(tests)
