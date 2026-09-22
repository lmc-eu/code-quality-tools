import importPlugin from 'eslint-plugin-import';
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

export default [
  {
    name: '@alma-oss/eslint-config-base',

    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },

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
