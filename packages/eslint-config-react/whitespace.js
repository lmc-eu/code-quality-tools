import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    extends: compat.extends('eslint-config-airbnb/whitespace'),
    rules: {},
  },
];
