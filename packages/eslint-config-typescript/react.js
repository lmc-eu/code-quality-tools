import reactConfig from '@lmc-eu/eslint-config-react';
import globs from '@lmc-eu/eslint-config-base/globs';

export default [
  ...reactConfig,
  {
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
