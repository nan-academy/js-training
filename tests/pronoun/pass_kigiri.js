const subjects = new Set(['i', 'you', 'he', 'she', 'it', 'they', 'we'])
const pronoun = (sentence) => {
  const pronouns = {}
  const words = sentence.toLowerCase().split(/[^a-z]+/g)
  for (const [index, word] of words.entries()) {
    if (subjects.has(word)) {
      const nextWord = words[index + 1]
      const state = pronouns[word] || (pronouns[word] = { count: 0, word: [] })
      state.count++
      nextWord && !subjects.has(nextWord) && state.word.push(nextWord)
    }
  }
  return pronouns
}
