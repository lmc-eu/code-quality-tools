export default {
  settings: {
    emphasis: '_',
  },

  plugins: [
    'preset-lint-recommended',
    'preset-lint-consistent',
    'preset-lint-markdown-style-guide',

    // warn when the spacing between a list item’s bullet and its content violates a given style
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-indent
    ['lint-list-item-indent', 'one'],
    // warn when lines are too long
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-line-length
    ['lint-maximum-line-length', Infinity],
    // warn when emphasis markers violate the given style
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-emphasis-marker
    ['lint-emphasis-marker', '_'],
    // warn when table pipes are not aligned
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-pipe-alignment
    ['lint-table-pipe-alignment', false],
    // warn when table cells are incorrectly padded
    // @see: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-cell-padding
    ['lint-table-cell-padding', 'consistent'],
    ['lint-no-undefined-references', { allow: ['x'] }],
  ],
};
