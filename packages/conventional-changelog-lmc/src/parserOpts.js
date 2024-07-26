/* eslint-disable jsdoc/require-jsdoc */

function createParserOpts () {
  return {
    headerPattern: /^(?:Pull request #[0-9]+: )?(?:([a-zA-Z]*-[0-9_]*)(?: ))* ?([\w ]*)(?:\((.*)\))?!?: (.*)$/,
    breakingHeaderPattern: /^(?:([a-zA-Z]*-[0-9_]*)(?: ))* ?([\w ]*)(?:\((.*)\))?!: (.*)$/,
    headerCorrespondence: ['body', 'type', 'scope', 'subject'],
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    revertPattern: /^(?:Revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
    revertCorrespondence: ['header', 'hash'],
  };
};

module.exports.createParserOpts = createParserOpts;
