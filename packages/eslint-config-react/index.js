import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import base from '@alma-oss/eslint-config-base';
import settings from '@alma-oss/eslint-config-base/settings';
import babelParser from '@babel/eslint-parser';
import react from './rules/react.js';
import reactA11y from './rules/react-a11y.js';
import reactHooks from './rules/react-hooks.js';

const compat = new FlatCompat();

export default [
  ...base,
  ...fixupConfigRules(compat.extends('eslint-config-airbnb/rules/react')),
  ...fixupConfigRules(compat.extends('eslint-config-airbnb/rules/react-hooks')),
  ...fixupConfigRules(compat.extends('eslint-config-airbnb/rules/react-a11y')),
  {
    name: '@alma-oss/eslint-config-react',
    files: ['**/*.{js,jsx}'],
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
    },

    rules: {
      ...react.rules,
      ...reactA11y.rules,
      ...reactHooks.rules,
    },

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
