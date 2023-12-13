const globs = require('./globs');

module.exports = {
  extends: ['plugin:jsdoc/recommended'],

  plugins: ['import', 'jsdoc'],

  rules: {
    // Require Consistent Returns
    // This rule is aimed at ensuring all return statements either specify a value or don't specify
    // a value.
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': [
      'warn',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],

    // Limit Maximum Depth
    // This rule aims to reduce the complexity of your code by allowing you to configure the maximum
    // depth blocks can be nested in a function.
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['warn', 5],

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    // If you are tempted to create anonymous function expression, consider using arrow function
    // instead.
    // https://eslint.org/docs/rules/func-names
    'func-names': ['warn', 'as-needed'],

    // Disallow Use of `undefined` Variable
    // In ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5
    // disallows overwriting undefined, it's still possible to shadow `undefined`.
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'warn',

    // Require symbol description
    // This rule requires a description when creating symbols. Using description promotes easier
    // debugging - when a symbol is logged the description is used.
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'warn',

    // Reports if a resolved path is imported more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    'import/no-duplicates': 'warn',

    // Require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'error', // airbnb error

    // Enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'error', // airbnb error

    // Specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: 'error', // airbnb error

    // Enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'error', // airbnb error

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'], // airbnb off

    // Enforces spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'error', // airnb error

    // Require a space before & after certain keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'error', // airbnb error

    // Require or disallow space before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error', // airbnb error

    // Require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      // airbnb error
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Require spaces around operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error', // airbnb error

    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'error', // airbnb error

    // Require or disallow strict mode directives
    // https://eslint.org/docs/rules/strict
    strict: 'error', // airbnb error

    // Require an empty line before return statements
    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'error', // airbnb off

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error', // airbnb off

    // Disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'error', // airbnb error

    // Disallow unnecessary calls to .bind()
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error', // airbnb error

    // Disallow unnecessary semicolons
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error', // airbnb error

    // Disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error', // airbnb error

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error', // airbnb error

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-underscore-dangle': 'error', // airbnb error

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error', // airbnb error

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      // airbnb error
      'error',
      { consistent: true },
    ],

    // Disallow reassigning function parameters
    // allow only reassigment of properties like in DOM object
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { props: true }], // airbnb error

    // Requires that each @param tag has a description value.
    // it is better to focus on descriptive variable name
    // and not to require an useless comments which should be redundant
    // @see: https://github.com/lmc-eu/cookie-consent-manager/pull/120
    // https://github.com/gajus/eslint-plugin-jsdoc#require-param-description
    'jsdoc/require-param-description': ['off'],

    // Requires that each @returns tag has a description value.
    // it is better to focus on descriptive variable name
    // and not to require an useless comments which should be redundant
    // @see: https://github.com/lmc-eu/cookie-consent-manager/pull/120
    // https://github.com/gajus/eslint-plugin-jsdoc#require-returns-description
    'jsdoc/require-returns-description': ['off'],

    // Require an empty line after description to ensure better readability
    // @see: https://github.com/lmc-eu/code-quality-tools/issues/158
    // https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
  },

  overrides: [
    {
      files: globs.tests,

      rules: {
        // Do not require function names in test files
        'func-names': 'off',
      },
    },
  ],
};
