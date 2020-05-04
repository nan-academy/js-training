const Filter = (el, fun) => {
  let answer = []
  for (let i in el) if (fun(el[i], i, el)) answer.push(el[i])
  return answer
}

const Reject = (el, fun) => {
  let answer = []
  for (let i in el) if (!fun(el[i], i, el)) answer.push(el[i])
  return answer
}

const Partition = (el, fun) => [Filter(el, fun), Reject(el, fun)]
