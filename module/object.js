export const next = 'async'
export const exercises = {
  remove: { feedback: true },
  invert: { feedback: true },
  pick: { feedback: true },

  // invert { a: 1 } -> { 1: 'a' }
  // pick / remove
  'manipulate-values': { feedback: true }, // mapValue / filterValue / reduceValue on objects
  'manipulate-keys': { feedback: true }, // mapKey / filterKey / reduceKey on objects
  'manipulate-entries': { feedback: true }, // mapEntry / filterEntry / reduceEntry on objects
  // assign / defaults
  // assignDeep / defaultsDeep
  // at 'a.0.x' { a: [{x: 1}] } -> 1 // at curry
}
