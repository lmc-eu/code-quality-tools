# @lmc-eu/eslint-config-react

> LMC’s ESLint configuration for React projects

## Installation

Wee need to install everything needed by the config using (installs package and also peer dependencies):

```sh
npx install-peerdeps --dev @lmc-eu/eslint-config-react
```

You can see in your package.json there is now a big list of devDependencies.

## Configurations

- **`@lmc-eu/eslint-config-react`**

Use this ruleset to configure ESLint to work with React code.

- **`@lmc-eu/eslint-config-react/optional`**

Use this ruleset together with the above ruleset. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Recommended ESLint Configuration

```js
// eslint.config.mjs

import { defineConfig } from 'eslint/config';
import base from '@lmc-eu/eslint-config-react';
import optional from '@lmc-eu/eslint-config-react/optional';

export default defineConfig([...base, ...optional]);
```

It is also recommended that you lint the whole project folder (that is. `npx eslint .`) instead of just
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
