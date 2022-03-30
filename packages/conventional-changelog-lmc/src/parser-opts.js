module.exports = {
  headerPattern: /^(?:Pull request #[0-9]+: )?(?:([a-zA-Z]*-[0-9_]*)(?: ))* ?([\w ]*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: ['body', 'type', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: ['header', 'hash'],
};
