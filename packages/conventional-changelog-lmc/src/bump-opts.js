module.exports = {
  whatBump: (commits) => {
    let level = 2;
    let breakings = 0;
    let features = 0;

    commits.forEach((commit) => {
      if (commit.type === 'BREAKING CHANGE' || commit.type === 'BREAKING CHANGES') {
        breakings += 1;
        level = 0;
      } else if (commit.type === `Feat`) {
        features += 1;
        if (level === 2) {
          level = 1;
        }
      }
    });

    return {
      level,
      reason:
        breakings === 1
          ? `There are ${breakings} BREAKING CHANGE and ${features} features`
          : `There are ${breakings} BREAKING CHANGES and ${features} features`,
    };
  },

  parserOpts: {
    headerPattern: /^(?:Pull request #[0-9]+: )?(?:([a-zA-Z]*-[0-9_]*)(?: ))* ?([\w ]*)(?:\((.*)\))?: (.*)$/,
    headerCorrespondence: ['body', 'type', 'scope', 'subject'],
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
    revertCorrespondence: ['header', 'hash'],
  },
};
