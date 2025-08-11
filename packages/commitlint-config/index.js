import conventionalConfig from '@commitlint/config-conventional';

export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[CI-SKIP]'), (commit) => commit.includes('[ci-skip]')],
  rules: {
    'type-enum': [
      2,
      'always',
      [...conventionalConfig.rules['type-enum'][2], 'deps', 'BREAKING CHANGES', 'BREAKING CHANGE'],
    ],
  },
};
