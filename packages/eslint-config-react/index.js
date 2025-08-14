import base from '@alma-oss/eslint-config-base';
import settings from '@alma-oss/eslint-config-base/settings';
import babelParser from '@babel/eslint-parser';
import react from './rules/react.js';
import reactA11y from './rules/react-a11y.js';
import reactHooks from './rules/react-hooks.js';

export default [
  ...base,
  react,
  reactA11y,
  reactHooks,
  {
    name: '@alma-oss/eslint-config-react',
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      globals: {
        browser: true,
        es6: true,
      },
    },

    rules: {},

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        node: {
          extensions: ['.jsx', ...settings['import/resolver'].node.extensions],
        },
      },
    },
  },
];
