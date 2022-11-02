# @lmc-eu/textlint-rule-preset-lmc

> LMC’s config for [textlint][textlint-home]

Textlint doesn’t support ["extends" convention](https://github.com/textlint/textlint/issues/210), thus we created [rule-preset](https://textlint.github.io/docs/rule-preset.html), a collection of rules and rulesConfig.

## Usage

```sh
#Yarn
yarn add -D @lmc-eu/textlint-rule-preset-lmc

# npm
npm i --save-dev @lmc-eu/textlint-rule-preset-lmc
```

## Recommended Textlint Config

```js
// .textlintrc.js

'use strict';

module.exports = {
  rules: {
    '@lmc-eu/textlint-rule-preset-lmc': true,
  },
};
```

<details>
<summary><i>.textlintrc</i> or <i>.textlintrc.json</i></summary>

```json
{
  "rules": {
    "@lmc-eu/textlint-rule-preset-lmc": true
  }
}
```

</details>

## License

See the [LICENSE](LICENSE) file for more information.

[textlint-home]: https://github.com/textlint/textlint
