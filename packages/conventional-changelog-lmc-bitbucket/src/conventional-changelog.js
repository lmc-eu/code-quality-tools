const Q = require(`q`);
const conventionalChangelog = require(`./conventional-changelog`);
const { parserOpts, writerOpts, recommendedBumpOpts } = require('@lmc-eu/conventional-changelog-lmc');

module.exports = Q.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts]).spread(
  (changelog, parser, bumper, writer) => ({ changelog, parser, recommendedBumpOpts, writer }),
);
