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

## Excluding Terminology Rule Terms

The preset’s `terminology` rule ships with its own curated term list (see [`rules/terminology.js`](rules/terminology.js)) and disables `textlint-rule-terminology`’s built-in defaults. If you only want to drop a few terms from that list, pass an `exclude` array — it’s merged with the preset’s own options, so you keep everything else, including `defaultTerms: false`:

```js
// .textlintrc.js

'use strict';

module.exports = {
  rules: {
    '@lmc-eu/textlint-rule-preset-lmc': {
      terminology: {
        exclude: ['ID', 'bug[- ]?fix(es?)', 'build system(s?)'],
      },
    },
  },
};
```

Each entry in `exclude` must match a term key exactly as written in the preset’s `terms` list — for a `[pattern, replacement]` pair, that’s the `pattern` string, for instance `'bug[- ]?fix(es?)'`, not a paraphrase of it.

Any other option you pass, including your own `terms`, is merged the same way: that specific key replaces the preset’s default for it, while every key you didn’t specify — such as `defaultTerms: false` — is kept from the preset.

This differs from textlint’s usual behavior for rule config, where a consumer-supplied options object replaces the rule’s config wholesale rather than merging with it. If you were previously relying on a partial override falling back to `textlint-rule-terminology`’s own defaults for anything you didn’t set, that fallback no longer happens — unset keys now come from this preset’s defaults instead.

## License

See the [LICENSE](LICENSE) file for more information.

[textlint-home]: https://github.com/textlint/textlint
