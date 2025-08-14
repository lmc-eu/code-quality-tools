# @alma-oss/eslint-config-react

> ESLint configuration for React projects

## 📦 Installation

```sh
npm install --save-dev eslint @alma-oss/eslint-config-react
# or
yarn add --dev eslint @alma-oss/eslint-config-react
```

Wee need to install everything needed by the config using (installs package and also peer dependencies):

```sh
npx install-peerdeps --dev @alma-oss/eslint-config-react
```

You can see in your package.json there is now a big list of devDependencies.

## 🧩 Rulesets

- **`@alma-oss/eslint-config-react`**

A generic ruleset that focuses on code correctness.

- **`@alma-oss/eslint-config-react/optional`**

Additional ruleset that might provide useful tips and hints how to improve your code.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## 👨‍💻 Usage

```js
// eslint.config.js

import { defineConfig } from 'eslint/config';
import react from '@alma-oss/eslint-config-react';
import optional from '@alma-oss/eslint-config-react/optional';

export default defineConfig({
  ...react,
  ...optional,
});
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

## 🙌 Contributing

We’re always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you’re interested, definitely
check out our [Contributing Guide][contributing]! 👀

## 📝 License

Licensed under the [MIT][license].

[contributing]: https://github.com/lmc-eu/code-quality-tools/blob/main/CONTRIBUTING.md
[license]: https://github.com/lmc-eu/code-quality-tools/blob/main/LICENSE.md
