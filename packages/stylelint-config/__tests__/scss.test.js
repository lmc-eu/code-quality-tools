// Based on https://github.com/stylelint-scss/stylelint-config-standard-scss/blob/v13.1.0/__tests__/index.test.mjs

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { beforeEach, describe, it } from 'node:test';

import stylelint from 'stylelint';

import config from '../rules/scss.js';

const validScss = readFileSync('./__tests__/__fixtures__/scss-valid.scss', 'utf-8');
const invalidScss = readFileSync('./__tests__/__fixtures__/scss-invalid.scss', 'utf-8');

describe('SCSS', () => {
  describe('flags no warnings with valid SCSS', () => {
    let result;

    beforeEach(async () => {
      result = await stylelint.lint({
        code: validScss,
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

  describe('flags warnings with invalid scss', () => {
    let result;

    beforeEach(async () => {
      result = await stylelint.lint({
        code: invalidScss,
        config,
      });
    });

    it('did error', () => {
      assert.equal(result.errored, true);
    });

    it('flags one warning', () => {
      assert.equal(result.results[0].warnings.length, 1);
    });

    it('correct warning text', () => {
      assert.equal(
        result.results[0].warnings[0].text,
        'Expected variable to be kebab-case. Underscore prefix for private variables is allowed (scss/dollar-variable-pattern)',
      );
    });

    it('correct rule flagged', () => {
      assert.equal(result.results[0].warnings[0].rule, 'scss/dollar-variable-pattern');
    });

    it('correct severity flagged', () => {
      assert.equal(result.results[0].warnings[0].severity, 'error');
    });

    it('correct line number', () => {
      assert.equal(result.results[0].warnings[0].line, 3);
    });

    it('correct column number', () => {
      assert.equal(result.results[0].warnings[0].column, 1);
    });
  });
});
