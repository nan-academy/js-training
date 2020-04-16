const Filter = (el, fun) => {
  let answer = []
  for (let e of el) if (fun(e)) answer.push(e)
  return answer
}
