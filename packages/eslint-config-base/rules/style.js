export default {
  rules: {
    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',

    // Require or disallow padding lines between statements
    // This rule requires or disallows blank lines between the given 2 kinds of statements. Properly
    // blank lines help developers to understand the code.
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],

    // Require an empty line between class members
    // This rule improves readability by enforcing lines between class members. It will not check
    // empty lines before the first member and after the last member, since that is already taken
    // care of by padded-blocks.
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // Enforce Quote Style
    // This rule is aimed at ensuring consistency of string quotes.
    // https://eslint.org/docs/rules/quotes
    quotes: ['warn', 'single'],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false, // @TODO: should we also ignore comments?
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'warn', // airbnb error

    // Enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'warn', // airbnb error

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['warn', 'consistent'], // airbnb off

    // Enforces spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'warn', // airnb error

    // Require a space before & after certain keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'warn', // airbnb error

    // Require or disallow space before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'warn', // airbnb error

    // Require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': 'warn', // airbnb error

    // Require spaces around operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'warn', // airbnb error

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'warn', // airbnb error

    // Require an empty line before return statements
    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'warn', // airbnb off

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'warn', // airbnb error

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-underscore-dangle': 'warn', // airbnb error

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn', // airbnb error

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      // airbnb error
      'warn',
      { consistent: true },
    ],
  },
};
