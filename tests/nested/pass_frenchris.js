const nested = {
        arr: [4, undefined, '2'],
        obj: {
                str: '',
                num: 4,
                bool: true
        }
}

Object.freeze(nested)
Object.freeze(nested.obj)
