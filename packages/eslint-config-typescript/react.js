import reactConfig from '@alma-oss/eslint-config-react';
import globs from '@alma-oss/eslint-config-base/globs';
// eslint-disable-next-line import/no-unresolved
import parser from '@typescript-eslint/parser';

export default [
  ...reactConfig,
  {
    name: '@alma-oss/eslint-config-typescript/react',
    languageOptions: {
      parser,
    },
    rules: {
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    },
  },
  // Storybook
  {
    files: globs.storybook,
    rules: {
      '@typescript-eslint/consistent-type-assertions': 'off',
      'import/group-exports': 'off',
      'import/exports-last': 'off',
      'import/no-default-export': 'off',
    },
  },
  // Next.js
  {
    files: globs.nextJs,
    rules: {
      'import/no-default-export': 'off',
    },
  },
  // Tests
  {
    files: globs.tests,
    rules: {
      'import/no-unused-modules': 'off',
      'jest/expect-expect': 'off',
    },
  },
];
