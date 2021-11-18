module.exports = {
  extends: ['./packages/commitlint-config'],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        'browserslist',
        'commitlint',
        'conventional-changelog',
        'prettier',
        'stylelint',
        'eslint-config-base',
        'eslint-config-graphql',
      ],
    ],

    'footer-max-line-length': [0],
  },
  ignores: [(commit) => commit.includes('[CI-SKIP]'), (commit) => commit.includes('Pull request')],
};
