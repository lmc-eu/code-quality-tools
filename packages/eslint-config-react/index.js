import base from '@lmc-eu/eslint-config-base/index.js';
import babelParser from '@babel/eslint-parser';
import react from './rules/react.js';
import reactA11y from './rules/react-a11y.js';
import reactHooks from './rules/react-hooks.js';

export const config = {
  languageOptions: {
    parser: babelParser,
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
        extensions: ['.jsx', ...base.settings['import/resolver'].node.extensions],
      },
    },
  },
};

export default [...base, react, reactA11y, reactHooks, config];
