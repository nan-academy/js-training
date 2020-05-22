const vowels = RegExp(/(a|e|i|o|u)/gi)

const vowelDots = str => str.split('').map(el => el.match(vowels) !== null ? el + '.' : el).join('')
