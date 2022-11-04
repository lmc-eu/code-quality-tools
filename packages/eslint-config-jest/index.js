const globs = require('@lmc-eu/eslint-config-base/globs');

module.exports = {
  overrides: [
    {
      files: [...globs.tests, 'config/jest/**'],

      plugins: ['jest', 'jest-formatting'],

      env: {
        jest: true,
      },

      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest-formatting/recommended'],

      rules: {},
    },
  ],
};
