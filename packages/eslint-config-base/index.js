const globs = require('./globs');

module.exports = {
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.cjs', '.js', '.json', '.node'],
      },
    },
  },

  extends: [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/strict',
  ].map(require.resolve),

  rules: {},

  overrides: [
    {
      files: globs.configs,

      rules: {
        // Using process.env is encouraged in configuration files
        'node/no-process-env': 'off',
      },
    },
  ],
};
