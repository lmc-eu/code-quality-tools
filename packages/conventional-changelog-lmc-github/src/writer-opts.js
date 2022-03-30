/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
const compareFunc = require('compare-func');

/**
 * Formats issues using the issueURL as the prefix of the complete issue URL
 *
 * @param {string} issueUrl - if the issueURL is falsy, then the issue will be printed as-is. Otherwise, it will be printed as a link
 * @param {string} issue - the issue reference (without the # in-front of it)
 * @returns {string} - Either the issue or a Markdown-formatted link to the issue.
 */
function formatIssue(issueUrl, issue) {
  if (issueUrl) {
    return `[#${issue}](${issueUrl}/${issue})`;
  }

  return `#${issue}`;
}

module.exports = {
  transform: (commit, context) => {
    let discard = true;
    const issues = [];

    commit.notes.forEach((note) => {
      note.title = 'BREAKING CHANGES';
      discard = false;
    });

    const transformedCommit = commit;

    if (commit.type === 'BREAKING CHANGE' || commit.type === 'BREAKING CHANGES') {
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

    // Remove port from host URI
    if (typeof context.host === 'string') {
      context.host = context.host.match(/(^https?:\/\/[a-z.-]*)/)[0];
    }

    // Take issue url from package.json
    const issueUrl = context.packageData.bugs && context.packageData.bugs.url;

    if (typeof transformedCommit.subject === 'string') {
      transformedCommit.subject = transformedCommit.subject.replace(/#([a-zA-Z0-9-]+)/g, (_, issue) => {
        issues.push(issue);

        return formatIssue(issueUrl, issue);
      });
    }

    // remove references that already appear in the subject
    transformedCommit.references = commit.references
      .filter((reference) => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }

        return false;
      })
      .map((reference) => formatIssue(issueUrl, reference.issue))
      .join(', ');

    return transformedCommit;
  },
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  notesSort: compareFunc,
};
