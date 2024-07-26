/* eslint-disable jsdoc/require-jsdoc */
const { createConventionalChangelogOpts } = require(`./conventionalChangelog`);
const {
  createParserOpts,
  createWriterOpts,
  createConventionalRecommendedBumpOpts,
} = require('@lmc-eu/conventional-changelog-lmc');

async function createPreset() {
  const parserOpts = createParserOpts();
  const writerOpts = createWriterOpts();
  const recommendedBumpOpts = createConventionalRecommendedBumpOpts(parserOpts);
  const conventionalChangelog = await createConventionalChangelogOpts(parserOpts, writerOpts);

  return {
    parserOpts,
    writerOpts,
    recommendedBumpOpts,
    conventionalChangelog,
  };
}

module.exports = createPreset;
