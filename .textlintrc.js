module.exports = {
  rules: {
    '@lmc-eu/textlint-rule-preset-lmc': {
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
          '@lmc-eu/textlint-rule-preset-lmc',
        ],
      },
    },
  },
};
