/* eslint-disable import/no-relative-packages */

import prettierConfig from 'eslint-config-prettier';
import baseConfig from './packages/eslint-config-base/index.js';
import optionalBaseConfig from './packages/eslint-config-base/optional.js';
import jestConfig from './packages/eslint-config-jest/index.js';

export default [
  ...baseConfig,
  ...optionalBaseConfig,
  ...jestConfig,
  {
    ignores: ['node_modules', '!.*.js', '**/*.mjs', '.yarn/**', '**/.remarkrc.mjs'],

    rules: {
      // Disabled because off node do not resolve
      'import/extensions': 'off',
    },
  },
  prettierConfig,
];
