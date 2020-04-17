function pick(o, keys) {
  for (var k in o) keys.includes(k) || delete o[k];
  return o;
}
