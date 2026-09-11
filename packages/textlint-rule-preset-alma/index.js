import stopwords from 'textlint-rule-stop-words';
import misspellingsPkg from 'textlint-rule-common-misspellings';
import writeGoodPkg from 'textlint-rule-write-good';
import titlecase from 'textlint-rule-title-case';
import apostrophe from 'textlint-rule-apostrophe';
import terminology from './rules/terminology.js';

const misspellings = misspellingsPkg.default;
const writegood = writeGoodPkg.default;

export default {
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
