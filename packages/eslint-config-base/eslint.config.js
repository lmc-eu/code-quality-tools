import base from './index.js';

export default [
  ...base,
  {
    rules: {
      // disable requiring trailing commas because it might be nice to revert to
      // being JSON at some point, and I don't want to make big changes now.
      'comma-dangle': 0,

      'max-len': 0,

      // Disabled because off node do not resolve
      'import/extensions': 'off',
    },
  },
];
