import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const compat = new FlatCompat();

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb/whitespace')),
  {
    name: '@alma-oss/eslint-config-react/whitespace',
    rules: {},
  },
];
