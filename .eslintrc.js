module.exports = {
  reportUnusedDisableDirectives: true,

  ignorePatterns: ['node_modules', '!.*.js'],

  extends: ['./packages/eslint-config-base', './packages/eslint-config-base/optional', 'prettier'],

  plugins: ['prettier'],
};
