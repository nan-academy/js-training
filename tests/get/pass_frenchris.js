const getValue = (src, pathSplited) => {
        if (pathSplited.length === 1) return src[pathSplited[0]]
        else
                if (src[pathSplited[0]] === undefined) return undefined
        return getValue(src[pathSplited[0]], pathSplited.slice(1))

}

const get = (src, path) => getValue(src, path.split('.'))
