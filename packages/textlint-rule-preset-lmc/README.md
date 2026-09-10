# @lmc-eu/textlint-rule-preset-lmc

> LMC’s config for [textlint][textlint-home]

Textlint doesn’t support ["extends" convention][extends-convention], thus we created [rule-preset][rule-preset-docs], a collection of rules and rulesConfig.

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

The preset’s `terminology` rule ships with its own curated term list (see [`rules/terminology.js`][terminology-terms]) and disables `textlint-rule-terminology`’s built-in defaults. If you only want to drop a few terms from that list, pass an `exclude` array — it’s merged with the preset’s own options, so you keep everything else, including `defaultTerms: false`:

```js
// .textlintrc.js

'use strict';

module.exports = {
  rules: {
    '@lmc-eu/textlint-rule-preset-lmc': {
      terminology: {
        exclude: ['ID', 'back[- ]end(\\w*)'],
      },
    },
  },
};
```

Each entry in `exclude` must match a term key exactly as written in the preset’s `terms` list — for a `[pattern, replacement]` pair, that’s the `pattern` string, for instance `'back[- ]end(\\w*)'`, not a paraphrase of it.

Any other option you pass, including your own `terms`, is merged the same way: that specific key replaces the preset’s default for it, while every key you didn’t specify — such as `defaultTerms: false` — is kept from the preset.

This differs from textlint’s usual behavior for rule config, where a consumer-supplied options object replaces the rule’s config wholesale rather than merging with it. If you were previously relying on a partial override falling back to `textlint-rule-terminology`’s own defaults for anything you didn’t set, that fallback no longer happens — unset keys now come from this preset’s defaults instead.

## Ignoring Parts of a File

The preset enables textlint’s [`comments` filter rule][comments-filter-rule], so you can silence any rule — including this preset’s own rules — for a specific range of a file with inline HTML comments, without resorting to a `.textlintignore` entry for the whole file:

```md
We use the ID field here, which is fine.

<!-- textlint-disable -->

This block is skipped entirely, so the id field here is not flagged.

<!-- textlint-enable -->

We use the ID field here again, back to being checked.
```

A `<!-- textlint-disable -->` with no matching `<!-- textlint-enable -->` ignores everything for the rest of the file. See [textlint’s “Ignoring parts of files” docs][ignoring-parts-of-files] for the full comment syntax, including disabling only a specific rule.

## License

See the [LICENSE][license] file for more information.

[textlint-home]: https://github.com/textlint/textlint
[extends-convention]: https://github.com/textlint/textlint/issues/210
[rule-preset-docs]: https://textlint.github.io/docs/rule-preset.html
[terminology-terms]: rules/terminology.js
[comments-filter-rule]: https://github.com/textlint/textlint-filter-rule-comments
[ignoring-parts-of-files]: https://textlint.github.io/docs/ignore.html#ignoring-parts-of-files
[license]: LICENSE
