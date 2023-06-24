const globs = require('@lmc-eu/eslint-config-base/globs');

module.exports = {
  overrides: [
    {
      files: [...globs.configs, ...globs, globs.typescripts],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],

      parser: '@graphql-eslint/eslint-plugin',

      plugins: ['@graphql-eslint'],

      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
};
