/*
## Is

### Instructions

Create a function for each primitive type

### Notions

- Primitive and operators
- https://devdocs.io/javascript/operators/typeof

*/


export const tests = []
const t = f => tests.push(f)

t(() => typeof isNum === 'function' && isNum.length === 1)
t(() => isNum(1))
t(() => isNum(-0))
t(() => isNum(0.5))
t(() => isNum(NaN))
t(() => !isNum(true))
t(() => !isNum())
t(() => !isNum(''))
t(() => !isNum([]))

t(() => typeof isStr === 'function' && isStr.length === 1)
t(() => isStr(''))
t(() => isStr(`${[]}`))
t(() => !isStr(1))
t(() => !isStr(true))
t(() => !isStr())
t(() => !isStr([]))

t(() => typeof isBool === 'function' && isBool.length === 1)
t(() => isBool(true))
t(() => isBool(false))
t(() => isBool(!1))
t(() => !isBool(1))
t(() => !isBool())
t(() => !isBool(''))
t(() => !isBool([]))

t(() => typeof isUndef === 'function' && isUndef.length === 1)
t(() => isUndef())
t(() => isUndef(undefined))
t(() => !isUndef(!1))
t(() => !isUndef(1))
t(() => !isUndef(''))
t(() => !isUndef([]))
t(() => !isUndef(null))
