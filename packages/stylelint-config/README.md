# `@lmc-eu/stylelint-config`

[![npm version](https://img.shields.io/npm/v/@lmc-eu/stylelint-config?label=npm%20package&logo=npm)](https://www.npmjs.org/package/@lmc-eu/stylelint-config)
[![Node version](https://img.shields.io/node/v/@lmc-eu/stylelint-config.svg?style=flat&logo=nodedotjs)](http://nodejs.org/download/)
[![Stylelint version](https://img.shields.io/npm/dependency-version/@lmc-eu/stylelint-config/peer/stylelint?logo=stylelint)](https://github.com/stylelint/stylelint)

> LMC’s config for Stylelint

## Usage

```bash
# Yarn:
yarn add --dev @lmc-eu/stylelint-config stylelint-config-prettier

# npm:
npm install --save-dev @lmc-eu/stylelint-config stylelint-config-prettier
```

> We assume you are using Prettier. That’s why we also recommend adding
> `stylelint-config-prettier` above.

Configuration extends community maintained config [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss).

This config:

- Extends the [`stylelint-config-recommended` shared config](https://github.com/stylelint/stylelint-config-recommended) and configures its rules for SCSS;
- extends the [`stylelint-config-recommended-scss` shared config](https://github.com/stylelint-scss/stylelint-config-recommended-scss) and configures its rules for SCSS;
- extends the [`stylelint-config-standard` shared config](https://github.com/stylelint/stylelint-config-standard) and configures its rules.

## Configuration

- **`@lmc-eu/stylelint-config`**

Use this ruleset to configure Stylelint to work with your code.

## Recommended Stylelint Configuration

```js
// .stylelintrc.mjs

export default {
  extends: ['@almacareer/stylelint-config', 'stylelint-config-prettier'],
};
```

<details>
<summary><i>.stylelintrc</i> or <i>.stylelintrc.json</i></summary>

```json
{
  "extends": ["@lmc-eu/stylelint-config", "stylelint-config-prettier"]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "stylelint": {
    "extends": ["@lmc-eu/stylelint-config", "stylelint-config-prettier"]
  }
}
```

</details>

---
