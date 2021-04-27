'use strict'

module.exports = {
  plugins: [
    'stylelint-order'
  ],
  defaultSeverity: 'error',
  rules: {
    'scss/partial-no-import': true,
    'block-no-empty': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-no-unknown': true,
    'property-no-unknown': [
      true,
      {
        'ignoreProperties': [
          '/^font-/'
        ]
      }
    ],
    'no-missing-end-of-source-newline': true,
    'declaration-no-important': [
      true,
      {
        'severity': 'warning'
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-no-unknown': true,
    'selector-max-class': 5,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-list-comma-newline-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': true,
    'color-no-invalid-hex': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'font-weight-notation': 'numeric',
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': [
      'always',
      {
        'ignore': [
          'rgba'
        ]
      }
    ],
    'function-name-case': [
      'lower',
      {
        'ignoreFunctions': [
          'DXImageTransform.Microsoft.Alpha'
        ]
      }
    ],
    'comment-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ],
        'ignore': [
          'stylelint-commands',
          'after-comment'
        ]
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'indentation': [
      4,
      {
        'except': [
          'value'
        ],
        'ignore': [
          'inside-parens',
          'param',
          'value'
        ]
      }
    ],
    'max-empty-lines': 2,
    'rule-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ],
        'ignore': [
          'after-comment'
        ]
      }
    ],
    'unit-case': 'lower',
    'unit-allowed-list': [
      'em',
      'rem',
      '%',
      's',
      'px',
      'pt',
      'ex',
      'deg',
      'cm',
      'fr',
      'vh',
      'vw'
    ],
    'property-case': 'lower',
    'value-keyword-case': [
      'lower',
      {
        'ignoreProperties': [
          '$font-family-base'
        ]
      }
    ],
    'at-rule-name-case': 'lower',
    'color-named': 'never',
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'ignore': [
          'consecutive-duplicates-with-different-values'
        ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        'ignoreShorthands': [
          '/^flex/'
        ]
      }
    ],
    'font-family-no-missing-generic-family-keyword': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'at-rule-empty-line-before': [
      'always',
      {
        'except': [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        'ignore': [
          'after-comment'
        ]
      }
    ],
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        'except': [
          'after-custom-property',
          'first-nested'
        ],
        'ignore': [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        'except': [
          'after-declaration',
          'first-nested'
        ],
        'ignore': [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-eol-whitespace': [
      true,
      {
        'ignore': [
          'empty-lines'
        ]
      }
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0
  }
}
