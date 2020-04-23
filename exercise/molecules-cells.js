/*
## molecules-cells

### Instruction

Write two functions:
  - `RNA` that given a DNA strand it must return is complement RNA
  - `DNA` that given a RNA strand it must return is complement DNA (invert RNA)

Since both strands are a sequence of nucleotides. It will be given the four nucleotides and its complements

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U


// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

t(({ eq }) => eq(RNA(''), ''))
t(({ eq }) => eq(RNA('TAGC'), 'AUCG'))
t(({ eq }) => eq(RNA(DNA('AUCG')), 'AUCG'))

t(({ eq }) => eq(DNA(''), ''))
t(({ eq }) => eq(DNA('AUCG'), 'TAGC'))
t(({ eq }) => eq(DNA(RNA('TAGC')), 'TAGC'))

Object.freeze(tests)
