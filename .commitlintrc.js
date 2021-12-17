module.exports = {
  extends: ['./packages/commitlint-config'],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        // Use when commiting changes/additions/removals to exact package
        'browserslist',
        'commitlint',
        'conventional-changelog',
        'prettier',
        'stylelint',
        'renovate',
        'eslint-config-base',
        'eslint-config-lmc',
        'eslint-config-graphql',
        'eslint-config-react',
        'eslint-config-jest',
        // Use when commiting changes/additions/removals to packages in context
        'eslint',
        'rule',
        // Use when affecting CI process
        'ci',
        // Use for anything that does not directly affect rulesets, ie. updating repo-wide
        'repo',
      ],
    ],

    'footer-max-line-length': [0],
  },
  ignores: [(commit) => commit.includes('[CI-SKIP]'), (commit) => commit.includes('Pull request')],
};
