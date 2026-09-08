# `@alma-oss/stylelint-config`

[![npm version](https://img.shields.io/npm/v/@alma-oss/stylelint-config?label=npm%20package&logo=npm)](https://www.npmjs.org/package/@alma-oss/stylelint-config)
[![Node version](https://img.shields.io/node/v/@alma-oss/stylelint-config.svg?style=flat&logo=nodedotjs)](https://nodejs.org/download/)
[![Stylelint version](https://img.shields.io/npm/dependency-version/@alma-oss/stylelint-config/peer/stylelint?logo=stylelint)](https://github.com/stylelint/stylelint)

> Alma Career’s config for Stylelint

## Usage

```bash
# Yarn:
yarn add --dev @alma-oss/stylelint-config stylelint-prettier

# npm:
npm install --save-dev @alma-oss/stylelint-config stylelint-prettier
```

> We assume you are using Prettier. That’s why we also recommend adding
> `stylelint-prettier` above.

Configuration extends community maintained config [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss).

This config:

- Extends the [`stylelint-config-recommended` shared config](https://github.com/stylelint/stylelint-config-recommended) and configures its rules for SCSS;
- extends the [`stylelint-config-recommended-scss` shared config](https://github.com/stylelint-scss/stylelint-config-recommended-scss) and configures its rules for SCSS;
- extends the [`stylelint-config-standard` shared config](https://github.com/stylelint/stylelint-config-standard) and configures its rules.

## Configuration

- **`@alma-oss/stylelint-config`**

Use this ruleset to configure Stylelint to work with your code.

## Recommended Stylelint Configuration

```js
// .stylelintrc.mjs

export default {
  extends: ['@alma-oss/stylelint-config', 'stylelint-prettier/recommended'],
};
```

<details>
<summary><i>.stylelintrc</i> or <i>.stylelintrc.json</i></summary>

```json
{
  "extends": ["@alma-oss/stylelint-config", "stylelint-prettier/recommended"]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "stylelint": {
    "extends": ["@alma-oss/stylelint-config", "stylelint-prettier/recommended"]
  }
}
```

</details>

## Checking Properties Order

To further extend control over coding style of your stylesheets, we are also
checking for properties order.

The `order` config enforces a consistent order of content in your declaration blocks:

1. Sass variables,
2. CSS custom properties,
3. Sass `@extend`,
4. single-line Sass `@include`,
5. declarations,
6. nested rules,

For better flexibility, block at-rules (like `@media`, `@supports`, and also Sass `@if`, `@each`, etc.) can be placed
anywhere in the declaration block.

Besides, properties in the declarations must be ordered by following categories:

1. `all` properties,
2. `content`,
3. position,
4. `appearance`,
5. box model,
6. typography,
7. decorations,
8. effects and transforms,
9. interactions,
10. transitions and animations.

👉 To see the order of individual properties this config prescribes, please read
the [`order` config itself](./rules/order.js).

## Stylistic Rules

Stylistic rules (like indentation etc.) [were dropped][stylelint-v16-stylistic-rules]
in Stylelint v16. To enforce them, you can use
[`stylelint-prettier`][stylelint-prettier]:

```json
// `.stylelintrc`
{
  "plugins": ["stylelint-prettier"],
  "rules": {
    "prettier/prettier": true
  }
}
```

## FAQ

<details>
<summary>How do I change the indentation?</summary>
### With Prettier

If using Prettier, you can configure the indentation in your Prettier config:

```json
{
  "tabWidth": 2
}
```

Or in your [`.editorconfig`][editorconfig]:

```ini
[*]
indent_size = 2
```

👉 See [Prettier][prettier] documentation for more options.

</details>

[prettier]: https://prettier.io
[stylelint-v16-stylistic-rules]: https://stylelint.io/migration-guide/to-16/#removed-deprecated-stylistic-rules
[stylelint-prettier]: https://github.com/prettier/stylelint-prettier
