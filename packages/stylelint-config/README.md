# `@lmc-eu/stylelint-config`

[![npm version](https://img.shields.io/npm/v/@lmc-eu/stylelint-config?label=npm%20package&logo=npm)](https://www.npmjs.org/package/@lmc-eu/stylelint-config)
[![Node version](https://img.shields.io/node/v/@lmc-eu/stylelint-config.svg?style=flat&logo=nodedotjs)](http://nodejs.org/download/)
[![Stylelint version](https://img.shields.io/npm/dependency-version/@lmc-eu/stylelint-config/peer/stylelint?logo=stylelint)](https://github.com/stylelint/stylelint)

> LMC's config for Stylelint

## Usage

```bash
# Yarn:
yarn add --dev @lmc-eu/stylelint-config stylelint-config-prettier

# npm:
npm install --save-dev @lmc-eu/stylelint-config stylelint-config-prettier
```

> We assume you are using Prettier. That's why we also recommend adding
> `stylelint-config-prettier` above.

## Configurations

### `@lmc-eu/stylelint-config`

Use this ruleset to configure Stylelint to work with your code.

## Optional configurations

### `@lmc-eu/stylelint-config/optional`

Use this ruleset in conjunction with any of the above rulesets. Provides additional insights into potential inconsistencies in the project.

## Recommended stylelint config

```js
// .stylelintrc.js

'use strict';

module.exports = {
  extends: ['@lmc-eu/stylelint-config', '@lmc-eu/stylelint-config/optional', 'stylelint-config-prettier'],
};
```

<details>
<summary><i>.stylelintrc</i> or <i>.stylelintrc.json</i></summary>

```json
{
  "extends": ["@lmc-eu/stylelint-config", "@lmc-eu/stylelint-config/optional", "stylelint-config-prettier"]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "stylelint": {
    "extends": ["@lmc-eu/stylelint-config", "@lmc-eu/stylelint-config/optional", "stylelint-config-prettier"]
  }
}
```

</details>
