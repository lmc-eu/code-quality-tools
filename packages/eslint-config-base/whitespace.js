import importPlugin from 'eslint-plugin-import';
import bestPractices from './rules/best-practices.js';
import errors from './rules/errors.js';
import node from './rules/node.js';
import style from './rules/style.js';
import variables from './rules/variables.js';
import es6 from './rules/es6.js';
import importsRules from './rules/imports.js';
import strict from './rules/strict.js';
import settings from './settings.js';

// Rules that are allowed to stay at 'error' severity; every other rule that
// resolves to 'error' in the base config is downgraded to 'warn'.
// @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/whitespace.js
const WHITESPACE_RULES = [
  'array-bracket-newline',
  'array-bracket-spacing',
  'array-element-newline',
  'arrow-spacing',
  'block-spacing',
  'comma-spacing',
  'computed-property-spacing',
  'dot-location',
  'eol-last',
  'func-call-spacing',
  'function-paren-newline',
  'generator-star-spacing',
  'implicit-arrow-linebreak',
  'indent',
  'key-spacing',
  'keyword-spacing',
  'line-comment-position',
  'linebreak-style',
  'multiline-ternary',
  'newline-per-chained-call',
  'no-irregular-whitespace',
  'no-mixed-spaces-and-tabs',
  'no-multi-spaces',
  'no-regex-spaces',
  'no-spaced-func',
  'no-trailing-spaces',
  'no-whitespace-before-property',
  'nonblock-statement-body-position',
  'object-curly-newline',
  'object-curly-spacing',
  'object-property-newline',
  'one-var-declaration-per-line',
  'operator-linebreak',
  'padded-blocks',
  'padding-line-between-statements',
  'rest-spread-spacing',
  'semi-spacing',
  'semi-style',
  'space-before-blocks',
  'space-before-function-paren',
  'space-in-parens',
  'space-infix-ops',
  'space-unary-ops',
  'spaced-comment',
  'switch-colon-spacing',
  'template-tag-spacing',
  'import/newline-after-import',
];

/**
 * Extracts the severity from a rule config, whether it's a bare severity or an
 * options array with severity as its first element.
 *
 * @param {string|number|Array} ruleConfig - the rule's configured value
 * @returns {string|number} the rule's severity
 */
function getSeverity(ruleConfig) {
  return Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;
}

/**
 * Downgrades every 'error' rule to 'warn', except for the given allowed rule names.
 *
 * @param {string[]} allowedRuleNames - rule names allowed to remain 'error'
 * @param {object} baseRules - the rules object to transform
 * @returns {object} the transformed rules object
 */
function onlyErrorOnRules(allowedRuleNames, baseRules) {
  return Object.fromEntries(
    Object.entries(baseRules).map(([ruleName, ruleConfig]) => {
      const severity = getSeverity(ruleConfig);
      const isError = severity === 'error' || severity === 2;

      if (isError && !allowedRuleNames.includes(ruleName)) {
        const downgraded = Array.isArray(ruleConfig) ? ['warn', ...ruleConfig.slice(1)] : 'warn';

        return [ruleName, downgraded];
      }

      return [ruleName, ruleConfig];
    }),
  );
}

const baseRules = {
  ...bestPractices.rules,
  ...errors.rules,
  ...node.rules,
  ...style.rules,
  ...variables.rules,
  ...es6.rules,
  ...importsRules.rules,
  ...strict.rules,
};

export default [
  {
    name: '@alma-oss/eslint-config-base/whitespace',

    plugins: {
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },

    settings,

    rules: onlyErrorOnRules(WHITESPACE_RULES, baseRules),
  },
];
