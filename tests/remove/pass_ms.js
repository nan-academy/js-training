const remove = (obj, ...prop) => {
  if (obj.hasOwnProperty(...prop)) {
    for (let a of prop) {
      Reflect.deleteProperty(obj, a)
    }
    return obj
  } else {
    return obj
  }
}
theObject.difficulty = 8
theObject.you_can_use.splice(3, 1, `fmt.*`, `len`)
Object.freeze(theObject.name)
