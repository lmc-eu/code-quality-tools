import baseOptional from '@alma-oss/eslint-config-base/optional';

export default [
  ...baseOptional,
  {
    name: '@alma-oss/eslint-config-typescript/optional',
    rules: {
      // TS code is mostly self-documented and having JSDoc directives for everything is redundant
      // when you can easily infer return values and argument types from the code itself.
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-param-type': 'off',
    },
  },
];
