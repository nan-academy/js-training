/*
## Using Map

### Instructions

-Create a function named 'citiesOnly' which takes an array of objects
and which return an array of strings from the key `city`.

Example:

```js
[
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
]
```

returns

```js
['Los Angeles', 'San Francisco']
```

-Create a function named 'upperCasingStates' which takes an array of strings
and which Upper Case each words of a string.
The function returns then an array of strings.

Example:
['alabama', 'new jersey']
returns
['Alabama', 'New Jersey']


-Create a function named 'farenheitToCelsius' which takes an array
of farenheit temperatures which converts them to Celsius.
Round down the result.

The function then returns the result as an array of strings like below:

example:
```js
['68°F', '59°F', '25°F']
```

returns
```js
['20°C', '15°C', '-4°C']
```


-Create a function named 'trimTemp' which takes an array of objects
and which removes the spaces from the string in the key `temperature`.
The function then returns an array of objects with the modification.

Example:
```js
[
  { city: 'Los Angeles', temperature: '  101 °F   '},
  { city: 'San Francisco', temperature: ' 84 ° F   '},
]
```

returns

```js
[
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
]
```

-Create a 'tempForecasts' function which will take an array of objects, and which will
return an array of strings formatted as below:

```js
[
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  }
]
```

returns

```js
['38°Celsius in Pasadena, California']
```

### Notions

- https://devdocs.io/javascript/global_objects/array/map

///*/ // ⚡

///*/// ⚡

export const tests = []
const t = (f) => tests.push(f)

// citiesOnly

t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[0], 'Los Angeles'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[1], 'San Francisco'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[2], 'Miami'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[3], 'New York City'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[4], 'Juneau'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[5], 'Boston'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[6], 'Jackson'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[7], 'Utqiagvik'))
t(({ eq, ctx }) => eq(citiesOnly(ctx.arr1)[8], 'Albuquerque'))

t(({ eq, ctx }) => eq(ctx.mapCalls[0], ctx.arr1))

// upperCasingStates

t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[0], 'Alabama'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[1], 'New Jersey'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[2], 'Alaska'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[3], 'New York'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[4], 'California'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[5], 'New Hampshire'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[6], 'Ohio'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[7], 'Texas'))
t(({ eq, ctx }) => eq(upperCasingStates(ctx.arr2)[8], 'West Virginia'))

t(({ eq, ctx }) => eq(ctx.mapCalls.includes(ctx.arr2), true))

// farenheitToCelsius

t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[0], '30°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[1], '37°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[2], '5°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[3], '12°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[4], '-13°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[5], '21°C'))
t(({ eq, ctx }) => eq(farenheitToCelsius(ctx.arr3)[6], '-19°C'))

t(({ eq, ctx }) => eq(ctx.mapCalls.includes(ctx.arr3), true))

// trimTemp

t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[0], {
    city: 'Los Angeles',
    state: 'california',
    region: 'West',
    temperature: '101°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[1], {
    city: 'San Francisco',
    state: 'california',
    region: 'West',
    temperature: '84°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[2], {
    city: 'Miami',
    state: 'Florida',
    region: 'South',
    temperature: '112°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[3], {
    city: 'New York City',
    state: 'new york',
    region: 'North East',
    temperature: '0°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[4], {
    city: 'Juneau',
    state: 'Alaska',
    region: 'West',
    temperature: '21°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[5], {
    city: 'Boston',
    state: 'massachussetts',
    region: 'North East',
    temperature: '45°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[6], {
    city: 'Jackson',
    state: 'mississippi',
    region: 'South',
    temperature: '70°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[7], {
    city: 'Utqiagvik',
    state: 'Alaska',
    region: 'West',
    temperature: '-1°F',
  })
)
t(({ eq, ctx }) =>
  eq(trimTemp(ctx.arr1)[8], {
    city: 'Albuquerque',
    state: 'new mexico',
    region: 'West',
    temperature: '95°F',
  })
)

t(({ eq, ctx }) => eq(ctx.mapCalls.includes(ctx.arr1), true))

// trimTemp

t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[0], '38°Celsius in Los Angeles, California')
)

t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[1], '28°Celsius in San Francisco, California')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[2], '44°Celsius in Miami, Florida')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[3], '-18°Celsius in New York City, New York')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[4], '-7°Celsius in Juneau, Alaska')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[5], '7°Celsius in Boston, Massachussetts')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[6], '21°Celsius in Jackson, Mississippi')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[7], '-19°Celsius in Utqiagvik, Alaska')
)
t(({ eq, ctx }) =>
  eq(tempForecasts(ctx.arr1)[8], '35°Celsius in Albuquerque, New Mexico')
)

export const setup = () => {
  const mapCalls = []
  const _map = Array.prototype.map
  Array.prototype.map = function () {
    mapCalls.push(this)
    return _map.apply(this, arguments)
  }
  const arr1 = [
    {
      city: 'Los Angeles',
      temperature: '101 °F',
      state: 'california',
      region: 'West',
    },
    {
      city: 'San Francisco',
      temperature: '84 °F',
      state: 'california',
      region: 'West',
    },
    {
      city: 'Miami',
      temperature: ' 112 °F',
      state: 'Florida',
      region: 'South',
    },
    {
      city: 'New York City',
      temperature: ' 0 °F',
      state: 'new york',
      region: 'North East',
    },
    { city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West' },
    {
      city: 'Boston',
      temperature: '45 °F',
      state: 'massachussetts',
      region: 'North East',
    },
    {
      city: 'Jackson',
      temperature: ' 70°F  ',
      state: 'mississippi',
      region: 'South',
    },
    {
      city: 'Utqiagvik',
      temperature: ' -1 °F',
      state: 'Alaska',
      region: 'West',
    },
    {
      city: 'Albuquerque',
      temperature: ' 95 °F',
      state: 'new mexico',
      region: 'West',
    },
  ]

  const arr2 = [
    'alabama',
    'new jersey',
    'alaska',
    'new york',
    'california',
    'new hampshire',
    'ohio',
    'texas',
    'west virginia',
  ]

  const arr3 = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F']

  Object.freeze(arr1)
  Object.freeze(arr2)
  Object.freeze(arr3)
  return { mapCalls, arr1, arr2, arr3 }
}

Object.freeze(tests)
