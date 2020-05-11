const defaultCurry = (obj) => (defObj) => Object.assign({}, obj, defObj)

const reduceCurry = (fn) => (obj, ...args) =>
  Object.entries(obj).reduce(fn, ...args)

const filterCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(fn))

const mapCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(fn))

const reduceScore = reduceCurry(
  (acc, [, v]) => (acc += v.isForceUser ? v.pilotingScore + v.shootingScore : 0)
)
const filterForce = filterCurry(
  ([, v]) => v.isForceUser && v.shootingScore >= 80
)
const mapAverage = mapCurry(([k, v]) => [
  k,
  (v['averageScore'] = (v.pilotingScore * v.shootingScore) / 2) && v,
])
