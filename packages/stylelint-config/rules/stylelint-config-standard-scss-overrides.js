export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    // Accept selector class pattern according to BEM methodology for general components
    // and kebab-case for utility components.
    // Docs: https://stylelint.io/user-guide/rules/list/selector-class-pattern
    'selector-class-pattern': [
      '(^([A-Z][a-zA-Z0-9]*)((--|__)[a-z][a-zA-Z0-9]*)*$)|(^([a-z][a-z0-9]*)(-[a-z0-9]+)*$)',
      {
        message:
          'Expected class selector to be in format `MyComponent__myElement`, `MyComponent--modifier` ' +
          'or `kebab-case` for utility classes (selector-class-pattern)',
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

    // Allow only kebab-case variables naming. For private variables also allow underscore prefix.
    // Reason: To allow underscore prefix for private variables.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
    'scss/dollar-variable-pattern': [
      '^(_?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message:
          'Expected variable to be kebab-case. Underscore prefix for private variables is allowed (scss/dollar-variable-pattern)',
      },
    ],
  },
};
