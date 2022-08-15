module.exports = {
  extends: ['stylelint-config-standard-scss'].map(require.resolve),
  rules: {
    // Accept selector class pattern according to BEM methodology for general components
    // and kebab-case for utility components.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-class-pattern
    'selector-class-pattern': [
      '(^([A-Z][a-zA-Z0-9]*)((--|__)[a-z][a-zA-Z0-9]*)*$)|(^([a-z][a-z0-9]*)(-[a-z0-9]+)*$)',
      {
        message:
          'Expected class selector to be in format `MyComponent__myElement`, `MyComponent--modifier` or `kebab-case` for utility classes',
      },
    ],

    // Default value: 'double'
    // Reason: Keep unified with other languages. In CSS there may occur double quotes in variable values.
    // Docs: https://stylelint.io/user-guide/rules/list/string-quotes
    'string-quotes': 'single',

    // Default value: true
    // Reason: Generally developers don't quite understand flexbox and CSS grid. Let's avoid shorthands to easier readability for everyone.
    // Docs: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['/^flex/', '/^grid/'],
      },
    ],

    // All options remained as defaults except secondary option `blockless-after-blockless` that had changed to `blockless-after-same-name-blockless`.
    // Reason: To keep `at rules` grouped.
    // Docs: https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
  },
};
