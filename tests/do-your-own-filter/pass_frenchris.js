const Filter = (el, fun) => {
  let answer = []
  for (let e of el) if (fun(e)) answer.push(e)
  return answer
}

const Reject = (el, fun) => {
  let answer = []
  for (let e of el) if (!fun(e)) answer.push(e)
  return answer
}

const Partition = (el, fun) => [Filter(el, fun), Reject(el, fun)]
