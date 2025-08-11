import conventionalConfig from '@commitlint/config-conventional';

export default {
  extends: ['@commitlint/config-conventional'],
  ignores: [(commit) => commit.includes('[CI-SKIP]')],
  rules: {
    'type-enum': [
      2,
      'always',
      [...conventionalConfig.rules['type-enum'][2], 'deps', 'BREAKING CHANGES', 'BREAKING CHANGE'],
    ],
  },
};
