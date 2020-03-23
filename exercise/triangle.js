/*

## triangle

### Instructions

Create a `triangle` function that takes a string and a number as parameters
and return a triangle constructed by the string passed as argument and with the depth
of the number passed as argument.

### Output example

- '*' character and depth of 5 :

*
**
***
****
*****

### Notions

- Loops or Recursion

///*/// ⚡

///*/// ⚡
export const tests = []
const t = f => tests.push(f)

t(() => typeof triangle === 'function')
t(() => triangle.length === 2)
t(() => triangle('a', 5) === 'a\naa\naaa\naaaa\naaaaa\n')
t(() => triangle('+', 10) === '+\n++\n+++\n++++\n+++++\n++++++\n+++++++\n++++++++\n+++++++++\n++++++++++\n')
t(() => triangle('#', 4) === '#\n##\n###\n####\n')
t(() => triangle('{}', 13) === '{}\n{}{}\n{}{}{}\n{}{}{}{}\n{}{}{}{}{}\n{}{}{}{}{}{}\n{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}{}\n{}{}{}{}{}{}{}{}{}{}{}{}{}\n')

Object.freeze(tests)
