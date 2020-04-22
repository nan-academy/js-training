const filterKeys = (obj, filtering, i = 0) => {
  let res = Object.fromEntries(
    Object.entries(obj).filter((element) => filtering(element[i]) && element)
  )
  return res
}

const reduceKey = (obj, f, i) =>{
  if(i == undefined){
    return Object.keys(obj).reduce(f)
  }else{
return Object.keys(obj).reduce(f, i)
  }
}

const mapKeys = (obj, f) =>
  Object.fromEntries(
    Object.entries(obj).map((element) => {
      element[0] = f(element[0])
      return element
    })
  )
