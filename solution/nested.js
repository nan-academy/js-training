const nested = { obj: { str: '', num: 0, bool: !0 }, arr: [4, , '2'] }
Object.freeze(nested)
Object.freeze(nested.obj)
