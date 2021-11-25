'use strict';

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      {
        properties: ['content', 'position'],
      },
      {
        order: 'flexible',
        properties: ['top', 'right', 'bottom', 'left'],
      },
      {
        properties: [
          'display',
          'flexbox',
          'grid',
          'clear',
          'float',
          'overflow',
          'overflow-x',
          'overflow-y',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
        ],
      },
      {
        order: 'flexible',
        properties: ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
      },
      {
        order: 'flexible',
        properties: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
      },
      {
        order: 'flexible',
        properties: ['font', 'font-family', 'font-style', 'font-size', 'font-weight', 'color'],
      },
      {
        properties: [
          'text-align',
          'text-transform',
          'text-decoration',
          'text-indent',
          'line-height',
          'list-style',
          'vertical-align',
        ],
      },
      {
        properties: ['color'],
      },
      {
        properties: [
          'background',
          'background-image',
          'background-color',
          'background-clip',
          'background-position',
          'background-repeat',
          'background-attachment',
          'border',
          'border-color',
          'border-left',
          'border-right',
          'border-top',
          'border-bottom',
        ],
      },
      {
        order: 'flexible',
        properties: ['border-radius', 'box-shadow', 'box-sizing'],
      },
      {
        order: 'flexible',
        properties: ['z-index'],
      },
    ],
  },
};
