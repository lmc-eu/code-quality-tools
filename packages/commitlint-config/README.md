# @lmc-eu/commitlint-config

> LMC's config for commitlint

## Configurations

### `@lmc-eu/commitlint-config` (default config)

Suitable for all projects.

## Usage

### Installation

```sh
npm i --dev @commitlint/cli @lmc-eu/commitlint-config
```

### Configuration

Create a _commitlint.config.js_ file with the following contents:

```js
'use strict'

module.exports = {
  extends: [
    '@lmc-eu/commitlint-config',
  ],
}
```

### Linting

Install a git hook into _.git/hooks/commit-msg_ with the following contents:

```sh
#!/bin/sh

# This utility's configuration resides in .commitlintrc.js file.
./node_modules/.bin/commitlint < "$1"
```

If your project uses `make` you can use the following process to automatically install the git hooks upon each invocation of `make` with no target.

```makefile
# Place the above mentioned commit-msg file into your project root's utils/githooks directory and
# make it executable: chmod +x utils/githooks/commit-msg

# Git hooks to be installed into the project workspace
# This will look up all the files in utils/githooks and generate a list of targets
GITFILES := $(patsubst utils/githooks/%, .git/hooks/%, $(wildcard utils/githooks/*))

# The `githooks` dependency should be added to the first (default) target so that it will be
# executed when invoking make with no arguments
all: githooks

githooks: $(GITFILES)

# Default target for all possible git hooks
.git/hooks/%: utils/githooks/%
 cp $< $@
```

Or if you use [husky](https://www.npmjs.com/package/husky) place a git hook into _.huskyrc.json_ with the following content:

```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```
