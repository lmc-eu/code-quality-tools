const base = require('@lmc-eu/eslint-config-base');
const globs = require('@lmc-eu/eslint-config-base/globs');

module.exports = {
  extends: [...require.resolve('@lmc-eu/eslint-config-base'), 'plugin:@typescript-eslint/recommended'],

  settings: {
    // Correctly recognize .ts and .d.ts files when checking import paths against the filesystem
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.d.ts', ...base.settings['import/resolver'].node.extensions],
      },
      // Correctly recognize paths defined in tsconfig.json for package aliases
      typescript: {},
    },
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint'],

  env: {
    es6: true,
  },

  rules: {
    // Disallow the declaration of empty interfaces
    // An empty interface is equivalent to its supertype. If the interface does not implement a
    // supertype, then the interface is equivalent to an empty object ({}). In both cases it can be
    // omitted.
    '@typescript-eslint/no-empty-interface': 'warn',

    // For some reason we need to make a copy of the rule configuration object for ESLint v8.12.0 because it complains
    // that the object must not have additional properties. I suspect that something is mutating our object along the
    // way.
    // TODO: remove this once this is fixed in ESLint
    '@typescript-eslint/no-shadow': ['error', { allow: ['resolve', 'reject', 'done', 'next', 'error'] }],
    'no-shadow': 'off',

    // Disallow the use of variables before they are defined
    // This rule will warn when it encounters a reference to an identifier that has not yet been
    // declared.
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-use-before-define': 'off',

    // Allow alter TypesScript's compiler errors only with description
    // This rule will warn only when you use ts-expect-error, ts-ignore, ts-nocheck without description
    // @see: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
      },
    ],

    // TS code is mostly self-documented and having JSDoc directives for everything is redundant
    // when you can easily infer return values and argument types from the code itself.
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param-type': 'off',
  },

  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
    {
      files: globs.configs,
      rules: {
        'node/no-process-env': 'off',
      },
    },
  ],
};
