import { FlatCompat } from '@eslint/eslintrc';
import globs from '@alma-oss/eslint-config-base/globs';
import jest from 'eslint-plugin-jest';
import { fixupPluginRules } from '@eslint/compat';

const compat = new FlatCompat();

export default [
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
  ...fixupPluginRules(compat.extends('plugin:jest-formatting/recommended')),
  {
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
