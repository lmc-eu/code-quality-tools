import { FlatCompat } from '@eslint/eslintrc';
import importsPlugin from 'eslint-plugin-import';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import node from './rules/node.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import es6 from './rules/es6.js';
import importsRules from './rules/imports.js';
import strict from './rules/strict.js';
import globs from './globs.js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    extends: compat.extends('eslint-config-airbnb-base'),

    plugins: {
      import: importsPlugin,
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.cjs', '.js', '.json', '.node'],
        },
      },
    },

    rules: {},
  },
  bestPractices,
  errors,
  node,
  style,
  variables,
  es6,
  importsRules,
  strict,
  {
    files: globs.configs,

    rules: {
      // Using process.env is encouraged in configuration files
      'node/no-process-env': 'off',
    },
  },
];
