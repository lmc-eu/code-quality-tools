const Q = require('q');
const readFile = Q.denodeify(require('fs').readFile);
const { resolve } = require('path');
const parserOpts = require('./parser-opts');
const writerOpts = require('./writer-opts');

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
