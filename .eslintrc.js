const restrictedProps = [2].concat([
  '.prototype',
  '.proto',
  '.__proto__',
  '.__defineGetter__',
  '.__defineSetter__',
  '.__lookupGetter__',
  '.__lookupSetter__',
  '.valueOf',
].map((propPath) => {
  const [ object, property, message ] = propPath.split('.')

  return { object, property, message }
}))

const restrictedGlobals = [
  'error',
  'global',
  'this',
]

const restrictedModules = [
  'error',
]

// https://github.com/eslint/espree/blob/master/lib/ast-node-types.js
const restrictedSyntax = [
  'error',
//   'AssignmentExpression',
//   'AssignmentPattern',
//   'ArrayExpression',
//   'ArrayPattern',
//   'ArrowFunctionExpression',
//   'BlockStatement',
//   'BinaryExpression',
//   'BreakStatement',
//   'CallExpression',
//   'CatchClause',
  'ClassBody',
  'ClassDeclaration',
  'ClassExpression',
//   'ConditionalExpression',
//   'ContinueStatement',
  'DoWhileStatement',
//   'DebuggerStatement',
  'EmptyStatement',
//   'ExperimentalRestProperty',
//   'ExperimentalSpreadProperty',
//   'ExpressionStatement',
  'ForStatement',
  'ForInStatement',
//   'ForOfStatement',
  'FunctionDeclaration',
  'FunctionExpression',
//   'Identifier',
//   'IfStatement',
//   'Literal',
  'LabeledStatement',
//   'LogicalExpression',
//   'MemberExpression',
//   'MetaProperty',
  'MethodDefinition',
//   'NewExpression',
//   'ObjectExpression',
//   'ObjectPattern',
//   'Program',
//   'Property',
//   'RestElement',
//   'ReturnStatement',
//   'SequenceExpression',
//   'SpreadElement',
  'Super',
//   'SwitchCase',
//   'SwitchStatement',
//   'TaggedTemplateExpression',
//   'TemplateElement',
//   'TemplateLiteral',
  'ThisExpression',
//   'ThrowStatement',
//   'TryStatement',
//   'UnaryExpression',
//   'UpdateExpression',
//   'VariableDeclaration',
//   'VariableDeclarator',
//   'WhileStatement',
  'WithStatement',
  'YieldExpression',
  'JSXIdentifier',
  'JSXNamespacedName',
  'JSXMemberExpression',
  'JSXEmptyExpression',
  'JSXExpressionContainer',
  'JSXElement',
  'JSXClosingElement',
  'JSXOpeningElement',
  'JSXAttribute',
  'JSXSpreadAttribute',
  'JSXText',
  'ExportDefaultDeclaration',
  'ExportNamedDeclaration',
  'ExportAllDeclaration',
  'ExportSpecifier',
  'ImportDeclaration',
  'ImportSpecifier',
  'ImportDefaultSpecifier',
  'ImportNamespaceSpecifier',
]

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-await-in-loop': 'error',
      // disallow await inside of loops
    'no-cond-assign': [ 'error', 'except-parens' ],
      // disallow assignment operators in conditional expressions
    'no-constant-condition': 'error',
      // disallow constant expressions in conditions
    'no-control-regex': 'error',
      // disallow control characters in regular expressions
    'no-dupe-args': 'error',
      // disallow duplicate arguments in function definitions
    'no-dupe-keys': 'error',
      // disallow duplicate keys in object literals
    'no-duplicate-case': 'error',
      // disallow duplicate case labels
    'no-empty-character-class': 'error',
      // disallow empty character classes in regular expressions
    'no-empty': 'error',
      // disallow empty block statements
    'no-ex-assign': 'error',
      // disallow reassigning exceptions in catch clauses
    'no-extra-boolean-cast': 'error',
      // disallow unnecessary boolean casts
    //'no-extra-parens': false,
      // disallow unnecessary parentheses
    'no-extra-semi': 'error',
      // disallow unnecessary semicolons
    'no-func-assign': 'error',
      // disallow reassigning function declarations
    // 'no-inner-declarations': 'error',
      // disallow variable or function declarations in nested blocks
    'no-invalid-regexp': 'error',
      // disallow invalid regular expression strings in RegExp constructors
    'no-irregular-whitespace': 'error',
      // disallow irregular whitespace outside of strings and comments
    'no-obj-calls': 'error',
      // disallow calling global object properties as functions
    // 'no-prototype-builtins': 'error',
      // disallow calling some Object.prototype methods directly on objects
    'no-regex-spaces': 'error',
      // disallow multiple spaces in regular expressions
    'no-sparse-arrays': 'error',
      // disallow sparse arrays
    'no-template-curly-in-string': 'error',
      // disallow template literal placeholder syntax in regular strings
    'no-unexpected-multiline': 'error',
      // disallow confusing multiline expressions
    'no-unreachable': 'error',
      // disallow unreachable code after return, throw, continue, and break statements
    'no-unsafe-finally': 'error',
      // disallow control flow statements in finally blocks
    'no-unsafe-negation': 'error',
      // disallow negating the left operand of relational operators
    'use-isnan': 'error',
      // require calls to isNaN() when checking for NaN
    // 'valid-jsdoc': 'error',
      // enforce valid JSDoc comments
    'valid-typeof': 'error',
      // enforce comparing typeof expressions against valid strings
    //'accessor-pairs': 'error',
      // enforce getter and setter pairs in objects
    'array-callback-return': 'error',
      // enforce return statements in callbacks of array methods
    'block-scoped-var': 'error',
      // enforce the use of variables within the scope they are defined
    'class-methods-use-this': 'error',
      // enforce that class methods utilize this
    //'complexity': 'error',
      // enforce a maximum cyclomatic complexity allowed in a program
    'consistent-return': 'error',
      // require return statements to either always or never specify values
    'curly': [ 'error', 'all' ],
      // enforce consistent brace style for all control statements
    'default-case': 'error',
      // require default cases in switch statements
    'dot-location': ['error', 'property'],
      // enforce consistent newlines before and after dots
    'dot-notation': 'error',
      // enforce dot notation whenever possible
    'eqeqeq': 'error',
      // require the use of === and !==
    //'guard-for-in': 'error',
      // require for-in loops to include an if statement
    'no-alert': 'error',
      // disallow the use of alert, confirm, and prompt
    'no-caller': 'error',
      // disallow the use of arguments.caller or arguments.callee
    'no-case-declarations': 'error',
      // disallow lexical declarations in case clauses
    //'no-div-regex': 'error',
      // disallow division operators explicitly at the beginning of regular expressions
    'no-else-return': 'error',
      // disallow else blocks after return statements in if statements
    //'no-empty-function': 'error',
      // disallow empty functions
    'no-empty-pattern': 'error',
      // disallow empty destructuring patterns
    //'no-eq-null': 'error',
      // disallow null comparisons without type-checking operators
    'no-eval': 'error',
      // disallow the use of eval()
    'no-extend-native': 'error',
      // disallow extending native types
    'no-extra-bind': 'error',
      // disallow unnecessary calls to .bind()
    'no-extra-label': 'error',
      // disallow unnecessary labels
    //'no-fallthrough': 'error',
      // disallow fallthrough of case statements
    'no-floating-decimal': 'error',
      // disallow leading or trailing decimal points in numeric literals
    'no-global-assign': 'error',
      // disallow assignments to native objects or read-only global variables
    //'no-implicit-coercion': 'error',
      // disallow shorthand type conversions
    //'no-implicit-globals': 'error',
      // disallow variable and function declarations in the global scope
    //'no-implied-eval': 'error',
      // disallow the use of eval()-like methods
    //'no-invalid-this': 'error',
      // disallow this keywords outside of classes or class-like objects
    'no-iterator': 'error',
      // disallow the use of the __iterator__ property
    'no-labels': 'error',
      // disallow labeled statements
    'no-lone-blocks': 'error',
      // disallow unnecessary nested blocks
    //'no-loop-func': 'error',
      // disallow function declarations and expressions inside loop statements
    //'no-magic-numbers': 'error',
      // disallow magic numbers
    'no-multi-spaces': 'error',
      // disallow multiple spaces
    'no-multi-str': 'error',
      // disallow multiline strings
    //'no-new-func': 'error',
      // disallow new operators with the Function object
    'no-new-wrappers': 'error',
      // disallow new operators with the String, Number, and Boolean objects
    'no-new': 'error',
      // disallow new operators outside of assignments or comparisons
    'no-octal-escape': 'error',
      // disallow octal escape sequences in string literals
    'no-octal': 'error',
      // disallow octal literals
    //'no-param-reassign': 'error',
      // disallow reassigning function parameters
    'no-proto': 'error',
      // disallow the use of the __proto__ property
    'no-redeclare': 'error',
      // disallow variable redeclaration
    'no-restricted-properties': restrictedProps,
      // disallow certain properties on certain objects
    //'no-return-assign': 'error',
      // disallow assignment operators in return statements
    'no-return-await': 'error',
      // disallow unnecessary return await
    //'no-script-url': 'error',
      // disallow javascript: urls
    'no-self-assign': 'error',
      // disallow assignments where both sides are exactly the same
    'no-self-compare': 'error',
      // disallow comparisons where both sides are exactly the same
    'no-sequences': 'error',
      // disallow comma operators
    'no-throw-literal': 'error',
      // disallow throwing literals as exceptions
    'no-unmodified-loop-condition': 'error',
      // disallow unmodified loop conditions
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
      // disallow unused expressions
    'no-unused-labels': 'error',
      // disallow unused labels
    //'no-useless-call': 'error',
      // disallow unnecessary calls to .call() and .apply()
    'no-useless-concat': 'error',
      // disallow unnecessary concatenation of literals or template literals
    'no-useless-escape': 'error',
      // disallow unnecessary escape characters
    'no-useless-return': 'error',
      // disallow redundant return statements
    'no-void': 'error',
      // disallow void operators
    //'no-warning-comments': 'error',
      // disallow specified warning terms in comments
    'no-with': 'error',
      // disallow with statements
    //'radix': 'error',
      // enforce the consistent use of the radix argument when using parseInt()
    //'require-await': 'error',
      // disallow async functions which have no await expression
    'vars-on-top': 'error',
      // require var declarations be placed at the top of their containing scope
    'wrap-iife': 'error',
      // require parentheses around immediate function invocations
    'yoda': [ 'error', 'never' ],
      // require or disallow “Yoda” conditions
    'strict': [ 'error', 'global' ],
      // require or disallow strict mode directives
    //'init-declarations': 'error',
      // require or disallow initialization in variable declarations
    // 'no-catch-shadow': 'error',
      // disallow catch clause parameters from shadowing variables in the outer scope
    'no-delete-var': 'error',
      // disallow deleting variables
    'no-label-var': 'error',
      // disallow labels that share a name with a variable
    'no-restricted-globals': restrictedGlobals,
      // disallow specified global variables
    'no-shadow-restricted-names': 'error',
      // disallow identifiers from shadowing restricted names
    'no-shadow': 'error',
      // disallow variable declarations from shadowing variables declared in the outer scope
    'no-undef-init': 'error',
      // disallow initializing variables to undefined
    'no-undef': [ 'error',  { typeof: false } ],
      // disallow the use of undeclared variables unless mentioned in /*global */ comments
    //'no-undefined': 'error',
      // disallow the use of undefined as an identifier
    'no-unused-vars': [
      'error', {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none',
      }
    ],
      // disallow unused variables
    'no-use-before-define': 'error',
      // disallow the use of variables before they are defined
    'callback-return': 'error',
      // require return statements after callbacks
    'global-require': 'error',
      // require require() calls to be placed at top-level module scope
    //'handle-callback-err': 'error',
      // require error handling in callbacks
    //'no-mixed-requires': 'error',
      // disallow require calls to be mixed with regular variable declarations
    'no-new-require': 'error',
      // disallow new operators with calls to require
    'no-path-concat': 'error',
      // disallow string concatenation with __dirname and __filename
    //'no-process-env': 'error',
      // disallow the use of process.env
    //'no-process-exit': 'error',
      // disallow the use of process.exit()
    'no-restricted-modules': restrictedModules,
      // disallow specified modules when loaded by require
    'no-sync': 'error',
      // disallow synchronous methods
    'array-bracket-spacing': [ 'error', 'always' ],
      // enforce consistent spacing inside array brackets
    'block-spacing': [ 'error', 'always' ],
      // enforce consistent spacing inside single-line blocks
    'brace-style': 'error',
      // enforce consistent brace style for blocks
    'camelcase': [ 'error', { properties: 'always' } ],
      // enforce camelcase naming convention
    //'capitalized-comments': 'error',
      // enforce or disallow capitalization of the first letter of a comment
    'comma-dangle': [ 'error', 'only-multiline' ],
      // require or disallow trailing commas
    'comma-spacing': 'error',
      // enforce consistent spacing before and after commas
    'comma-style': [ 'error', 'last' ],
      // enforce consistent comma style
    'computed-property-spacing': [ 'error', 'never' ],
      // enforce consistent spacing inside computed property brackets
    //'consistent-this': 'error',
      // enforce consistent naming when capturing the current execution context
    //'eol-last': 'error',
      // require or disallow newline at the end of files
    'func-call-spacing': [ 'error', 'never' ],
      // require or disallow spacing between function identifiers and their invocations
    //'func-name-matching': 'error',
      // require function names to match the name of the variable or property to which they are assigned
    'func-names': [ 'error', 'never' ],
      // require or disallow named function expressions
    'func-style': [ 'error', 'expression' ],
      // enforce the consistent use of either function declarations or expressions
    //'id-blacklist': 'error',
      // disallow specified identifiers
    //'id-length': 'error',
      // enforce minimum and maximum identifier lengths
    //'id-match': [
    //  'error',
    //  '^((_|[a-z])+([A-Z0-9]+[a-z0-9]*)*_?|Infinity|NaN|_)$',
    //],
      // require identifiers to match a specified regular expression
    'indent': [ 'error', 2 ],
      // enforce consistent indentation
    //'jsx-quotes': 'error',
      // enforce the consistent use of either double or single quotes in JSX attributes
    'key-spacing': [
      'error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
      // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
      },
    ],
      // enforce consistent spacing before and after keywords
    //'line-comment-position': 'error',
      // enforce position of line comments
    //'linebreak-style': 'error',
      // enforce consistent linebreak style
    //'lines-around-comment': 'error',
      // require empty lines around comments
    'lines-around-directive': [
      'error', {
        before: 'never',
        after: 'always',
      },
    ],
      // require or disallow newlines around directives
    'max-depth': [ 'error', { max: 3 } ],
      // enforce a maximum depth that blocks can be nested
    'max-len': [
      'error', {
        code: 80,
        tabWidth: 2,
      },
    ],
      // enforce a maximum line length
    //'max-lines': 'error',
      // enforce a maximum number of lines per file
    'max-nested-callbacks': [ 'error', { max: 3 } ],
      // enforce a maximum depth that callbacks can be nested
    'max-params': [ 'error', { max: 4 } ],
      // enforce a maximum number of parameters in function definitions
    //'max-statements-per-line': 'error',
      // enforce a maximum number of statements allowed per line
    //'max-statements': 'error',
      // enforce a maximum number of statements allowed in function blocks
    //'multiline-ternary': false,
      // enforce newlines between operands of ternary expressions
    'new-cap': 'error',
      // require constructor names to begin with a capital letter
    'new-parens': 'error',
      // require parentheses when invoking a constructor with no arguments
    'newline-after-var': [ 'error', 'always' ],
      // require or disallow an empty line after variable declarations
    'newline-before-return': 'error',
      // require an empty line before return statements
    //'newline-per-chained-call': 'error',
      // require a newline after each call in a method chain
    //'no-array-constructor': 'error',
      // disallow Array constructors
    //'no-bitwise': 'error',
      // disallow bitwise operators
    //'no-continue': 'error',
      // disallow continue statements
    //'no-inline-comments': 'error',
      // disallow inline comments after code
    'no-lonely-if': 'error',
      // disallow if statements as the only statement in else blocks
    'no-mixed-operators': 'error',
      // disallow mixed binary operators
    'no-mixed-spaces-and-tabs': 'error',
      // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 0 } ],
      // disallow multiple empty lines
    'no-negated-condition': 'error',
      // disallow negated conditions
    'no-nested-ternary': 'error',
      // disallow nested ternary expressions
    'no-new-object': 'error',
      // disallow Object constructors
    //'no-plusplus': 'error',
      // disallow the unary operators ++ and --
    'no-restricted-syntax': restrictedSyntax,
      // disallow specified syntax
    'no-tabs': 'error',
      // disallow all tabs
    //'no-ternary': 'error',
      // disallow ternary operators
    'no-trailing-spaces': 'error',
      // disallow trailing whitespace at the end of lines
    //'no-underscore-dangle': 'error',
      // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 'error',
      // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 'error',
      // disallow whitespace before properties
    'object-curly-newline': [ 'error', { multiline: true }, ],
      // enforce consistent line breaks inside braces
    'object-curly-spacing': [ 'error', 'always' ],
      // enforce consistent spacing inside braces
    'object-property-newline': 'error',
      // enforce placing object properties on separate lines
    'one-var-declaration-per-line': [ 'error', 'initializations' ],
      // require or disallow newlines around variable declarations
    //'one-var': 'error',
      // enforce variables to be declared either together or separately in functions
    //'operator-assignment': 'error',
      // require or disallow assignment operator shorthand where possible
    'operator-linebreak': [ 'error', 'before' ],
      // enforce consistent linebreak style for operators
    'padded-blocks': [ 'error', 'never' ],
      // require or disallow padding within blocks
    'quote-props': [ 'error',  'as-needed', { keywords: false } ],
      // require quotes around object literal property names
    'quotes': [
      'error', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
      // enforce the consistent use of either backticks, double, or single quotes
    //'require-jsdoc': 'error',
      // require JSDoc comments
    //'semi-spacing': 'error',
      // enforce consistent spacing before and after semicolons
    'semi': [ 'error', 'never' ],
      // require or disallow semicolons instead of ASI
    //'sort-keys': 'error',
      // require object keys to be sorted
    //'sort-vars': 'error',
      // require variables within the same declaration block to be sorted
    'space-before-blocks': [ 'error', 'always' ],
      // enforce consistent spacing before blocks
    //'space-before-function-paren': 'error',
      // enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': [ 'error', 'never' ],
      // enforce consistent spacing inside parentheses
    'space-infix-ops': 'error',
      // require spacing around infix operators
    'space-unary-ops': [ 'error', { words: true, nonwords: false } ],
      // enforce consistent spacing before or after unary operators
    //'spaced-comment': 'error',
      // enforce consistent spacing after the // or /* in a comment
    //'unicode-bom': 'error',
      // require or disallow Unicode byte order mark (BOM)
    //'wrap-regex': 'error',
      // require parenthesis around regex literals
    'arrow-body-style': [ 'error', 'as-needed' ],
      // require braces around arrow function bodies
    'arrow-parens': [ 'error', 'as-needed' ],
      // require parentheses around arrow function arguments
    'arrow-spacing': [ 'error', { before: true, after: true } ], 
      // enforce consistent spacing before and after the arrow in arrow functions
    //'constructor-super': 'error',
      // require super() calls in constructors
    //'generator-star-spacing': 'error',
      // enforce consistent spacing around * operators in generator functions
    //'no-class-assign': 'error',
      // disallow reassigning class members
    //'no-confusing-arrow': 'error',
      // disallow arrow functions where they could be confused with comparisons
    'no-const-assign': 'error',
      // disallow reassigning const variables
    //'no-dupe-class-members': 'error',
      // disallow duplicate class members
    //'no-duplicate-imports': 'error',
      // disallow duplicate module imports
    'no-new-symbol': 'error',
      // disallow new operators with the Symbol object
    //'no-restricted-imports': 'error',
      // disallow specified modules when loaded by import
    //'no-this-before-super': 'error',
      // disallow this/super before calling super() in constructors
    'no-useless-computed-key': 'error',
      // disallow unnecessary computed property keys in object literals
    //'no-useless-constructor': 'error',
      // disallow unnecessary constructors
    'no-useless-rename': 'error',
      // disallow renaming import, export, and destructured assignments to the same name
    'no-var': 'error',
      // require let or const instead of var
    'object-shorthand': 'error',
      // require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 'error',
      // require arrow functions as callbacks
    'prefer-const': 'error',
      // require const declarations for variables that are never reassigned after declared
    //'prefer-destructuring': 'error',
      // require destructuring from arrays and/or objects
    //'prefer-numeric-literals': 'error',
      // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-rest-params': 'error',
      // require rest parameters instead of arguments
    'prefer-spread': 'error',
      // require spread operators instead of .apply()
    //'prefer-template': 'error',
      // require template literals instead of string concatenation
    //'require-yield': 'error',
      // require generator functions to contain yield
    'rest-spread-spacing': 'error',
      // enforce spacing between rest and spread operators and their expressions
    //'sort-imports': 'error',
      // enforce sorted import declarations within modules
    //'symbol-description': 'error',
      // require symbol descriptions
    'template-curly-spacing': [ 'error', 'never' ],
      // require or disallow spacing around embedded expressions of template strings
    //'yield-star-spacing': 'error',
      // require or disallow spacing around the * in yield* expressions
  }
}
