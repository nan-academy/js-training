const defaultHttp = (session) => {
  return Object.assign({ http: 403, age: 0, connection: 'closed' }, session)
}
