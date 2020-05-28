const timeout = (delay, action) => (...args) =>
  Promise.race([
    action(...args),
    new Promise((_, r) => setTimeout(r, delay, Error('timeout'))),
  ])

const queryServers = (serverName, q) =>
  Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ])

const gougleSearch = timeout(80, async (query) => {
  const [web, image, video] = await Promise.all([
    queryServers('web', query),
    queryServers('image', query),
    queryServers('video', query),
  ])
  return { web, image, video }
})
