import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const compat = new FlatCompat();

export default [
  ...fixupConfigRules(compat.extends('eslint-config-airbnb/rules/react-hooks')),
  {
    name: '@alma-oss/eslint-config-react/rules/react-hooks',
    rules: {
      // Plugin enforces the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
