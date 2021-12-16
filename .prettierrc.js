const prettierConfig = require('./packages/prettier-config');

module.exports = {
  ...prettierConfig,
  overrides: [
    {
      files: '*.js',
      options: {
        printWidth: 80,
      },
    },
  ],
};
