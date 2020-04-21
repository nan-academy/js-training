const flow = (...fn) => (...args) => (fn.length === 1) ? fn[0](...args) : flow(...fn.slice(1))(fn[0](...args))
