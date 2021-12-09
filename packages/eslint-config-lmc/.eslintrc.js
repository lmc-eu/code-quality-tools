const { prettierConfig } = require('@lmc-eu/prettier-config');

module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },

  ignorePatterns: ['node_modules', '!.*.js'],

  extends: [
    '@lmc-eu/eslint-config-base',
    '@lmc-eu/eslint-config-base/optional',
    'prettier',
  ],

  plugins: ['html', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
  },
};
