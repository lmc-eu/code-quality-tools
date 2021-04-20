# `@lmc-eu/stylelint-config`

> LMC's config for stylelint

## Usage

```bash
# Yarn:
yarn add --dev @lmc-eu/stylelint-config

# npm:
npm install --save-dev @lmc-eu/stylelint-config
```

> We assume you are using prettier.

## Configurations

### `@lmc-eu/stylelint-config`

Use this ruleset to configure StyleLint to work with your code

## Optional configurations

### `@lmc-eu/stylelint-config/optional`

Use this ruleset in conjunction with any of the above rulesets. Provides additional insights into potential inconsistencies in the project.

## Recommended stylelint config

```js
// .stylelintrc.js

'use strict'

module.exports = {
  extends: [
    '@lmc-eu/stylelint-config',
    '@lmc-eu/stylelint-config/optional',
    'stylelint-config-prettier',
  ],
}
```

<details>
<summary><i>.stylelintrc</i> or <i>.stylelintrc.json</i></summary>

```json
{
  "extends": [
    "@lmc-eu/stylelint-config",
    "@lmc-eu/stylelint-config/optional",
    "stylelint-config-prettier"
  ]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "stylelint": {
    "extends": [
      "@lmc-eu/stylelint-config",
      "@lmc-eu/stylelint-config/optional",
      "stylelint-config-prettier"
    ]
  }
}
```

</details>
