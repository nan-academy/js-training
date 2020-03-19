export const router = pages => {
  let _activePage = new URLSearchParams(location.search).get('page')
  
  const open = (page, type = 'replaceState') => {
    if (!pages[page]) return console.warn(`open called with non existing page: ${page})`)
    _activePage = page
    const pageClass = `page-${page}`
    const params = new URLSearchParams(location.search)
    const { onLoad, onOpen, onClose } = pages[page] || {}
    const wasOpen = document.documentElement.classList.contains(pageClass)
    for (const c of document.documentElement.classList) {
      if (c === pageClass || !c.startsWith('page-')) continue
      document.documentElement.classList.remove(c)
      const prevPage = pages[c.slice(5)]
      prevPage && prevPage.onClose && prevPage.onClose()
    }
    if (wasOpen && params.get(page) === 'page') return
    params.set('page', page)
    const url = `${location.origin}${location.pathname}?${params}${location.hash}`
    if (wasOpen) return history.replaceState({}, '', url)
    onLoad && onLoad()
    document.documentElement.classList.add(pageClass)
    history[type]({}, '', url)
    onOpen && onOpen()
  }

  open(pages[_activePage] ? _activePage : Object.keys(pages)[0])

  return {
    open,
    pages,
    getPage: () => pages[_activePage],
  }
}

