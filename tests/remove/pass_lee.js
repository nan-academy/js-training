const remove = (obj, ...prop) =>
  obj.hasOwnProperty(...prop)
    ? prop.map((x) => Reflect.deleteProperty(obj, x)) && obj
    : obj

theObject.difficulty = 8
theObject.you_can_use.splice(3, 1, `fmt.*`, `len`)
Object.freeze(theObject.name)
