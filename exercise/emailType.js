/*
## Email Type

### Instructions

Create a `emailType` function, that can find an email and the type of email being used in a given string.
The function has to return an array with the full match of the email (example-01@gmail.com) 
and the group where the type is (@gmail).

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = f => tests.push(f)
t(() => typeof emailType === 'function')
t(() => emailType.length === 1)
t(({ eq }) =>
  eq(emailType('this is my gmail mygmail@gmail.com use it well'), [
    'mygmail@gmail.com',
    '@gmail'
  ])
)
t(({ eq }) =>
  eq(emailType('this is a test ex-01@hotmail.com'), [
    'ex-01@hotmail.com',
    '@hotmail'
  ])
)
t(({ eq }) =>
  eq(emailType('rfbgvdm ms-ma@hotmail.com xz mail.com format'), [
    'ms-ma@hotmail.com',
    '@hotmail'
  ])
)
t(({ eq }) =>
  eq(emailType('a@adv adva-sa@live.com'), ['adva-sa@live.com', '@live'])
)
t(({ eq }) => eq(emailType('a@adv advas sdfb '), []))

Object.freeze(tests)
