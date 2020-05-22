const isObj = el => el && (el.constructor === Object || el.constructor === undefined)

const treatedValue = (val1, val2) => {
        if (Array.isArray(val1) && Array.isArray(val2)) return val1.concat(val2)
        if (typeof val1 === 'string' && typeof val2 === 'string') return val1 + ' ' + val2
        if (typeof val1 === 'number' && typeof val2 === 'number') return val1 + val2
        if (isObj(val1) && isObj(val2)) return fusion(val1, val2)
        if (typeof val1 !== typeof val2) return val2
        return val2
}

const obj2Treater = (obj1, obj2) => {
        for (let [key, value] of Object.entries(obj2)) obj2[key] = treatedValue(obj1[key], value)
        return obj2
}

const fusion = (obj1, obj2) => {
        let clonedObj1 = { ...obj1 }
        let clonedObj2 = { ...obj2 }
        let answer = {}
        answer = { ...clonedObj1, ...obj2Treater(clonedObj1, clonedObj2) }
        return answer
}
