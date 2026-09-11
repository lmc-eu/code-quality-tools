# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.0.0-alpha.0 (2026-09-11)

### ⚠ BREAKING CHANGES

- **textlint:** textlint-rule-preset-lmc no longer supports Node.js 16
  or 18; Node.js >=20 is now required.
- **textlint:** the package is now esm-only (`"type": "module"`). It can no
  longer be loaded with `require()` from a commonjs script — only consumption
  via textlint's own preset resolution (`--preset` / .textlintrc `rules` key)
  is supported, which is unaffected.
- **textlint:** The package moved from the [@lmc-eu](https://github.com/lmc-eu) scope and was
  renamed from @lmc-eu/textlint-rule-preset-lmc to
  @alma-oss/textlint-rule-preset-alma. Update your dependency and any
  .textlintrc rule config keys accordingly.

### Features

- **textlint:** convert textlint-rule-preset-alma to esm ([50febd3](https://github.com/lmc-eu/code-quality-tools/commit/50febd3e65e878dd3e6709cc11efe6031f925e03))
- **textlint:** drop support for node below 20 ([0077aae](https://github.com/lmc-eu/code-quality-tools/commit/0077aae7e6b644f532511bc11b718fb575f7af86))
- **textlint:** migrate to alma-oss scope ([1d6580c](https://github.com/lmc-eu/code-quality-tools/commit/1d6580c8b03932dd34c244c6564598b4a998b5a7))

### Bug Fixes

- **deps:** update dependency textlint to v15 ([459acb6](https://github.com/lmc-eu/code-quality-tools/commit/459acb6a506fc04e43471b872deca57f489ec76a))
- **deps:** update dependency textlint-rule-apostrophe to v3 ([6964f64](https://github.com/lmc-eu/code-quality-tools/commit/6964f64c49ea9eede4fcd5f1fc381b3f8d117c3b))
- **deps:** update dependency textlint-rule-stop-words to v5 ([27fc9c7](https://github.com/lmc-eu/code-quality-tools/commit/27fc9c785cc58da4b42bbc7b7c67232cef755eb4))
- **deps:** update dependency textlint-rule-terminology to v5 ([10eb9ae](https://github.com/lmc-eu/code-quality-tools/commit/10eb9ae9486bb87758492c41d5f75d1c4ded8a60))

### Styles

- **textlint:** drop stale import/no-unresolved disable ([9338f3e](https://github.com/lmc-eu/code-quality-tools/commit/9338f3ef1e50d3327da808e7902430f334aba1d2))
- **textlint:** use named `default` import syntax consistently ([ec64c5e](https://github.com/lmc-eu/code-quality-tools/commit/ec64c5efe9b11d2b7a1c6def5bce0625db32df8b))

## 2.1.0 (2026-09-10)

### Features

- **textlint:** merge terminology overrides instead of replacing them ([636cef8](https://github.com/lmc-eu/code-quality-tools/commit/636cef8dfabf1226f2f48c0c02b4f34c68edae05)), closes [#240](https://github.com/lmc-eu/code-quality-tools/issues/240)
- **textlint:** remove build system and bugfix terminology terms ([f971f09](https://github.com/lmc-eu/code-quality-tools/commit/f971f0980d95305225cdedeac5e85db3e4881432)), closes [#192](https://github.com/lmc-eu/code-quality-tools/issues/192)

### Documentation

- **textlint:** document comment filtering ([2c57d70](https://github.com/lmc-eu/code-quality-tools/commit/2c57d709b9771d96cbdc527c5528084374cb945d)), closes [#193](https://github.com/lmc-eu/code-quality-tools/issues/193)

### Dependencies

- Update actions/checkout action to v5 ([e1ab6bc](https://github.com/lmc-eu/code-quality-tools/commit/e1ab6bc089efe1447ae154918eed51b7c7e6c467))

### Tests

- **textlint:** cover comment filtering ([0d3f7cb](https://github.com/lmc-eu/code-quality-tools/commit/0d3f7cb8ad5f8b95d8ae4b1872a56afbf236cf29))
- **textlint:** cover terminology exclude merge behavior ([565f847](https://github.com/lmc-eu/code-quality-tools/commit/565f84719aec1f3e580f901567404bd48241ff7e))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/lmc-eu/code-quality-tools/compare/@lmc-eu/textlint-rule-preset-lmc@2.0.1...@lmc-eu/textlint-rule-preset-lmc@2.0.2) (2025-02-27)

### Bug Fixes

- **textlint-config:** Only `Sass` term is considered as correct ([e26122c](https://github.com/lmc-eu/code-quality-tools/commit/e26122c))

**Note:** Version bump only for package @lmc-eu/textlint-rule-preset-lmc

<a name="2.0.1"></a>

## [2.0.1](https://github.com/lmc-eu/code-quality-tools/compare/@lmc-eu/textlint-rule-preset-lmc@2.0.0...@lmc-eu/textlint-rule-preset-lmc@2.0.1) (2023-10-06)

### Dependencies

- Update dependency textlint-rule-stop-words to v3 ([6fd1278](https://github.com/lmc-eu/code-quality-tools/commit/6fd1278))
- Update dependency textlint-rule-terminology to v3 ([f15569c](https://github.com/lmc-eu/code-quality-tools/commit/f15569c))

**Note:** Version bump only for package @lmc-eu/textlint-rule-preset-lmc

<a name="2.0.0"></a>

# [2.0.0](https://github.com/lmc-eu/code-quality-tools/compare/@lmc-eu/textlint-rule-preset-lmc@1.0.0...@lmc-eu/textlint-rule-preset-lmc@2.0.0) (2023-10-06)

### BREAKING CHANGES

- **textlint:** Drop support for Node.js v14 ([e144645](https://github.com/lmc-eu/code-quality-tools/commit/e144645)), closes [#130](https://github.com/lmc-eu/code-quality-tools/issues/130)

**Note:** Version bump only for package @lmc-eu/textlint-rule-preset-lmc

<a name="1.0.0"></a>

# 1.0.0 (2023-01-16)

### Features

- **textlint:** Introduce Textlint config (refs [#13](https://github.com/lmc-eu/code-quality-tools/issues/13)) ([1e339db](https://github.com/lmc-eu/code-quality-tools/commit/1e339db))

### Styles

- **repo:** Rewrite documentation using Textlint ruleset ([22e19bd](https://github.com/lmc-eu/code-quality-tools/commit/22e19bd))

**Note:** Version bump only for package @lmc-eu/textlint-rule-preset-lmc
