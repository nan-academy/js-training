const isObj = o => o && typeof o === 'object' && !Array.isArray(o)

const mergeDeep = (target, source) => {
  let output = Object.assign({}, target)
  if (isObj(target) && isObj(source)) {
    Object.entries(source).forEach(([k, v]) => {
        if (isObj(v)) {
          if (!(k in target))
            output[k] = v
          else
            output[k] = mergeDeep(target[k], v)
        } else {
          Object.assign(output, { [k]: v })
        }
      }
    )
  } else {
    output = Object.assign({}, source)
  }
  return output
}

const replica = (target, ...objs) => {
  let output = Object.assign({}, target)
  for (let i = 0; i < objs.length; i++) {
    output = mergeDeep(output, objs[i])
  }
  return output
}
