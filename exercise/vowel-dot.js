/*
## Vowel Dots

### Instruction

Create a function called vowelDots that receives a string and adds a `.` after every vowel ('y' is not considered a vowel here) using a regex called `vowels`.

 */
///*/// ⚡

///*/// ⚡

export const tests = []
const t = f => tests.push(f)

t(() => typeof vowelDots === "function")
t(() => typeof vowels === "object")
t(() => vowelDots.length === 1)
t(() => vowelDots("something") === "so.me.thi.ng"
t(() => vowelDots("") === ""
t(() => vowelDots("rhythm") === "rhythm"
t(() => vowelDots("Algorithm") === "A.lgo.ri.thm"

Object.freeze(tests)
