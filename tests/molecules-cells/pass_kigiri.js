const reversor = (def) => (strand) =>
  strand
    .split('')
    .map((k) => def[k])
    .join('')

const RNA = reversor({ G: 'C', C: 'G', T: 'A', A: 'U' })
const DNA = reversor({ G: 'C', C: 'G', A: 'T', U: 'A' })
