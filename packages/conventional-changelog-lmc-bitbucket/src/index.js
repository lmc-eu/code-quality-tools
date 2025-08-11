const { parserOpts, writerOpts, recommendedBumpOpts } = require('@lmc-eu/conventional-changelog-lmc');
const conventionalChangelog = require('./conventional-changelog');

module.exports = Promise.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts]).then(
  // Using same configuration as other configurations
  // Did not find any documentation whether the output must be in this format
  // eslint-disable-next-line no-shadow
  ([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts]) => ({
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
  }),
);
