const assert = require('node:assert/strict');
const { describe, it } = require('node:test');
const { TextlintKernel } = require('@textlint/kernel');
const textPlugin = require('@textlint/textlint-plugin-text').default;
const preset = require('../index.js');

/**
 * Lints text with only the preset's terminology rule enabled.
 *
 * @param {object|boolean} terminologyOptions rule options passed straight through to the rule
 *   (`true` enables the rule with the preset's own defaults, matching a real .textlintrc.js)
 * @param {string} text text to lint
 * @returns {Promise<string[]>} messages reported by the rule
 */
async function lint(terminologyOptions, text) {
  const kernel = new TextlintKernel();
  const result = await kernel.lintText(text, {
    ext: '.txt',
    plugins: [{ pluginId: 'text', plugin: textPlugin }],
    rules: [{ ruleId: 'terminology', rule: preset.rules.terminology, options: terminologyOptions }],
  });

  return result.messages.map((message) => message.message);
}

describe('terminology rule', () => {
  it('flags a term from the preset default list', async () => {
    const messages = await lint(true, 'We use the id field.');

    assert.deepEqual(messages, ['Incorrect usage of the term: “id”, use “ID” instead']);
  });

  it("does not flag terms from textlint-rule-terminology's own defaults", async () => {
    const messages = await lint(true, 'We rely on semver and jQuery here.');

    assert.deepEqual(messages, []);
  });

  it('excludes a plain-string term without losing the rest of the preset defaults', async () => {
    const messages = await lint({ exclude: ['ID'] }, 'We use the id field and also rely on semver and jQuery here.');

    assert.deepEqual(messages, []);
  });

  it('excludes a [pattern, replacement] term by matching the pattern string', async () => {
    const messages = await lint({ exclude: ['build system(s?)'] }, 'We rely on the build systems here.');

    assert.deepEqual(messages, []);
  });

  it('replaces the preset terms outright when consumer supplies its own terms', async () => {
    const messages = await lint({ terms: ['banana'] }, 'We use the id field.');

    assert.deepEqual(messages, []);
  });
});
