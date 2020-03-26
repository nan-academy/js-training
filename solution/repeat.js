const repeat = (s, c) => (c > 0 ? `${s}${repeat(s, c - 1)}` : '')
