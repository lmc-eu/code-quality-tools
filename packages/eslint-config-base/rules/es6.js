export default {
  rules: {
    // Require braces in arrow function body
    // This rule can enforce the use of braces around arrow function body.
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['warn', 'as-needed'],

    // Require space before/after arrow function's arrow
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'warn', // airbnb error

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'warn', // airbnb off
  },
};
