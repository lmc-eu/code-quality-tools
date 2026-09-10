module.exports = {
  rules: {
    '@alma-oss/textlint-rule-preset-alma': {
      'title-case': {
        headingLevels: [6],
        exclude: [
          '@lmc-eu',
          '@lmc-eu/stylelint-config',
          '@lmc-eu/eslint-config-react',
          '@lmc-eu/eslint-config-react/optional',
          '@lmc-eu/eslint-config-base',
          '@lmc-eu/eslint-config-base/optional',
          '@lmc-eu/eslint-config-base/legacy',
          '@lmc-eu/eslint-config-base/whitespace',
          '@lmc-eu/commitlint-config',
          '@alma-oss/textlint-rule-preset-alma',
        ],
      },
    },
  },
};
