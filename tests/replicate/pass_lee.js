const isObj = (v) => v && v.constructor === Object
const replica = (target, ...objs) => deepAssign(target, ...objs)

const deepAssign = (target, ...objs) => {
  for (let obj of objs) {
    for (let [k, v] of Object.entries(obj)) {
      target[k] = isObj(v) && isObj(target[k]) ? replica(target[k], v) : v
    }
  }
  return target
}
