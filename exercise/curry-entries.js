/*
## curry entries

### Instruction

This exercise consists in creating curry functions to apply in the objects
entries.
You will have to create the following curry functions:

- `defaultCurry` that will curry two objects in witch the second object must
be the default object and returns a new object with the modifications applied
by the first object
- `mapCurry` that replicate the function `.map` 
- `reduceCurry` that replicate the function `.reduce`
- `filterCurry` that replicate the function `.filter`

You will also have to create for each curry function the following:

- `reduceScore` that will return the total value of the scores
  of the persons who use the force
- `filterForce` that will return the force users with `shootingScores`
  equal or higher than 80
- `mapAverage` that will return a new object with the propriety `averageScore`
  that is the averages of the scores for each person


### Notions

- https://devdocs.io/javascript/global_objects/array/filter
- https://devdocs.io/javascript/global_objects/array/map
- https://devdocs.io/javascript/global_objects/array/reduce
- https://devdocs.io/javascript/global_objects/object/entries
- https://devdocs.io/javascript/global_objects/object/fromentries
*/

// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

// default values
t(({ eq }) => eq(defaultCurry({ http: 403 })({}), { http: 403 }))
t(({ eq }) =>
  eq(defaultCurry({ http: 403, connection: 'close' })({ http: 200 }), {
    http: 200,
    connection: 'close',
  })
)

// object mutation
t(({ eq }) =>
  eq(defaultCurry(Object.freeze({ http: 403 }))(Object.freeze({ http: 200 })), {
    http: 200,
  })
)

// multiple values
t(({ eq }) =>
  eq(
    defaultCurry({ http: 403, age: 0, connection: 'close' })({
      http: 200,
      age: 30,
      connection: 'keep-alive',
      content_type: 'text/css',
    }),
    { http: 200, age: 30, connection: 'keep-alive', content_type: 'text/css' }
  )
)

// map curry
t(({ eq }) =>
  eq(mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' }), {
    'emoji🤙🏼': 'cool🤙🏼',
  })
)

// reduce curry
t(({ eq }) =>
  eq(
    reduceCurry((acc, [k, v]) => acc.concat(' ', `${k}:${v.id}`))(
      personnel,
      'personnel:'
    ),
    'personnel: lukeSkywalker:5 sabineWren:82 zebOrellios:22 ezraBridger:15 calebDume:11'
  )
)

// filter curry
t(({ eq }) =>
  eq(filterCurry(([, v]) => v.id > 22)(personnel), {
    sabineWren: {
      id: 82,
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
  })
)

// reduce score
t(({ eq }) => eq(reduceScore(personnel, 0), 420))
t(({ eq }) => eq(reduceScore(personnel, 420), 840))

//filter score
t(({ eq, ctx }) => eq(filterForce(personnel), ctx.filter))

// map average
t(({ eq, ctx }) => eq(mapAverage(personnel), ctx.total))

Object.freeze(tests)

// prettier-ignore
export const setup = () => ({
  filter: {
    calebDume:     { id: 11, isForceUser: true,  pilotingScore: 71, shootingScore: 85 },
  },
  total: {
    sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false, averageScore: 86 },
    zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false, averageScore: 39.5 },
    lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true,  averageScore: 77 },
    ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true,  averageScore: 55 },
    calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true,  averageScore: 78 },
  },
})
