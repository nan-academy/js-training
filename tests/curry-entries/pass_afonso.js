const defaultCurry = (obj1) => (obj2) => Object.assign({}, obj1, obj2)

const mapCurry = (f) => (obj) => Object.fromEntries(Object.entries(obj).map(f))

const reduceCurry = (f) => (obj, ...args) =>
  Object.entries(obj).reduce(f, ...args)

const filterCurry = (f) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(f))

const reduceScore = reduceCurry(
  (acc, [, v]) => (acc += v.isForceUser ? v.pilotingScore + v.shootingScore : 0)
)

const filterForce = filterCurry(
  ([, v]) => v.isForceUser && v.shootingScore >= 80
)

const mapAverage = mapCurry(
  ([k, v]) => [k, (v['averageScore'] = (v.shootingScore + v.pilotingScore) / 2) && v ]
)
