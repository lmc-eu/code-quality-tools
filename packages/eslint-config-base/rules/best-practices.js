module.exports = {
  rules: {
    // Require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // disallow usage of expressions in statement position
    // but allow them in short circuit and ternary expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
    }],

    // Specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: 'warn', // airbnb error

    // Disallow unnecessary calls to .bind()
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'warn', // airbnb error

    // Disallow multiple spaces
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'warn', // airbnb error

    // Disallow reassigning function parameters
    // allow only reassigment of properties like in DOM object
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['warn', { props: true }], // airbnb error
  }
};
