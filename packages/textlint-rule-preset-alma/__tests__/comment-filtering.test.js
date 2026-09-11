import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { TextlintKernel } from '@textlint/kernel';
import markdownPluginPkg from '@textlint/textlint-plugin-markdown';
import commentsFilter from 'textlint-filter-rule-comments';
import preset from '../index.js';

const markdownPlugin = markdownPluginPkg.default;

/**
 * Lints markdown with the preset's terminology rule and its comment filter enabled,
 * matching how `filters: { comments: true }` behaves via a real .textlintrc.js.
 *
 * @param {string} text markdown text to lint
 * @returns {Promise<string[]>} messages reported by the rule
 */
async function lint(text) {
  const kernel = new TextlintKernel();
  const result = await kernel.lintText(text, {
    ext: '.md',
    plugins: [{ pluginId: 'markdown', plugin: markdownPlugin }],
    rules: [{ ruleId: 'terminology', rule: preset.rules.terminology, options: true }],
    filterRules: [{ ruleId: 'comments', rule: commentsFilter, options: preset.filters.comments }],
  });

  return result.messages.map((message) => message.message);
}

describe('comment filtering', () => {
  it('ignores violations between textlint-disable and textlint-enable comments', async () => {
    const text = [
      'We use the id field.',
      '',
      '<!-- textlint-disable -->',
      '',
      'We use the id field again.',
      '',
      '<!-- textlint-enable -->',
      '',
      'We use the id field once more.',
    ].join('\n');

    const messages = await lint(text);

    assert.deepEqual(messages, [
      'Incorrect usage of the term: “id”, use “ID” instead',
      'Incorrect usage of the term: “id”, use “ID” instead',
    ]);
  });

  it('ignores violations for the rest of the file after an unmatched textlint-disable comment', async () => {
    const text = ['We use the id field.', '', '<!-- textlint-disable -->', '', 'We use the id field again.'].join('\n');

    const messages = await lint(text);

    assert.deepEqual(messages, ['Incorrect usage of the term: “id”, use “ID” instead']);
  });

  it('flags violations when no textlint-disable comment is present', async () => {
    const messages = await lint('We use the id field.');

    assert.deepEqual(messages, ['Incorrect usage of the term: “id”, use “ID” instead']);
  });
});
