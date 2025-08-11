import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb-base/legacy')),
  {
    name: '@lmc-eu/eslint-config-base/legacy',

    rules: {},
  },
];
