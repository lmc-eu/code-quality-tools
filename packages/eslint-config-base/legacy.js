import importPlugin from 'eslint-plugin-import';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import node from './rules/node.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import globs from './globs.js';
import settings from './settings.js';

export default [
  {
    name: '@alma-oss/eslint-config-base/legacy',

    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
    },

    settings,

    rules: {},
  },
  bestPractices,
  errors,
  node,
  style,
  variables,
  {
    name: '@alma-oss/eslint-config-base/legacy-overrides',
    rules: {
      // === AIRBNB LEGACY OVERRIDES ===
      // Legacy requires never trailing commas
      'comma-dangle': ['error', 'never'],

      // Prefer numeric literals (off in legacy)
      'prefer-numeric-literals': 'off',

      // Restrict some object properties
      'no-restricted-properties': [
        'error',
        {
          object: 'arguments',
          property: 'callee',
          message: 'arguments.callee is deprecated',
        },
        {
          property: '__defineGetter__',
          message: 'Please use Object.defineProperty instead.',
        },
        {
          property: '__defineSetter__',
          message: 'Please use Object.defineProperty instead.',
        },
      ],

      // Allow var in legacy code
      'no-var': 'off',

      // Allow prefer-object-spread in legacy code
      'prefer-object-spread': 'off',

      // Require strict mode ('safe' allows function or global)
      strict: ['error', 'safe'],
    },
  },
  {
    files: globs.configs,

    rules: {
      // Using process.env is encouraged in configuration files
      'node/no-process-env': 'off',
    },
  },
];
