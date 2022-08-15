module.exports = {
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-order'],
  extends: [
    './rules/stylelint-config-standard-scss-overrides',
    './rules/extras-legacy',
    './rules/properties-order-legacy',
  ],
};
