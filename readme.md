## Setup
```sh
# download the code locally
git clone https://github.com/wildcodeschoolparis/js-training.git

# change working directory to the newly cloned repository
cd js-training

# get on your own branch
git checkout -b mybranch
```

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

![where-to-code](https://github.com/wildcodeschoolparis/js-training/blob/master/img/where-to-code.png)

## Testing
Once you have coded your masterpiece, you can start to test your solutions.

You may either use our test tool to check all files
```sh
# run the test runner
./tester
```
![output-tester](https://github.com/wildcodeschoolparis/js-training/blob/master/img/output-tester.png)

Or you can test files one by one with node
```sh
# open the file in node
node primitive.js
```
![output-node](https://github.com/wildcodeschoolparis/js-training/blob/master/img/output-node.png)

*our tester may include bugs, feel free to check the code and fix it*

(in doubt use node)

## Update
We may update tests, to apply them fetch and merge the master branch back to
your branch.

```sh

```


## Test Style
We recommand to use [`editorconfig`](http://editorconfig.org/#download) to
auto-config your editor to match the coding style

We also made an `eslint` rule to help you formating your code.

You may want to use [`eslint`](https://eslint.org/) and [`prettier-eslint`](https://github.com/prettier/prettier-eslint) for painless application of
the style


## Contribute
We greatly recommand you to add your own tests to this list
