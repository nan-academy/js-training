const isObj = el => el && (el.constructor === Object || el.constructor === undefined)

const treatedValue = (val1, val2) =>
        (isObj(val1) && isObj(val2)) ? replica(val1, val2) : val2

const obj2Treater = (obj1, obj2) => {
        for (let [key, value] of Object.entries(obj2)) obj2[key] = treatedValue(obj1[key], value)
        return obj2
}
const replica = (obj1, ...args) => {
        if (args.length === 1) {
                let clonedObj1 = { ...obj1 }
                let clonedObj2 = { ...args[0] }
                let answer = {}
                answer = { ...clonedObj1, ...obj2Treater(clonedObj1, clonedObj2) }
                return answer
        }
        let firstArg = args[0]
        let rest = args.slice(1)
        return replica(replica(obj1, firstArg), ...rest)
}
