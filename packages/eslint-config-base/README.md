# @alma-oss/eslint-config-base

## Shared Rules

These rules are meant to be shared across all ESLint rule sets.

> Generally you should not need to install or extend from these files as they are automatically included in their respective environment-specific configurations.
>
> See [@lmc-eu/code-quality-tools][cqt-home] for a full showdown of available rule sets.

## Configurations

- **`@alma-oss/eslint-config-base`**

Use this ruleset to configure ESLint to work with every JavaScript code.

- **`@alma-oss/eslint-config-base/optional`**

Use this ruleset together with the above ruleset. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

- **`@alma-oss/eslint-config-base/legacy`**

Lints ES5 and below.

- **`@alma-oss/eslint-config-base/whitespace`**

This entry point only errors on whitespace rules and sets all other rules to warnings. View [the list of whitespace rules](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js).

## Recommended ESLint Configuration

```js
// eslint.config.js

import { defineConfig } from 'eslint/config';
import base from '@lmc-eu/eslint-config-base';
import optional from '@lmc-eu/eslint-config-base/optional';

export default defineConfig([...base, ...optional]);
```

It is also recommended that you lint the whole project folder (that is `npx eslint .`) instead of just
some folders (that is. `npx eslint src test`) and create an _ignores_ array in configuration excluding any unwanted
lint folders. Doing so will allow new directories to be created without worrying about having to update your
tools to lint the new directory.

```js
// eslint.config.js

import { defineConfig } from 'eslint/config';

export default defineConfig({
  ignores: [
    'node_modules',
    // NOTE:
    // The following directives are only relevant when linting the whole
    // project directory, ie. running `eslint .` ⚠️

    // If you compile JavaScript into some output folder, exclude it here
    'dist',
    // Highly recommended to re-include JavaScript dotfiles to lint them
    // (This will cause .eslintrc.js to be linted by ESLint 🤘)
    '!.*.js',
    // Some tools use this pattern for their configuration files. Lint them!
    '!*.config.js',
  ],
});
```

## License

See the [LICENSE](LICENSE) file for information.

[cqt-home]: https://github.com/lmc-eu/code-quality-tools
