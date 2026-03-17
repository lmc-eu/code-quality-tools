import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

// TODO: Convert whitespace.js to flat config format
// This file currently uses FlatCompat due to its complex programmatic logic with dynamic rule generation
// Consider refactoring in a follow-up PR to eliminate the last FlatCompat dependency
const compat = new FlatCompat();

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb-base/whitespace')),
  {
    name: '@alma-oss/eslint-config-base/whitespace',

    rules: {},
  },
];
