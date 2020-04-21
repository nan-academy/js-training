const Mult2 = (x) => {
  return (y) => x * y
}

const Add3 = (x) => {
  return (y) => (z) => x + y + z
}

const Sub4 = (x) => {
  return (y) => (z) => (w) => x - y - z - w
}
