const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: '',
    num: 0,
    bool: false
  }
}

Object.freeze(nested)
Object.freeze(nested.obj)
