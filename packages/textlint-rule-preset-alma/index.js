import textlintRuleStopWords from 'textlint-rule-stop-words';
import textlintRuleCommonMisspellings from 'textlint-rule-common-misspellings';
import textlintRuleWriteGood from 'textlint-rule-write-good';
import textlintRuleTitleCase from 'textlint-rule-title-case';
import textlintRuleApostrophe from 'textlint-rule-apostrophe';
import terminology from './rules/terminology.js';

const misspellings = textlintRuleCommonMisspellings.default;
const writegood = textlintRuleWriteGood.default;

export default {
  rules: {
    terminology,
    'stop-words': textlintRuleStopWords,
    'common-misspellings': misspellings,
    'write-good': writegood,
    'title-case': textlintRuleTitleCase,
    apostrophe: textlintRuleApostrophe,
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
