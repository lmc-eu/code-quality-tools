const globs = require('@lmc-eu/eslint-config-base/globs');

module.exports = {
  overrides: [
    {
      files: globs.tests,

      plugins: ['jest', 'jest-formatting'],

      env: {
        mocha: true,
      },

      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-formatting/recommended'],

      rules: {},
    },
  ],
};
