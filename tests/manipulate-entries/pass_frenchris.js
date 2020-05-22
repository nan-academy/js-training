const filterEntries = (obj, filterCondition) => Object.fromEntries(Object.entries(obj).filter(filterCondition))
const mapEntries = (obj, mapFun) => Object.fromEntries(Object.entries(obj).map(mapFun))
const reduceEntries = (obj, ...args) => Object.entries(obj).reduce(...args)

const lowCarbs = (obj) => filterEntries(obj, ([key, value]) => nutritionDB[key].carbs * value / 100 < 50)

const totalCalories = (obj) => {
        let onlyCalories = reduceEntries(obj, (acc, [key, val]) => {
                if (Array.isArray(acc)) acc = nutritionDB[acc[0]].calories * acc[1] / 100
                let cals = nutritionDB[key].calories * val / 100
                return acc + cals
        })
        return Number(onlyCalories.toFixed(1))
}

const cartTotal = obj => mapEntries(obj, ([key, value]) => [key, mapEntries(nutritionDB[key], ([k, val]) => [k, Number(((value / 100) * val).toFixed(3))])])
