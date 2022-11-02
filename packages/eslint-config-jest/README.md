# @lmc-eu/eslint-config-jest

> LMC’s ESLint config for projects using Jest as test runner

These configuration files are suitable to lint Jest test files.

## Install

```bash
npm install @lmc-eu/eslint-config-jest -D
```

or

```bash
yarn add @lmc-eu/eslint-config-jest -D
```

## Usage

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    // ... (base eslint config)
    '@lmc-eu/eslint-config-jest',
  ],
};
```

The shareable config can be customized in your [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring).

Use this ruleset to configure ESLint to lint your Jest test files. Jest test files are by default identified by `*.test.*` or `*.spec.*` filenames or by being in the _test/_ directory in your project root or by using `__test__/` directories near your tested files.

> ⚠️ You can use this environment ruleset in combination with any of the existing environment rulesets. Just make sure this one comes in as the last one.

## Plugins

This configuration uses the following plugins:

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)

### Rules

For available rules see [ESLint plugin Jest](https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules) and [ESLint plugin Jest Formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting/tree/master/docs/rules)

## License

See the [LICENSE](LICENSE) file for information.
