const format = (date, format) => {

  let vars = {
    'y': date.getFullYear() >= 0 ? date.getFullYear() : date.getFullYear() * -1,
    'yyyy': date.getFullYear() >= 0 ? date.toString().split(' ')[3] : date.toString().split(' ')[3].slice(1),
    'G': date.getFullYear() >= 0 ? 'AD' : 'BC',
    'GGGG': date.getFullYear() >= 0 ? 'Anno Domini' : 'Before Christ',
    'M': date.getMonth() + 1,
    'MM': date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
    'MMM': date.toString().split(' ')[1],
    'MMMM': date.toLocaleString('default', {month: 'long'}),
    'd': date.getDate(),
    'dd': date.getDate() >= 10 ? date.getDate() : '0' + date.getDate(),
    'E': date.toString().split(' ')[0],
    'EEEE': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()],
    'H': date.getHours(),
    'HH': date.getHours() >= 10 ? date.getHours() : '0' + date.getHours(),
    'h': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    'm': date.getMinutes(),
    'mm': date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes(),
    's': date.getSeconds(),
    'ss': date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds(),
    'a': date.getHours() >= 12 ? 'PM' : 'AM'
  }
  vars['hh'] = vars['h'] >= 10 ? vars['h'] : '0' + vars['h']


  let regex = /( |\(|\)|\[|]|<|>|:|\/)/gm

  let formatParts = format.split(regex), spaces = ''
  for (let i = 0; i < formatParts.length; i++){
    for (let v in vars){
      if (v === formatParts[i]){
        formatParts[i] = vars[v]
      }
    }
  }

  return formatParts.join('')
}
