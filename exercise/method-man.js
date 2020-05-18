/*
## Method Man

### Instructions

Write 4 functions:
- `words` that takes a string
  and split it into an array of strings on spaces
- `sentence` that takes an array of strings and join them with spaces
- `yell` that take a string and return it in upper case
- `whisper` that take a string and return it in lower case
  and surround it with `*`


### Notions

- https://nan-academy.github.io/js-training/examples/methods.js

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(words('a b c'), ['a', 'b', 'c']))
t(({ eq }) => eq(words('Hello  world'), ['Hello', '', 'world']))
t(({ eq, ctx: r }) => eq(words(`${r} ${r} ${r}`), [r, r, r]))

t(({ eq }) => eq(sentence(['a', 'b', 'c']), 'a b c'))
t(({ eq }) => eq(sentence(['Hello', '', 'world']), 'Hello  world'))
t(({ eq, ctx: r }) => eq(sentence([r, r, r]), `${r} ${r} ${r}`))

t(({ eq }) => eq(yell('howdy stranger ?'), 'HOWDY STRANGER ?'))
t(({ eq }) => eq(yell('Déjà vu'), 'DÉJÀ VU'))

t(({ eq }) => eq(whisper('DÉJÀ VU'), '*déjà vu*'))
t(({ eq }) => eq(whisper('HOWDY STRANGER ?'), '*howdy stranger ?*'))

Object.freeze(tests)

export const setup = () => Math.random().toString(36)
