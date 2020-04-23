/*
## flags

### Instruction

Create a function called `flags` that receives an object and outputs the specific flags from the
properties of that object.

The `help` flag :
  - Should be present in the output by default.
  - When not present in the input, it should output the description of all flags. But when present it can specify the 
  flags that you want to see the description of, ex: `help: ['divide']`

Example :

{
  multiply: 'multiply the values',
  divide: 'divides the values',
  help: ['divide']
}

and outputs :

{
  flags: { h: 'help', m: 'multiply', d: 'divide'}
  help_description: {
    divide: 'divides the values'
  }
}

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(flags({}), { flags: { h: 'help' }, help_description: {} }))

t(({ eq }) =>
  eq(
    flags({
      invert: 'inverts and object',
      convert_map: 'converts the object to an array',
      assign: 'uses the function assign - assign to target object',
    }),
    $a
  )
)

t(({ eq }) =>
  eq(
    flags({
      invert: 'inverts and object',
      convert_map: 'converts the object to an array',
      assign: 'uses the function assign - assign to target object',
      help: ['assign', 'invert'],
    }),
    $b
  )
)

t(({ eq }) =>
  eq(
    flags({
      invert: 'inverts and object',
      convert_map: 'converts the object to an array',
      assign: 'uses the function assign - assign to target object',
      help: ['invert'],
    }),
    $c
  )
)

Object.freeze(tests)

const $a = {
  flags: { h: 'help', i: 'invert', c: 'convert_map', a: 'assign' },
  help_description: {
    invert: 'inverts and object',
    convert_map: 'converts the object to an array',
    assign: 'uses the function assign - assign to target object',
  },
}

const $b = {
  flags: { h: 'help', i: 'invert', c: 'convert_map', a: 'assign' },
  help_description: {
    assign: 'uses the function assign - assign to target object',
    invert: 'inverts and object',
  },
}

const $c = {
  flags: { h: 'help', i: 'invert', c: 'convert_map', a: 'assign' },
  help_description: { invert: 'inverts and object' },
}
