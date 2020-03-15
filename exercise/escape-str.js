/*
## Escape Str

### Instructions

Create a constant variable named `escapeStr` that contains
the following specials characters:
  - `
  - \
  - /
  - "
  - '


### Notions

- Primitive and Operators
- Variables

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

// escapeStr is declared and of type string 
t(() => typeof escapeStr === 'string')

// escapeStr should include the character '
t(() => escapeStr.includes("'"))

// escapeStr should include the character "
t(() => escapeStr.includes('"'))

// escapeStr should include the character `
t(() => escapeStr.includes('`'))

// escapeStr should include the character /
t(() => escapeStr.includes('/'))

// escapeStr should include the character \
t(() => escapeStr.includes('\\'))

Object.freeze(tests)
