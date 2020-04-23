const flags = ({ help, ...rest }) => ({
  alias: Object.keys(rest)
    .reduce(
      (acc, flag) => ({...acc, [flag[0]]: flag }),
      { h: 'help' },
    ),
  description: (help || Object.keys(rest))
    .map(flag => `-${flag[0]}, --${flag}: ${rest[flag]}`)
    .join('\n'),
})
