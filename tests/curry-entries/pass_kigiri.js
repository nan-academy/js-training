const { fromEntries: z, entries: x } = Object
const defaultCurry = defaults => obj => ({ ...defaults, ...obj })
const mapCurry = fn => obj => z(x(obj).map(fn))
const reduceCurry = fn => (obj, ...rest) => x(obj).reduce(fn, ...rest)
const filterCurry = fn => obj => z(x(obj).filter(fn))
const reduceScore = reduceCurry(
  (t, [, v]) => t + (v.isForceUser ? v.pilotingScore + v.shootingScore : 0)
)

const filterForce = filterCurry(
  ([, v]) => v.isForceUser || v.shootingScore > 79
)

const mapAverage = mapCurry(([k, v]) => [
  k,
  { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 },
])