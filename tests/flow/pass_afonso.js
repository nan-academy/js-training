const flow = (...funcs) => (...nbr) => {
  if (funcs.length ===1){
    return funcs[0](...nbr)
  } else {
    return flow(...funcs.slice(1))(funcs[0](...nbr))
  }
}
