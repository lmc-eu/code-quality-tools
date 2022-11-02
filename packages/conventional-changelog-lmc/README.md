# @lmc-eu/conventional-changelog-lmc

> LMC’s Conventional Changelog Writer and Parser

## Installation

NPM:

```
npm i --dev @lmc-eu/conventional-changelog-lmc
```

Yarn:

```
yarn add --dev @lmc-eu/conventional-changelog-lmc
```

## Usage

```js
const Q = require('q');
const readFile = Q.denodeify(require('fs').readFile);
const { resolve } = require('path');
const { parserOpts, writerOpts } = require('@lmc-eu/conventional-changelog-lmc');

module.exports = Q.all([
  readFile(resolve(__dirname, 'templates/template.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/header.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/commit.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/footer.hbs'), 'utf-8'),
]).spread((template, header, commit, footer) => {
  writerOpts.mainTemplate = template;
  writerOpts.headerPartial = header;
  writerOpts.commitPartial = commit;
  writerOpts.footerPartial = footer;

  return {
    parserOpts,
    writerOpts,
  };
});
```
