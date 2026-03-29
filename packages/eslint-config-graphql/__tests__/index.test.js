import assert from 'node:assert/strict';
import fs from 'node:fs';
import { beforeEach, describe, it } from 'node:test';

import { ESLint } from 'eslint';

import config from '../index.js';

describe('@alma-oss/eslint-config-graphql', () => {
  describe('config structure', () => {
    it('exports a flat config array', () => {
      assert.ok(Array.isArray(config));
    });

    it('exports exactly 2 config entries', () => {
      assert.equal(config.length, 2);
    });

    it('first entry has correct name', () => {
      assert.equal(config[0].name, '@alma-oss/eslint-config-graphql');
    });

    it('first entry registers the graphql-eslint processor', () => {
      assert.ok(config[0].processor != null);
    });

    it('second entry targets *.graphql files', () => {
      assert.deepEqual(config[1].files, ['*.graphql']);
    });

    it('second entry registers the @graphql-eslint plugin', () => {
      assert.ok(config[1].plugins['@graphql-eslint'] != null);
    });

    it('second entry enables known-type-names as error', () => {
      assert.equal(config[1].rules['@graphql-eslint/known-type-names'], 'error');
    });
  });

  describe('valid GraphQL schema', () => {
    const code = fs.readFileSync('./__tests__/__fixtures__/schema-valid.graphql', 'utf-8');
    let result;

    beforeEach(async () => {
      const overrideConfig = [
        config[0],
        {
          ...config[1],
          languageOptions: {
            ...config[1].languageOptions,
            parserOptions: {
              schemaSdl: code,
            },
          },
        },
      ];

      const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig,
      });
      const [lintResult] = await eslint.lintText(code, { filePath: 'schema-valid.graphql' });
      result = lintResult;
    });

    it('flags no warnings', () => {
      assert.equal(result.messages.length, 0);
    });
  });

  describe('invalid GraphQL schema (unknown type names)', () => {
    const validCode = fs.readFileSync('./__tests__/__fixtures__/schema-valid.graphql', 'utf-8');
    const invalidCode = fs.readFileSync('./__tests__/__fixtures__/schema-invalid.graphql', 'utf-8');
    let result;

    beforeEach(async () => {
      const overrideConfig = [
        config[0],
        {
          ...config[1],
          languageOptions: {
            ...config[1].languageOptions,
            parserOptions: {
              // Use valid schema as the universe of known types
              schemaSdl: validCode,
            },
          },
        },
      ];

      const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig,
      });
      // Lint the invalid schema against the valid schema's type universe
      const [lintResult] = await eslint.lintText(invalidCode, { filePath: 'schema-invalid.graphql' });
      result = lintResult;
    });

    it('flags warnings', () => {
      assert.ok(result.messages.length > 0);
    });

    it('flags the known-type-names rule', () => {
      assert.ok(result.messages.some((m) => m.ruleId === '@graphql-eslint/known-type-names'));
    });

    it('reports error severity', () => {
      const errors = result.messages.filter((m) => m.ruleId === '@graphql-eslint/known-type-names');
      assert.ok(errors.every((m) => m.severity === 2));
    });

    it('flags exactly 2 unknown type references', () => {
      const errors = result.messages.filter((m) => m.ruleId === '@graphql-eslint/known-type-names');
      assert.equal(errors.length, 2);
    });
  });
});
