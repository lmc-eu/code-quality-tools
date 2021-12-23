const base = require('@lmc-eu/eslint-config-base');

module.exports = {
  extends: ['@lmc-eu/eslint-config-base', './rules/react', './rules/react-a11y', './rules/react-hooks'].map(
    require.resolve,
  ),

  parser: '@babel/eslint-parser',

  env: {
    browser: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      node: {
        extensions: ['.jsx', ...base.settings['import/resolver'].node.extensions],
      },
    },
  },

  rules: {},
};
