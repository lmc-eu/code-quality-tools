import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default {
  extends: compat.extends('eslint-config-airbnb/rules/react-hooks'),
  rules: {
    // Plugin enforces the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
    'react-hooks/exhaustive-deps': 'warn',
  },
};
