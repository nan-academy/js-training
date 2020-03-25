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

- Methods

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

t((_, ctx) => (ctx.r = String(Math.random())))

t(({ eq }) => eq(words('a b c'), ['a', 'b', 'c']))
t(({ eq }) => eq(words('Hello  world'), ['Hello', '', 'world']))
t(({ eq }, { r }) => eq(words(`${r} ${r} ${r}`), [r, r, r]))

t(() => sentence(['a', 'b', 'c']) === 'a b c')
t(() => sentence(['Hello', '', 'world']) === 'Hello  world')
t((_, { r }) => sentence([r, r, r]) === `${r} ${r} ${r}`)

t(() => yell('howdy stranger ?') === 'HOWDY STRANGER ?')
t(() => yell('Déjà vu') === 'DÉJÀ VU')

t(() => whisper('DÉJÀ VU') === '*déjà vu*')
t(() => whisper('HOWDY STRANGER ?') === '*howdy stranger ?*')

Object.freeze(tests)
