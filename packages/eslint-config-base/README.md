# @lmc-eu/eslint-config-base

## Shared Rules

These rules are meant to be shared across all ESLint rulesets.

> Generally you should not need to install or extend from these files as they are automatically included in their respective environment-specific configurations.
>
> See [@lmc-eu/code-quality-tools][cqt-home] for a full showdown of available rulesets.

## Configurations

### `@lmc-eu/eslint-config-base`

Use this ruleset to configure ESLint to work with every JavaScript code.

### `@lmc-eu/eslint-config-base/optional`

Use this ruleset together with the above ruleset. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

### `@lmc-eu/eslint-config-base/legacy`

Lints ES5 and below.

### `@lmc-eu/eslint-config-base/whitespace`

This entry point only errors on whitespace rules and sets all other rules to warnings. View [the list of whitespace rules](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js).

## Recommended ESLint Configuration

```js
// .eslintrc.js

'use strict';

module.exports = {
  extends: ['@lmc-eu/eslint-config-base', '@lmc-eu/eslint-config-base/optional'],
};
```

<details>
<summary><i>.eslintrc</i> or <i>.eslintrc.json</i></summary>

```json
{
  "extends": ["@lmc-eu/eslint-config-base", "@lmc-eu/eslint-config-base/optional"]
}
```

</details>

<details>
<summary><i>package.json</i></summary>

```json
{
  "eslintConfig": {
    "extends": ["@lmc-eu/eslint-config-base", "@lmc-eu/eslint-config-base/optional"]
  }
}
```

It is also recommended that you lint the whole project folder (that is `npx eslint .`) instead of just
some folders (that is. `npx eslint src test`) and create an _.eslintignore_ file excluding any unwanted
lint folders. Doing so will allow new directories to be created without worrying about having to update your
tools to lint the new directory.

```ini
# .eslintignore

node_modules

# NOTE:
# The following directives are only relevant when linting the whole
# project directory, ie. running `eslint .` ⚠️

# If you compile JavaScript into some output folder, exclude it here
dist

# Highly recommended to re-include JavaScript dotfiles to lint them
# (This will cause .eslintrc.js to be linted by ESLint 🤘)
!.*.js

# Some tools use this pattern for their configuration files. Lint them!
!*.config.js
```

## License

See the [LICENSE](LICENSE) file for information.

[cqt-home]: https://github.com/lmc-eu/code-quality-tools
