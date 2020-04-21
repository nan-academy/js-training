const replica = (target, ...obj) =>
  JSON.parse(JSON.stringify(Object.assign(target, ...obj)))
