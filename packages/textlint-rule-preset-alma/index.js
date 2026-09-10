const stopwords = require('textlint-rule-stop-words');
const misspellings = require('textlint-rule-common-misspellings').default;
const writegood = require('textlint-rule-write-good').default;
const titlecase = require('textlint-rule-title-case');
const apostrophe = require('textlint-rule-apostrophe');
const terminology = require('./rules/terminology');

module.exports = {
  rules: {
    terminology,
    'stop-words': stopwords,
    'common-misspellings': misspellings,
    'write-good': writegood,
    'title-case': titlecase,
    apostrophe,
  },

  filters: {
    comments: true,
  },

  rulesConfig: {
    terminology: true,
    'stop-words': true,
    'common-misspellings': true,
    'write-good': {
      adverb: false,
      passive: false,
      tooWordy: false,
      weasel: false,
    },
    'title-case': {
      headingLevels: [1, 2, 3, 4, 5, 6],
      exclude: ['documentation.js', 'gh-lint', 'lint-staged', 'npm', 'webpack', 'size-limit'],
    },
    apostrophe: true,
  },
};
