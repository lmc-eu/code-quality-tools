# @lmc-eu/eslint-config-typescript

These configuration files are suitable to lint TypeScript code.

## Setup

To lint TypeScript files using ESLint and this ruleset you must

1. Install ESLint & this ruleset
1. Tell the TypeScript parser where your _tsconfig.json_ file is (not doing so will cause some TS-syntax-specific rules to not work at all)
1. Extend one or more of the included rulesets

See the example _.eslintrc.js_ file below for more details and make sure you read the [Parser’s docs][ts-parser-configuration] about its settings.

## Configurations

- **`@lmc-eu/eslint-config-typescript`**

Suitable for linting TypeScript source files.

Together with this ruleset, you should also choose one base ruleset depending on your target platform:

- [`@lmc-eu/eslint-config-node`][eslint-config-node]
- [`@lmc-eu/eslint-config-react`][eslint-config-react]

### `@lmc-eu/eslint-config-typescript/react`

React specific overrides.

## Optional Configurations

### `@lmc-eu/eslint-config-typescript/optional`

Use this ruleset together with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding Styles

### `@lmc-eu/eslint-config-typescript/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

A full configuration for a TypeScript on Node.js project:

```js
// .eslintrc.js
'use strict';

module.exports = {
  extends: [
    '@lmc-eu/eslint-config-node/v10',
    '@lmc-eu/eslint-config-node/optional',
    '@lmc-eu/eslint-config-typescript',
    '@lmc-eu/eslint-config-typescript/style',
  ],

  parserOptions: {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    project: './tsconfig.json',
  },
};
```

A full configuration for a TypeScript on React project:

> Please note, that you need to have [eslint-config-react][eslint-config-react] installed as well

```js
// .eslintrc.js
'use strict';

module.exports = {
  extends: [
    '@lmc-eu/react',
    '@lmc-eu/react/style',
    '@lmc-eu/react/optional',
    '@lmc-eu/typescript',
    '@lmc-eu/typescript/style',
    '@lmc-eu/typescript/react',
  ],

  parserOptions: {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    project: './tsconfig.json',
  },
};
```

To actually lint .ts files, you must pass the `--ext` flag to ESLint:

```sh
eslint --ext ts --report-unused-disable-directives .
```

## VSCode integration

The [vscode-eslint](https://github.com/Microsoft/vscode-eslint) plugin for integrating ESLint into VSCode does not automatically parse TypeScript files. To do so, you must inform ESLint to enable on TypeScript files by adding this configuration to your settings (File > Preferences > Settings):

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
```

> Notice we are adding `javascriptreact` and `typescriptreact` above. It won’t harm adding those, but you can always omit these languages if not using them.

[eslint-config-node]: https://www.npmjs.com/package/@lmc-eu/eslint-config-node
[eslint-config-react]: https://www.npmjs.com/package/@lmc-eu/eslint-config-react
[ts-parser-configuration]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
