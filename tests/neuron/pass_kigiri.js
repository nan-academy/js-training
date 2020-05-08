const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/ /g, '_')

const g = (src, key, init = {}) => src[key] || (src[key] = init)
const neuron = (sentences) => {
  const result = {}
  for (const sentence of sentences) {
    const [type, value, , answer] = sentence.split(/: | - /)
    const state = g(g(result, slugify(type)), slugify(value))
    state[slugify(type.slice(0, -1))] = value
    g(state, 'responses', []).push(answer)
  }
  return result
}
