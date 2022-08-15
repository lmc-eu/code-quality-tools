module.exports = {
  rules: {
    /**
     * Rules taken over from currently preferred code style settings (LEGACY).
     */

    // Docs: https://stylelint.io/user-guide/rules/list/declaration-no-important
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],

    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-class
    'selector-max-class': 5,

    // Docs: https://stylelint.io/user-guide/rules/list/selector-max-id
    'selector-max-id': 1,

    // Docs: https://stylelint.io/user-guide/rules/list/font-weight-notation
    'font-weight-notation': 'numeric',

    // Docs: https://stylelint.io/user-guide/rules/list/unit-allowed-list
    'unit-allowed-list': ['em', 'rem', '%', 's', 'px', 'pt', 'ex', 'deg', 'cm', 'fr', 'vh', 'vw'],

    // Docs: https://stylelint.io/user-guide/rules/list/color-named
    'color-named': 'never',

    /**
     * Modified rules of community-maintained configs:
     */

    // Default value: 'always' with secondary options.
    // Reason: Turned off to support grouping variables using empty lines.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    'scss/dollar-variable-empty-line-before': null,

    // Default value: 'never'
    // Reasons:
    // - The aim is unified markdown;
    // - mixin is a callable function;
    // - will not be misunderstood with extended selector.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // Default value: true
    // Reason: Since there is `max-line-length` rule se to max. 120 chars, it should be allowed to use a new line for better code readability.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md
    'scss/operator-no-newline-after': null,

    // Default value: true
    // Reasons:
    // - In some cases it is handy to use functions like `unquote`;
    // - values come from Supernova, so you never know what you're going to get.
    // Docs: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
    'scss/function-unquote-no-unquoted-strings-inside': null,
  },
};
