const filter = (el, fun) => {
  let answer = []
  for (const [i, val] of el.entries()) if (fun(val, i, el)) answer.push(val)
  return answer
}

const reject = (el, fun) => {
  let answer = []
  for (const [i, val] of el.entries()) if (!fun(val, i, el)) answer.push(val)
  return answer
}

const partition = (el, fun) => [filter(el, fun), reject(el, fun)]
