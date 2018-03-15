## Setup
First, [**fork**](https://github.com/nan-academy/js-training/fork?fragment=1) this repository.
```sh
# download your code locally
git clone https://github.com/GITHUB_LOGIN/js-training.git

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

Or you can test files one by one with node
```sh
# open a file in node
node exercises/primitive
```
![output-node](https://github.com/nan-academy/js-training/blob/master/img/output-node.png)

*our tester may include bugs, feel free to check the code and fix it*

(in doubt use node)

## Solving
You can start editing the javascript files with your favorite text editor.
```sh
# Sublime Text
subl primitive.js

# VSCode
code primitive.js

# Vim
vim primitive.js

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


## Contribute
We greatly recommand you to add your own tests to this list

- add your test file *(ex: `exercises/my-test.js`)*
- edit `package.json` and add `"my-test"` to the `"tests"` array
- make a pull request ! `https://github.com/nan-academy/js-training/compare/master...GITHUB_LOGIN:master`

*All the tests must be written using [assert](https://nodejs.org/api/assert.html)
for `./tester` to work properly.*
