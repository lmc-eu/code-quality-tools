module.exports = {
  rules: {
    // Disallow Early Use
    // This rule will warn when it encounters a reference to an identifier that has not been yet
    // declared (but is declared later)
    // Function declarations are exempted from the rule, so it is allowed to use a function name
    // before its declaration
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
  },
};
