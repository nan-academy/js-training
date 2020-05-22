const defaultCurry = (obj1) => (obj2) => {
        let clonedObj1 = { ...obj1 }
        let clonedObj2 = { ...obj2 }
        let answer = {}
        answer = { ...clonedObj1, ...clonedObj2 }
        return answer
}

const mapCurry = (mapFun) => (obj) => Object.fromEntries(Object.entries(obj).map(mapFun))

const reduceCurry = (reducer) => (obj, initialValue) => Object.entries(obj).reduce(reducer, initialValue)

const filterCurry = (filterCondition) => (obj) => Object.fromEntries(Object.entries(obj).filter(filterCondition))

const reducerScores = (acc, [key, val]) => (val.isForceUser) ? acc + val.pilotingScore + val.shootingScore : acc
const reduceScore = (obj, initialValue) => reduceCurry(reducerScores)(obj, initialValue)

const filterConditionForce = ([_, val]) => (val.shootingScore >= 80 && val.isForceUser)
const filterForce = (obj) => filterCurry(filterConditionForce)(obj)

const mapFunForce = ([key, val]) => [key, { ...val, averageScore: (val.pilotingScore + val.shootingScore) / 2 }]
const mapAverage = (obj) => mapCurry(mapFunForce)(obj)
