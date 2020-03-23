let person = {
    name: "Rick",
    age: 100,
    country: "US"
  }

/*
## Mutability

### Instruction

This exercises focus on teaching about object mutability

Make a copy of the `person` object call `clonedPerson` without binding the same object or present the same identity

## Notions

- mutability
- data-structures

///*/// ⚡

///*/// ⚡
export const tests = [];
const t = f => tests.push(f);
t(() => typeof triangle === 'object')
t(({ eq }) => !eq(clonedPerson, person))
t(() => clonedPerson.name === "Rick")
t(() => clonedPerson.age === 100)
t(() => clonedPerson.country === "US")

Object.freeze(tests);
