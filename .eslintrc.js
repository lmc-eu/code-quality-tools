const eslintConfig = require('./packages/eslint-config-lmc');

module.exports = {
  reportUnusedDisableDirectives: true,

  ...eslintConfig,
};
