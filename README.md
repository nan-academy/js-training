[![Build Status](https://travis-ci.org/nan-academy/js-training.svg?branch=master)](https://travis-ci.org/nan-academy/js-training)
## Setup
First, [**fork**](https://github.com/nan-academy/js-training/fork?fragment=1) this repository.
### globals dependencies
install globaly node on your computer

```sh
# download your code locally
git clone https://github.com/GITHUB_LOGIN/js-training.git
# don't forget to remplace GITHUB_LOGIN by your github login

# change working directory to the newly cloned repository
cd js-training

```

## Testing
Once you have coded your masterpiece, you can start to test your solutions.

You may either use our test tool to check all files
```sh
# run the test runner
./tester
```
![output-tester](https://github.com/nan-academy/js-training/blob/master/img/output-tester.png)

Or you can run only a some tests with
```sh
# run the test runner with args ( basics, advanced, math, get)
./tester basics
```
Or you can test files one by one with node
```sh
# open a file in node
node exercises/primitives
```
![output-node](https://github.com/nan-academy/js-training/blob/master/img/output-node.png)

*our tester may include bugs, feel free to check the code and fix it*

(in doubt use node)

## Solving
You can start editing the javascript files with your favorite text editor.
```sh
# Sublime Text
subl primitives.js

# VSCode
code primitives.js

# Vim
vim primitives.js

# I can not be held responsable if you use anything else.
```

![where-to-code](https://github.com/nan-academy/js-training/blob/master/img/where-to-code.png)

## Get Help !
We maintain an example based code documentation

All you need to know to solve those exercises is described in them.
- [Primitive and Operators](https://github.com/nan-academy/js-training/blob/master/examples/primitive-and-operators.js) [[screencast](https://scrimba.com/c/cwyaEAd)]
- [Variables](https://github.com/nan-academy/js-training/blob/master/examples/variables.js) [[screencast](https://scrimba.com/c/cLrBKA8)]
- [Data-Structures](https://github.com/nan-academy/js-training/blob/master/examples/data-structures.js) [[screencast](https://scrimba.com/c/c9Py3sG)]
- [Get](https://github.com/nan-academy/js-training/blob/master/examples/get.js) [[screencast](https://scrimba.com/c/cvzg2Tq)]
- [Set](https://github.com/nan-academy/js-training/blob/master/examples/set.js) [[screencast](https://scrimba.com/c/cbWrGcg)]
- ...[full list](https://github.com/nan-academy/js-training/tree/master/examples)

And we also made you a currated list of all the most usefull methods :

- Math
  [min](https://devdocs.io/javascript/global_objects/math/min),
  [max](https://devdocs.io/javascript/global_objects/math/max),
  [abs](https://devdocs.io/javascript/global_objects/math/abs),
  [sign](https://devdocs.io/javascript/global_objects/math/sign),
  [round](https://devdocs.io/javascript/global_objects/math/round),
  [floor](https://devdocs.io/javascript/global_objects/math/floor),
  [ceil](https://devdocs.io/javascript/global_objects/math/ceil),
  [trunc](https://devdocs.io/javascript/global_objects/math/trunc),
  _[random](https://devdocs.io/javascript/global_objects/math/random)*_
- String
  - Transform
    [slice](https://devdocs.io/javascript/global_objects/string/slice),
    [split](https://devdocs.io/javascript/global_objects/string/split),
    [replace](https://devdocs.io/javascript/global_objects/string/replace),
    [toUpperCase](https://devdocs.io/javascript/global_objects/string/touppercase),
    [toLowerCase](https://devdocs.io/javascript/global_objects/string/tolowercase),
    [trim](https://devdocs.io/javascript/global_objects/string/trim),
    [trimRight](https://devdocs.io/javascript/global_objects/string/trimright),
    [trimLeft](https://devdocs.io/javascript/global_objects/string/trimleft),
    [padStart](https://devdocs.io/javascript/global_objects/string/padstart),
    [padEnd](https://devdocs.io/javascript/global_objects/string/padend)
  - Search
    [includes](https://devdocs.io/javascript/global_objects/string/includes),
    [startsWith](https://devdocs.io/javascript/global_objects/string/startswith),
    [endsWith](https://devdocs.io/javascript/global_objects/string/endswith),
    [indexOf](https://devdocs.io/javascript/global_objects/string/indexof),
    [lastIndexOf](https://devdocs.io/javascript/global_objects/string/lastindexof),
    [charCodeAt](https://devdocs.io/javascript/global_objects/string/charcodeat)
- Arrays
[Array.from](https://devdocs.io/javascript/global_objects/array/from),
[Array.isArray](https://devdocs.io/javascript/global_objects/array/isarray),
_[fill](https://devdocs.io/javascript/global_objects/array/fill)*_
  - Search
    [find](https://devdocs.io/javascript/global_objects/array/find),
    [findIndex](https://devdocs.io/javascript/global_objects/array/findindex),
    [includes](https://devdocs.io/javascript/global_objects/array/includes),
    [indexOf](https://devdocs.io/javascript/global_objects/array/indexof),
    [lastIndexOf](https://devdocs.io/javascript/global_objects/array/lastindexof)
  - Transform
    [concat](https://devdocs.io/javascript/global_objects/array/concat),
    [join](https://devdocs.io/javascript/global_objects/array/join),
    [slice](https://devdocs.io/javascript/global_objects/array/slice),
    _[pop](https://devdocs.io/javascript/global_objects/array/pop)*_,
    _[push](https://devdocs.io/javascript/global_objects/array/push)*_,
    _[shift](https://devdocs.io/javascript/global_objects/array/shift)*_,
    _[unshift](https://devdocs.io/javascript/global_objects/array/unshift)*_,
    _[splice](https://devdocs.io/javascript/global_objects/array/splice)*_
  - Re-order
    _[reverse](https://devdocs.io/javascript/global_objects/array/reverse)*_,
    _[sort](https://devdocs.io/javascript/global_objects/array/sort)*_
  - Functionnal Iteration
    [forEach](https://devdocs.io/javascript/global_objects/array/foreach),
    [filter](https://devdocs.io/javascript/global_objects/array/filter),
    [some](https://devdocs.io/javascript/global_objects/array/some),
    [every](https://devdocs.io/javascript/global_objects/array/every),
    [map](https://devdocs.io/javascript/global_objects/array/map),
    [reduce](https://devdocs.io/javascript/global_objects/array/reduce),
    [reduceRight](https://devdocs.io/javascript/global_objects/array/reduceright)
- Object
  [keys](https://devdocs.io/javascript/global_objects/object/keys),
  [values](https://devdocs.io/javascript/global_objects/object/values),
  [entries](https://devdocs.io/javascript/global_objects/object/entries),
  [assign](https://devdocs.io/javascript/global_objects/object/assign),
  [fromEntries](https://devdocs.io/javascript/global_objects/object/fromEntries)

_(*) methods in italics are **NOT** pure (using them with the same arguments won't return the same result).
They must be used with caution as it is harder to predict their results_

## Update
We may update tests, to apply them fetch and merge the master branch back to
your branch.

```sh
git merge pull push branch checkout origin master stash pop
```

## Test Style
We recommand to use [`editorconfig`](http://editorconfig.org/#download) to
auto-config your editor to match the coding style

We also made an `.eslint` rule to help you formating your code.

You may want to use [`eslint`](https://eslint.org/) and [`prettier-eslint`](https://github.com/prettier/prettier-eslint) for painless application of
the style

## Automated test
We recommand to use [Travis](https://travis-ci.org) to automatise the testing phase, allow this repo and add this code in your README
`[![Build Status](https://travis-ci.org/GITHUB_LOGIN/js-training.svg?branch=master)](https://travis-ci.org/GITHUB_LOGIN/js-training)`
by remplacing GITHUB_LOGIN by your github login

## Contribute
We greatly recommand you to add your own tests to this list

- add your test file *(ex: `exercises/my-test.js`)*
- edit `package.json` and add `"my-test"` to the `"tests"` array with the syntax `{"tag": X, "name": NAME}` where you replace the tag (x) and the name (NAME)
- make a pull request !`https://github.com/nan-academy/js-training/compare/master...GITHUB_LOGIN:master`

*All the tests must be written using [assert](https://nodejs.org/api/assert.html)
for `./tester` to work properly.*
