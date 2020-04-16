const remove = (obj, prop) => {
  if (prop in obj) {
    Reflect.deleteProperty(obj, prop)
    return obj
  } else {
    return obj
  }
}
theObject.difficulty = 8
theObject.you_can_use.splice(3, 1, `fmt.*`, `len`)
Object.freeze(theObject.name)
