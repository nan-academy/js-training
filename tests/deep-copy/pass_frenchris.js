const isObj = el => el && (el.constructor === Object || el.constructor === undefined)

const deepCopy = (incomingEl) => (Array.isArray(incomingEl)) ?
        incomingEl.map(el => Array.isArray(el) ? deepCopy(el) : el)
        : Object.fromEntries(Object.entries(incomingEl).map(el => isObj(el) ? deepCopy(el) : el))
