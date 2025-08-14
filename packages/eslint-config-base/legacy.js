import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const compat = new FlatCompat();

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb-base/legacy')),
  {
    name: '@lmc-eu/eslint-config-base/legacy',

    rules: {},
  },
];
