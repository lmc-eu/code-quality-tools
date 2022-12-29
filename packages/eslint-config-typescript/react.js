const globs = require('@lmc-eu/eslint-config-base/globs');
// We are not listing '@lmc-eu/eslint-config-react' in dependencies on purpose -
// - we don't want to spam Node.js users with unwanted React config.
// Also on the other hand we believe that React users will already have
// @lmc-eu/eslint-config-react configuration installed.
// eslint-disable-next-line import/no-extraneous-dependencies
const react = require('@lmc-eu/eslint-config-react');

module.exports = {
  rules: {
    ...react.rules,

    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  overrides: [
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
  ],
};
