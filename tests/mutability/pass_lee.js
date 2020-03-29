const clone1 = { ...person }
const clone2 = { ...person }

const samePerson = person
samePerson.age++
samePerson.country = 'FR'
