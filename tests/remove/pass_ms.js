const remove = (obj, ...prop) => {
  prop.map((x) => {
    if (obj.hasOwnProperty(x)) {
      Reflect.deleteProperty(obj, x)
    }
  })
  return obj
}
theObject.difficulty = 8
theObject.you_can_use.splice(3, 1, `fmt.*`, `len`)
Object.freeze(theObject.name)
