module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
  ].map(require.resolve),
  rules: {
    // This rule allows you to enforce curly braces or disallow unnecessary curly braces
    //  in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['warn', 'never'],

    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/display-name": ["warn", { "ignoreTranspilerName": true }],

    // PropTypes improve the reusability of your component by validating the received data
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['warn'],

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],

    // Prevent usage of setState in componentDidUpdate, no-op for >= v16.3
    // @see https://github.com/airbnb/javascript/issues/1875
    'react/no-did-update-set-state': 'warn',

    // Restrict file extensions that may contain JSX
    // JSX belongs to .js files.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ['error', { "extensions": [".js", ".jsx"] }],

    // Disallow JSX props spreading
    // Used inside HOC, that is fine.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    "react/jsx-props-no-spreading": ['warn', {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: [],
    }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        ignoreClassFields: true,
      },
    ],

    // Enforce shorthand or standard form for React fragments
    // we use both
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 'warn',

    // Disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': [
      'warn',
      {
        when: 'never',
        allowMultiline: true,
      },
    ],

    // Enforce or disallow spaces around equal signs in JSX attributes
    // This rule will enforce consistency of spacing around equal signs in JSX attributes, by
    // requiring or one or more spaces before and after =.
    'react/jsx-equals-spacing': ['warn', 'never'],

    // Warn if an element that likely requires a key prop--namely, one present in an array literal
    //  or an arrow function expression
    // In AirBnb this rule is turned off because it has too many false positives
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'warn',

    // A bind call or arrow function in a JSX prop will create a brand new function on every single
    //  render. This is bad for performance, as it may cause unnecessary re-renders if a brand new
    // function is passed as a prop to a component that uses reference equality check on the prop
    // to determine if it should update
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': ['warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  }
};
