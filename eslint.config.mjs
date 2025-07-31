import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import base from './packages/eslint-config-base/index.js';
import optional from './packages/eslint-config-base/optional.js';
import jest from './packages/eslint-config-jest/index.js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  ...base,
  ...optional,
  ...jest,
  {
    plugins: { prettier },

    rules: {
      'import/extensions': 'off',
      'comma-dangle': 0,
      'max-len': 0,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  globalIgnores(['node_modules', '!.*.js', '**/*.mjs']),
]);
