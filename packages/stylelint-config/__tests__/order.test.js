// Based on https://github.com/stylelint/stylelint-config-standard/blob/36.0.0/__tests__/index.test.mjs

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';

import stylelint from 'stylelint';

import config from '../rules/order.js';

describe('CSS order', () => {
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
});
