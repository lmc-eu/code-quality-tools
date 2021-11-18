# Code Quality Tools

> Built with ❤️ at [LMC][lmc-home]

This monorepo contains shareable configurations for various coding-style/best practices/lint tools to make the configurations consistent across projects and provide easy setup mechanism.

## Available Configurations

| Tool                   | Package                                                                                       | Version                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Browserslist           | [@lmc-eu/browserslist-config](packages/browserslist-config)                                   | [![@lmc-eu/browserslist-config][blc-badge]][blc-npm]                      |
| Commitlint             | [@lmc-eu/commitlint-config](packages/commitlint-config)                                       | [![@lmc-eu/commitlint-config][clc-badge]][clc-npm]                        |
| Conventional Changelog | [@lmc-eu/conventional-changelog-lmc-bitbucket](packages/conventional-changelog-lmc-bitbucket) | [![@lmc-eu/conventional-changelog-lmc-bitbucket][cc-bb-badge]][cc-bb-npm] |
| Conventional Changelog | [@lmc-eu/conventional-changelog-lmc-github](packages/conventional-changelog-lmc-github)       | [![@lmc-eu/conventional-changelog-lmc-github][cc-gh-badge]][cc-gh-npm]    |
| Prettier               | [@lmc-eu/prettier-config](packages/prettier-config)                                           | [![@lmc-eu/prettier-config][pc-badge]][pc-npm]                            |
| Stylelint              | [@lmc-eu/stylelint-config](packages/stylelint-config)                                         | [![@lmc-eu/stylelint-config][slc-badge]][slc-npm]                         |
| ESLint                 | [@lmc-eu/eslint-config-base](packages/eslint-config-base)                                     | [![@lmc-eu/eslint-config-base][slc-badge]][ec-base-npm]                   |
| ESLint                 | [@lmc-eu/eslint-config-graphql](packages/eslint-config-graphql)                               | [![@lmc-eu/eslint-config-graphql][ec-gql-badge]][ec-gql-npm]              |

## License

See the [LICENSE](LICENSE) file for information.

## Credit

We got a lot of inspiration from similar project at [STRV][strv-github]. Thank you very much ❤️!

[lmc-home]: https://www.lmc.eu
[blc-npm]: https://npmjs.org/package/%40lmc-eu/browserslist-config
[blc-badge]: https://img.shields.io/npm/v/%40lmc-eu/browserslist-config.svg?style=flat-square
[cc-bb-npm]: https://npmjs.org/package/%40lmc-eu/conventional-changelog-lmc-bitbucket
[cc-bb-badge]: https://img.shields.io/npm/v/%40lmc-eu/conventional-changelog-lmc-bitbucket.svg?style=flat-square
[cc-gh-npm]: https://npmjs.org/package/%40lmc-eu/conventional-changelog-lmc-github
[cc-gh-badge]: https://img.shields.io/npm/v/%40lmc-eu/conventional-changelog-lmc-github.svg?style=flat-square
[pc-npm]: https://www.npmjs.com/package/@lmc-eu/prettier-config
[pc-badge]: https://img.shields.io/npm/v/%40lmc-eu/prettier-config.svg?style=flat-square
[clc-npm]: https://www.npmjs.com/package/@lmc-eu/commitlint-config
[clc-badge]: https://img.shields.io/npm/v/%40lmc-eu/commitlint-config.svg?style=flat-square
[slc-npm]: https://www.npmjs.com/package/@lmc-eu/stylelint-config
[slc-badge]: https://img.shields.io/npm/v/%40lmc-eu/stylelint-config.svg?style=flat-square
[ec-base-npm]: https://www.npmjs.com/package/@lmc-eu/eslint-config-base
[ec-base-badge]: https://img.shields.io/npm/v/%40lmc-eu/eslint-config-base.svg?style=flat-square
[ec-gql-npm]: https://www.npmjs.com/package/@lmc-eu/eslint-config-graphql
[ec-gql-badge]: https://img.shields.io/npm/v/%40lmc-eu/eslint-config-graphql.svg?style=flat-square
[strv-github]: https://github.com/strvcom/code-quality-tools
