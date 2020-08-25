const compareFunc = require('compare-func');
const Q = require('q');
const readFile = Q.denodeify(require('fs').readFile);
const { resolve } = require('path');

const parserOpts = {
  headerPattern: /^([a-zA-Z]*-[0-9_]*)? ?([\w ]*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: ['body', 'type', 'scope', 'subject'],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: ['header', 'hash'],
};

const writerOpts = {
  transform: commit => {
    const discard = true;
    const issues = [];
    const transformedCommit = commit;

    if (commit.type === 'BREAKING CHANGE') {
      transformedCommit.type = 'BREAKING CHANGES';
    } else if (commit.type === 'Feat') {
      transformedCommit.type = 'Features';
    } else if (commit.type === 'Fix') {
      transformedCommit.type = 'Bug Fixes';
    } else if (commit.type === 'Perf') {
      transformedCommit.type = 'Performance Improvements';
    } else if (commit.type === 'Revert') {
      transformedCommit.type = 'Reverts';
    } else if (commit.type === 'Docs') {
      transformedCommit.type = 'Documentation';
    } else if (commit.type === 'Style') {
      transformedCommit.type = 'Styles';
    } else if (commit.type === 'Refactor') {
      transformedCommit.type = 'Code Refactoring';
    } else if (commit.type === 'Test') {
      transformedCommit.type = 'Tests';
    } else if (commit.type === 'Chore') {
      transformedCommit.type = 'Chores';
    } else if (commit.type === 'Deps') {
      transformedCommit.type = 'Dependencies';
    } else if (discard) {
      return;
    }

    if (commit.scope === '*') {
      transformedCommit.scope = '';
    }

    if (typeof commit.hash === 'string') {
      transformedCommit.hash = commit.hash.substring(0, 7);
    }

    // remove references that already appear in the subject
    transformedCommit.references = commit.references.filter(reference => {
      if (issues.indexOf(reference.issue) === -1) {
        return true;
      }

      return false;
    });

    return transformedCommit;
  },
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  notesSort: compareFunc,
};

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
