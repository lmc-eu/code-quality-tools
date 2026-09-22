import assert from 'node:assert/strict';
import fs from 'node:fs';
import { describe, it } from 'node:test';
import { ESLint } from 'eslint';
import baseConfig from '../index.js';
import legacyConfig from '../legacy.js';
import optionalConfig from '../optional.js';
import whitespaceConfig from '../whitespace.js';

const readFixture = (name) => fs.readFileSync(`./__tests__/__fixtures__/${name}`, 'utf-8');

const lint = async (config, code) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: config,
  });

  const [result] = await eslint.lintText(code, { filePath: 'fixture.js' });

  return result;
};

describe('@alma-oss/eslint-config-base', () => {
  describe('flags no problems with valid code', () => {
    it('has no errors or warnings', async () => {
      const result = await lint(baseConfig, readFixture('valid.js'));

      assert.equal(result.errorCount, 0);
      assert.equal(result.warningCount, 0);
    });
  });

  describe('flags problems with invalid code', () => {
    it('flags airbnb rules inherited as-is', async () => {
      const result = await lint(baseConfig, readFixture('invalid.js'));
      const ruleIds = result.messages.map((message) => message.ruleId);

      assert.ok(ruleIds.includes('no-var'));
      assert.ok(ruleIds.includes('eqeqeq'));
      assert.ok(ruleIds.includes('guard-for-in'));
    });

    it('flags rules restored during the ESLint v9 style.js migration', async () => {
      const result = await lint(baseConfig, readFixture('invalid.js'));
      const noBitwise = result.messages.find((message) => message.ruleId === 'no-bitwise');

      assert.ok(noBitwise, 'expected no-bitwise to be reported');
      assert.equal(noBitwise.severity, 2);
    });

    it('respects ALMA severity overrides instead of airbnb defaults', async () => {
      const result = await lint(baseConfig, readFixture('invalid.js'));
      const curly = result.messages.find((message) => message.ruleId === 'curly');

      assert.ok(curly, 'expected curly to be reported');
      assert.equal(curly.severity, 1, 'curly should be a warning, not an airbnb error');
    });

    it('does not forbid for-in loops, unlike airbnb', async () => {
      const result = await lint(baseConfig, readFixture('invalid.js'));
      const ruleIds = result.messages.map((message) => message.ruleId);

      assert.ok(!ruleIds.includes('no-restricted-syntax'));
    });
  });
});

describe('@alma-oss/eslint-config-base/legacy', () => {
  it('lints ES5 code with no errors or warnings', async () => {
    const result = await lint(legacyConfig, readFixture('legacy-valid.js'));

    assert.equal(result.errorCount, 0);
    assert.equal(result.warningCount, 0);
  });

  it('requires strict mode, unlike the modern config', async () => {
    const result = await lint(legacyConfig, 'var sum = function sum(a, b) { return a + b; };\n');
    const ruleIds = result.messages.map((message) => message.ruleId);

    assert.ok(ruleIds.includes('strict'));
  });
});

describe('@alma-oss/eslint-config-base/optional', () => {
  it('loads and lints without throwing', async () => {
    const result = await lint([...baseConfig, ...optionalConfig], readFixture('valid.js'));

    assert.equal(typeof result.errorCount, 'number');
  });

  it('flags additional insights not enabled by the base config', async () => {
    const result = await lint([...baseConfig, ...optionalConfig], 'const foo = Symbol();\n\nexport default foo;\n');
    const ruleIds = result.messages.map((message) => message.ruleId);

    assert.ok(ruleIds.includes('symbol-description'));
  });
});

describe('@alma-oss/eslint-config-base/whitespace', () => {
  it('keeps whitespace rules at error severity', async () => {
    const result = await lint(whitespaceConfig, 'if (true) {\n\tconsole.log(1);\n}\n');
    const indent = result.messages.find((message) => message.ruleId === 'indent');

    assert.ok(indent, 'expected indent to be reported');
    assert.equal(indent.severity, 2);
  });

  it('downgrades non-whitespace rules to warnings', async () => {
    const result = await lint(whitespaceConfig, readFixture('invalid.js'));
    const noVar = result.messages.find((message) => message.ruleId === 'no-var');

    assert.ok(noVar, 'expected no-var to be reported');
    assert.equal(noVar.severity, 1, 'no-var is not a whitespace rule, so it should be a warning');
  });
});
