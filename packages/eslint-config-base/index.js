import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import node from './rules/node.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import es6 from './rules/es6.js';
import importsRules from './rules/imports.js';
import strict from './rules/strict.js';
import globs from './globs.js';
import settings from './settings.js';

const compat = new FlatCompat();

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb-base')),
  {
    name: '@lmc-eu/eslint-config-base',

    settings,

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
      // @see: https://eslint.org/docs/latest/rules/no-process-env
      'node/no-process-env': 'off',
    },
  },
];
