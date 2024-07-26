/* eslint-disable no-param-reassign */
/* eslint-disable jsdoc/require-jsdoc */
const { readFile } = require('fs').promises;
const { resolve } = require('path');

async function createConventionalChangelogOpts (parserOpts, writerOpts) {
  return Promise.all([
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
}

module.exports.createConventionalChangelogOpts = createConventionalChangelogOpts;
