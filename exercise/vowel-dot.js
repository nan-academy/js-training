/*
## Vowel Dots

### Instruction

Create a function called vowelDots that receives a string and adds a `.` after every vowel ('y' is not considered a vowel here) using a regex called `vowels`.

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = f => tests.push(f)

t(({eq}) => eq(typeof vowelDots, "function"))
t(({eq}) => eq(typeof vowels, "object"))
t(({eq}) => eq(vowelDots.length, 1))
t(({eq}) => eq(vowelDots("something"), "so.me.thi.ng"))
t(({eq}) => eq(vowelDots(""), ""))
t(({eq}) => eq(vowelDots("rhythm"), "rhythm"))
t(({eq}) => eq(vowelDots("Algorithm"), "A.lgo.ri.thm"))


Object.freeze(tests)
