/*

## Biggie Smalls

### Instructions

Create 2 variables
- smalls with the smallest possible number value
- biggie with the greatest possible number value

### Notions

- Numbers

*/


export const tests = []
const t = f => tests.push(f)

// bigger
t(() => typeof biggie !== 'undefined')
t(() => biggie > Number.MAX_VALUE)

// smaller
t(() => typeof smalls !== 'undefined')
t(() => smalls < Number.MIN_VALUE)

/*
  Damn right I like the life I live,
  because I went from negative to positive.

      - The Notorius B.I.G
*/