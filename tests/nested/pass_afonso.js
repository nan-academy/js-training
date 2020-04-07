const nested = {
  obj: { str: 'hi', num: 2, bool: true },
  arr: [4, undefined, '2'],
}

Object.freeze(nested)
Object.freeze(nested.obj)
