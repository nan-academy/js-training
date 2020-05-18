const translator = [
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
];
const RNA = (str) =>
  str
    .split("")
    .map((letter) => Object.fromEntries(translator)[letter])
    .join("");

const DNA = (str) => {
  let translator2 = JSON.parse(JSON.stringify(translator)).map((arr) =>
    arr.reverse()
  );
  return str
    .split("")
    .map((letter) => Object.fromEntries(translator2)[letter])
    .join("");
};
