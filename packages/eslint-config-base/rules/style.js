export default {
  name: '@alma-oss/eslint-config-base/rules/style',
  rules: {
    // === AIRBNB BASE RULES ===
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['off', 'consistent'],

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // require trailing commas in multiline object literals
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    'func-names': 'warn',

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['off', 'expression'],

    // require line breaks inside function parentheses if there are line breaks between parameters
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'multiline-arguments'],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforce consistent spacing between properties in object literals
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': ['error', { before: true, after: true }],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // require a space before & after certain keywords
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // specify the maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['off', 4],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // specify the maximum depth callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration
    // https://eslint.org/docs/rules/max-params
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    // https://eslint.org/docs/rules/max-statements
    'max-statements': ['off', 10],

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    // https://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // require a new line after each member of a multiline chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    // disallow mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // disallow use of multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary operators
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // disallow use of the Array constructor
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // disallow comments inline after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // disallow space between function identifier and application
    // https://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'error',

    // disallow tab characters entirely
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // disallow the use of ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // disallow use of certain string escape sequences in string literals
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // require or disallow padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // require or disallow padding inside curly braces for destructuring assignment
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],

    // enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // require or disallow an newline around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // require or disallow one variable declaration per scope
    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // require assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // enforce operators to be placed before or after line breaks
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow padding inside parentheses
    'padded-blocks': ['error', 'never'],

    // Require a default case in switch statements
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement[right.type="CallExpression"][right.callee.object.name="arguments"]',
        message: 'iterating over arguments.entries() will break. Use Array.from(arguments) instead.',
      },
      {
        selector: 'TemplateLiteral',
        message: 'Avoid using template strings',
      },
    ],

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: false }],

    // require variables within the same declaration block to be sorted
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': ['error', 'always'],

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // require or disallow spaces inside parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/', '*'],
          balanced: true,
        },
      },
    ],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',

    // === ALMA CUSTOMIZATIONS ===
    // ALMA: Disabled - Alma allows for-in and for-of loops
    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off', // airbnb forbids for-in/for-of loops

    // ALMA: Custom rule for padding between statements
    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],

    // ALMA: Custom rule for class members spacing
    // Require an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // ALMA: Prefer single quotes
    quotes: ['warn', 'single'], // airbnb: ['error', 'single', { avoidEscape: true }]

    // ALMA: Changed max-len from 100 to 120 characters
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ], // airbnb: 100 characters

    // ALMA: Downgraded from error to warn
    // Enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // Enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['warn', 'consistent'], // airbnb: ['error', 'consistent']

    // ALMA: Downgraded from error to warn
    // Enforces spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'warn', // airbnb: ['error', ...]

    // ALMA: Downgraded from error to warn
    // Require a space before & after certain keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'warn', // airbnb: ['error', ...]

    // ALMA: Downgraded from error to warn
    // Require or disallow space before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'warn', // airbnb: ['error', 'always']

    // ALMA: Downgraded from error to warn
    // Require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': 'warn', // airbnb: ['error', ...]

    // ALMA: Downgraded from error to warn
    // Require spaces around operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // Require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'warn', // airbnb: ['error', ...]

    // ALMA: Downgraded from error to warn
    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ], // airbnb: ['error', ...]

    // ALMA: Downgraded from error to warn
    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'warn', // airbnb: 'error'

    // ALMA: Downgraded from error to warn
    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'warn', // airbnb: ['error', {...}]

    // ALMA: Downgraded from error to warn
    // Require or disallow padding inside curly braces
    'object-curly-spacing': 'warn', // airbnb: ['error', 'always']

    // ALMA: Downgraded from error to warn
    // enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'warn', // airbnb: ['error', {...}]

    // ALMA: Downgraded from error to warn
    // require or disallow an newline around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'warn', // airbnb: ['error', 'always']

    // ALMA: Downgraded from error to warn
    // require or disallow padding inside parentheses
    'padded-blocks': 'warn', // airbnb: ['error', 'never']
  },
};
