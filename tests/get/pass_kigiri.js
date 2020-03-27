const get = (src, path) => path.split('.').reduce((o, k) => o && o[k], src)
