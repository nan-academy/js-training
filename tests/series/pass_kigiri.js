const series = (callbacks) =>
  callbacks.reduce(
    async (acc, cb) => [...(await acc), await cb()],
    Promise.resolve([])
  )
