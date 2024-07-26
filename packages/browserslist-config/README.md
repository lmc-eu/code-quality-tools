# `@lmc-eu/browserslist-config`

> LMC’s config for Browserslist

## Installation

```bash
# Yarn:
yarn add --dev @lmc-eu/browserslist-config

# npm:
npm install --save-dev @lmc-eu/browserslist-config
```

## Usage

Add this to `.browserslistrc` file:

```txt
extends @lmc-eu/browserslist-config
```

Alternatively, add this to your `package.json` file:

```json
"browserslist": [
  "extends @lmc-eu/browserslist-config"
]
```

### Extending

To support Internet Explorer (or any other browser):

```txt
extends @lmc-eu/browserslist-config

ie # sorry!
```

### Using Real-World Statistics

You may provide your own browser statistics.

To get the data from Google Analytics, use one of the following tools:

- [browserslist-ga-export](https://github.com/browserslist/browserslist-ga-export)
  — create a custom report in GA and export it to CSV,

- [browserslist-ga](https://github.com/browserslist/browserslist-ga)
  — easier if you are OK with providing your Google password to a third-party tool.

Make the resulting file available to Browserslist by saving it right next to
your `.browserslistrc` (or `package.json`, wherever you store your config):

```txt
# Project root

- .browserslistrc
- browserslist-stats.json
- package.json
- …
```

As mentioned in the stats file in your Browserslist configuration:

```txt
extends @lmc-eu/browserslist-config

> 0.5% in my stats
```

For more configuration examples including Autoprefixer, Babel, ESLint, PostCSS,
and Stylelint see [Browserslist examples][browserslist-examples].

### Checking Results

Anytime you can run `npx browserslist` in your project root to see what
browsers are actually matched against your configuration.

## Updating Browsers Database

You should run `npx browserslist@latest --update-db` [every few months][updates]
to update the `caniuse` database in the background, so you always develop for
current browsers.

[browserslist-examples]: https://github.com/browserslist/browserslist-example#browserslist-example
[updates]: https://github.com/browserslist/browserslist/issues/492
