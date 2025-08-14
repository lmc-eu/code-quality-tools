# @alma-oss/eslint-config-typescript

> ESLint configuration for TypeScript projects

## 📦 Installation

```sh
npm install --save-dev eslint @alma-oss/eslint-config-typescript
# or
yarn add --dev eslint @alma-oss/eslint-config-typescript
```

## 🧩 Rulesets

- **`@alma-oss/eslint-config-typescript`**

A generic ruleset that focuses on code correctness.

- **`@alma-oss/eslint-config-typescript/optional`**

Additional ruleset that might provide useful tips and hints how to improve your code.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

- **`@alma-oss/eslint-config-typescript/style`**

Ruleset that focuses on code style (indentation, spacing, naming, syntax preference etc.).

- **`@alma-oss/eslint-config-typescript/react`**

Ruleset that provides additional customizations for the `@alma-oss/eslint-config-react` ruleset when working with TypeScript.

## 👨‍💻 Usage

A full configuration for a TypeScript on Node.js project:

```js
// eslint.config.js
import typescript from '@alma-oss/eslint-config-typescript';
import optional from '@alma-oss/eslint-config-typescript/optional';
import style from '@alma-oss/eslint-config-typescript/style';

/** @type {Array<import("eslint").Linter.Config>} */
export default defineConfig({
  ...typescript,
  ...optional,
  ...style,

  parserOptions: {
    // The project field is required in order for some TS-syntax-specific rules to function at all
    // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    project: './tsconfig.json',
  },
});
```

A full configuration for a TypeScript on React project:

> Please note, that you need to have [eslint-config-react][eslint-config-react] installed as well

```js
// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import typescript from '@alma-oss/eslint-config-typescript';
import react from '@alma-oss/eslint-config-typescript/react';
import optional from '@alma-oss/eslint-config-typescript/optional';
import style from '@alma-oss/eslint-config-typescript/style';

export default defineConfig([
  ...typescript,
  ...react,
  ...optional,
  ...style,

  {
    parserOptions: {
      // The project field is required in order for some TS-syntax-specific rules to function at all
      // @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
      project: './tsconfig.json',
    },
  },
]);
```

## 🔌 Integration

### Visual Studio Code

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

## 🙌 Contributing

We’re always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you’re interested, definitely
check out our [Contributing Guide][contributing]! 👀

## 📝 License

Licensed under the [MIT][license].

[eslint-config-react]: https://www.npmjs.com/package/@alma-oss/eslint-config-react
[contributing]: https://github.com/lmc-eu/code-quality-tools/blob/main/CONTRIBUTING.md
[license]: https://github.com/lmc-eu/code-quality-tools/blob/main/LICENSE.md
