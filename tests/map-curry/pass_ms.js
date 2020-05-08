const defaultCurry = (obj) => (defObj) => Object.assign({}, obj, defObj)

const reduceCurry = (fn) => (obj, ...args) =>
  Object.entries(obj).reduce(fn, ...args)

const filterCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(fn))

const mapCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(fn))

const reduceScore = reduceCurry(
  (acc, [, v]) =>
    (acc += v.isForceUser ? v.pilotingScore + v.shootingScore : 0)
)
const filterForce = filterCurry(([k, v]) => v.isForceUser)
const mapMedia = mapCurry(([k, v]) => [
  k,
  (v['scoreMedia'] = (v.pilotingScore * v.shootingScore) / 100) && v,
])
