# @lmc-eu/conventional-changelog-lmc

> LMC’s Conventional Changelog Writer and Parser

## Installation

NPM:

```sh
npm i --dev @lmc-eu/conventional-changelog-lmc
```

Yarn:

```sh
yarn add --dev @lmc-eu/conventional-changelog-lmc
```

## Usage

```js
const { readFile } = require('fs').promises;
const { resolve } = require('path');
const { parserOpts, writerOpts } = require('@lmc-eu/conventional-changelog-lmc');

module.exports = Promise.all([
  readFile(resolve(__dirname, 'templates/template.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/header.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/commit.hbs'), 'utf-8'),
  readFile(resolve(__dirname, 'templates/footer.hbs'), 'utf-8'),
]).then(([template, header, commit, footer]) => {
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
