const getJSON = async (path, params) => {
  let url = `${path}?${Object.keys(params)
    .map((key) => key + '=' + encodeURIComponent(params[key]))
    .join('&')}`
  let resp = await fetch(url)
  let { data, error } = await resp.json()
  if (error) throw new Error(error)
  else if (resp.status !== 200) throw new Error(resp.statusText)
  return data
}
