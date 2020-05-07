const Filter = (el, fun) => {
  let answer = []
  for (const [i, val] of el.entries()) if (fun(val, i, el)) answer.push(val)
  return answer
}

const Reject = (el, fun) => {
  let answer = []
  for (const [i, val] of el.entries()) if (!fun(val, i, el)) answer.push(val)
  return answer
}

const Partition = (el, fun) => [Filter(el, fun), Reject(el, fun)]
