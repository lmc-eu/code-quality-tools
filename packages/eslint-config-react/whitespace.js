import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.extends('eslint-config-airbnb/whitespace'),
  {
    name: '@alma-oss/eslint-config-react/whitespace',
    rules: {},
  },
];
