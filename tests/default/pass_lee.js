const defaultHttp = ({
  http = 403,
  age = 0,
  connection = 'closed',
  ...session
}) => {
  return { http, connection, ...session, age }
}
