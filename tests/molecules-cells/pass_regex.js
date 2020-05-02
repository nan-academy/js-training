const [RNA, DNA] = ['GCCGTAAU', 'GCCGATUA'].map((def) => (s) =>
  s.replace(/./g, (c) => def.match(/../g).find((a) => a[0] === c)[1])
)
