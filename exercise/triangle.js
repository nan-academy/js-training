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

- https://nan-academy.github.io/js-training/examples/loops.js
- https://nan-academy.github.io/js-training/examples/recursion.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ code }) => code.split('\n').filter((s) => s.trim()).length < 35)
t(({ eq }) => eq(triangle('#', 4), _4))
t(({ eq }) => eq(triangle('a', 5), _5))
t(({ eq }) => eq(triangle('+', 10), _10))
t(({ eq }) => eq(triangle('{}', 29), _29))

Object.freeze(tests)

const _4 = `
#
##
###
####`.slice(1)

const _5 = `
a
aa
aaa
aaaa
aaaaa`.slice(1)

const _10 = `
+
++
+++
++++
+++++
++++++
+++++++
++++++++
+++++++++
++++++++++`.slice(1)

const _29 = `
{}
{}{}
{}{}{}
{}{}{}{}
{}{}{}{}{}
{}{}{}{}{}{}
{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}`.slice(1)
