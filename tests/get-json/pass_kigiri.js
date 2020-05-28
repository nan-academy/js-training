const getJSON = async (path, params) => {
  const res = await fetch(`${path}?${new URLSearchParams(params)}`)
  if (res.status !== 200) throw Error(res.statusText)
  const { data, error } = await res.json()
  if (error) throw Error(error)
  return data
}
