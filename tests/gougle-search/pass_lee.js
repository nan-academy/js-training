const queryServers = (serverName, q) =>
  Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ])

const gougleSearch = (query) =>
  new Promise(async (res, rej) => {
    setTimeout(() => rej(Error('timeout')), 80)
    let a = await Promise.all([
      queryServers('image', query),
      queryServers('web', query),
      queryServers('video', query),
    ])
    res({ image: a[0], web: a[1], video: a[2] })
  })
