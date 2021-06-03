module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: '@lmc-eu/conventional-changelog-lmc-bitbucket',
  ignores: [commit => commit.includes('[CI-SKIP]')],
  rules: {
    'type-case': [1, 'always', 'pascal-case'],
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Test',
        'Revert',
        'Perf',
        'Chore',
        'Deps',
        'BREAKING CHANGES',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
