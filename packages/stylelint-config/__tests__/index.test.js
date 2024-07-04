// Based on https://github.com/stylelint/stylelint-config-standard/blob/36.0.0/__tests__/index.test.mjs

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';

import stylelint from 'stylelint';

// eslint-disable-next-line import/extensions -- Specify the extension because Node is unable to detect module format.
import config from '../index.js';

describe('CSS', () => {
  describe('flags no warnings with valid CSS', () => {
    const validCss = fs.readFileSync('./__tests__/__fixtures__/css-valid.css', 'utf-8');
    let result;

    beforeEach(async () => {
      result = await stylelint.lint({
        code: validCss,
        config,
      });
    });

    it('did not error', () => {
      assert.equal(result.errored, false);
    });

    it('flags no warnings', () => {
      assert.equal(result.results[0].warnings.length, 0);
    });
  });

  describe('flags warnings with invalid CSS', () => {
    const invalidCss = fs.readFileSync('./__tests__/__fixtures__/css-invalid.css', 'utf-8');
    let result;

    beforeEach(async () => {
      result = await stylelint.lint({
        code: invalidCss,
        config,
      });
    });

    it('did error', () => {
      assert.equal(result.errored, true);
    });

    it('flags warnings', () => {
      assert.equal(result.results[0].warnings.length, 6);
    });

    it('correct warning text', () => {
      assert.deepEqual(
        result.results[0].warnings.map((w) => w.text),
        [
          'Expected custom media query name "--FOO" to be kebab-case',
          'Expected custom property name "--FOO" to be kebab-case',
          'Expected keyframe name "FOO" to be kebab-case',
          'Expected id selector "#FOO" to be kebab-case',
          'Expected "#FOO" to have no more than 0 ID selectors (selector-max-id)',
          'Expected "#FOO" to have a specificity no more than "0,4,0" (selector-max-specificity)',
        ],
      );
    });

    it('correct rule flagged', () => {
      assert.deepEqual(
        result.results[0].warnings.map((w) => w.rule),
        [
          'custom-media-pattern',
          'custom-property-pattern',
          'keyframes-name-pattern',
          'selector-id-pattern',
          'selector-max-id',
          'selector-max-specificity',
        ],
      );
    });

    it('correct severity flagged', () => {
      assert.equal(result.results[0].warnings[0].severity, 'error');
    });

    it('correct line number', () => {
      assert.equal(result.results[0].warnings[0].line, 3);
    });

    it('correct column number', () => {
      assert.equal(result.results[0].warnings[0].column, 15);
    });
  });
});
