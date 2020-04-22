const defaultHttp = (session) => {
  session.http = 403
  session.age = 0
  session.connection = 'closed'

  return { http, connection, ...session, age }
}
