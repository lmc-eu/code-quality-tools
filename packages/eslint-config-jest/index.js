import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import globs from '@lmc-eu/eslint-config-base/globs.js';
import jest from 'eslint-plugin-jest';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
  {
    extends: compat.extends('plugin:jest-formatting/recommended'),
    files: [...globs.tests, 'config/jest/**'],

    plugins: { jest },

    languageOptions: {
      globals: {
        jest: true,
      },
    },

    rules: {},
  },
];
