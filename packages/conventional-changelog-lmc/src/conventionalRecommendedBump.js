/* eslint-disable jsdoc/require-jsdoc */

function createConventionalRecommendedBumpOpts (parserOpts) {
  return {
    parserOpts,

    whatBump: (commits) => {
      let level = 2;
      let breakings = 0;
      let features = 0;

      commits.forEach((commit) => {
        if (commit.notes.length > 0) {
          breakings += commit.notes.length;
          level = 0;
        } else if (commit.type === 'BREAKING CHANGE' || commit.type === 'BREAKING CHANGES') {
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
  };
};

module.exports.createConventionalRecommendedBumpOpts = createConventionalRecommendedBumpOpts;
