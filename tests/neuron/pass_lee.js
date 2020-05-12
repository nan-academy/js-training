const neuron = (phrase) => {
  let responses = []
  return phrase.reduce((acc, cr) => {
    let groups = cr.split(/: | - /)
    let type = convertStr(groups[0])
    let question = convertStr(groups[1])
    if (!acc[type]) acc[type] = {}
    if (!acc[type][question]) responses = []
    console.log('---', responses, groups[3], acc[type][question])
    responses.push(groups[3])
    acc[type][question] = {}
    acc[type][question][type.slice(0, -1)] = groups[1]
    acc[type][question]['responses'] = responses
    return acc
  }, {})
}

const convertStr = (string) =>
  string
    .toLowerCase()
    .replace(/\'|\?|\!/g, '')
    .replace(/ /g, '_')

console.log(
  neuron([
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'Orders: turn on the lights! - Response: done',
    'affirmations: i am fine - Response: awesome',
  ]).affirmations
  ,  neuron([
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'Orders: turn on the lights! - Response: done',
    'affirmations: i am fine - Response: awesome',
  ]).orders,
  neuron([
    'Questions: how are you? - Response: well thanks, and you?',
    'affirmations: i am fine - Response: cool',
    'Orders: turn on the lights! - Response: done',
    'affirmations: i am fine - Response: awesome',
  ]).questions
)
/*
{
    affirmations: {
      i_am_fine: {
        affirmation: 'i am fine',
        responses: ['cool', 'awesome'],
      },
    },
    orders: {
      turn_on_the_lights: {
        order: 'turn on the lights!',
        responses: ['done'],
      },
    },
    questions: {
      how_are_you: {
        question: 'how are you?',
        responses: ['well thanks, and you?'],
      },
    },
  }
*/