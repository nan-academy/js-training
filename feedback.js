

export const prompt = () => {
  const content = localStorage[location.hash]
  const attempt = localStorage[`${location.hash}/attempt`]
  const code = content.split('*/', 1)[1].split(/\nt\(.+?=>/g, 1)[0].trim()

  fetch('https://chupato.com/log/feedback', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ hash: location.hash, attempt, code, url: baseUrl })
  }).catch(() => {})
  
}