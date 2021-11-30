# @lmc-eu/conventional-changelog-lmc-github

> LMC's Conventional Changelog preset for GitHub repositories

## Usage

### Installation

NPM:

```
npm i --dev @commitlint/cli @commitlint/config-conventional @lmc-eu/conventional-changelog-lmc-github
```

Yarn:

```
yarn add --dev @commitlint/cli @commitlint/config-conventional @lmc-eu/conventional-changelog-lmc-github
```

### Configuration

#### Linting

Create a _commitlint.config.js_ file with the following contents:

```javascript
'use strict';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: '@lmc-eu/conventional-changelog-lmc-github',
};
```

#### Changelog

In a _package.json_ define following scripts:

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p lmc-github -i CHANGELOG.md -s",
    "changelog:origin": "conventional-changelog -p lmc-github -i CHANGELOG.md -s -r 0"
  }
}
```

For example see [example changelog file][example-changelog]

[example-changelog]: example-changelog.md
