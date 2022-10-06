module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: '@lmc-eu/conventional-changelog-lmc',
  ignores: [(commit) => commit.includes('[CI-SKIP]')],
  rules: {
    'type-case': [
      1,
      'always',
      // We are using `pascal-case` for every type but
      // allowing `upper-case` only for use of `BREAKING CHANGE(S)`
      // so this should not lead to define any other type in `upper-case`
      ['pascal-case', 'upper-case'],
    ],
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
        'BREAKING CHANGE',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
