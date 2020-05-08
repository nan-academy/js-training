const mult2 = (x) => {
  return (y) => x * y
}

const add3 = (x) => {
  return (y) => (z) => x + y + z
}

const sub4 = (x) => {
  return (y) => (z) => (w) => x - y - z - w
}
