/*
## Pick

### Instructions

Create a `pick` function that takes an object and keys.
This function will pick only the keys, in the second argument, from the object passed as argument.

### Notions

- https://nan-academy.github.io/js-training/examples/data-structures.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq, ctx }) => eq(pick(ctx.agent, ['firstName', 'lastName']), ctx.newAgent))
t(({ eq, ctx }) => eq(pick(ctx.car, ['brand', 'year']), ctx.newCar))
t(({ eq, ctx }) => eq(pick(ctx.user, 'ageVerified'), ctx.newUser))
t(({ eq, ctx }) => eq(pick(ctx.computer, 'graphic'), {}))

Object.freeze(tests)

export const setup = () => ({
  agent: {
    firstName: 'James',
    lastName: 'Bond',
    age: 25,
    email: 'jamesbond@hotmail.com',
  },
  newAgent: { firstName: 'James', lastName: 'Bond' },
  car: { brand: 'ford', motor: 'v8', year: 2000 },
  newCar: { brand: 'ford', year: 2000 },
  user: { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false },
  newUser: { ageVerified: false },
  computer: { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' },
})
