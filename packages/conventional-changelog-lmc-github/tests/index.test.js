// We are dealing with Streams here, not Promises
/* eslint-disable jest/no-done-callback */
/* eslint-disable no-plusplus */

/* eslint-disable no-param-reassign */
const conventionalChangelogCore = require('conventional-changelog-core');
const gitDummyCommit = require('git-dummy-commit');
const shell = require('shelljs');
const through = require('through2');
const betterThanBefore = require('better-than-before')();
const path = require('path');
const preset = require('..');

const { preparing } = betterThanBefore;

betterThanBefore.setups([
  function () {
    shell.config.silent = true;
    shell.rm('-rf', 'tmp');
    shell.mkdir('tmp');
    shell.cd('tmp');
    shell.mkdir('git-templates');
    shell.exec('git init --template=./git-templates');

    gitDummyCommit('Chore: first commit');
    gitDummyCommit('BREAKING CHANGE: Not so compatible change');
    gitDummyCommit('BREAKING CHANGES: Another big change that break things');
    gitDummyCommit(['Feat: amazing new module', 'BREAKING CHANGE: Not backward compatible.']);
    gitDummyCommit(['Fix(compile): avoid a bug', 'BREAKING CHANGE: The Change is huge.']);
    gitDummyCommit(['Perf(ngOptions): make it faster', ' closes #1, #2']);
    gitDummyCommit('Revert(ngOptions): bad commit');
    gitDummyCommit('Fix(*): oops');
  },
  function () {
    gitDummyCommit(['Feat(awesome): addresses the issue brought up in #133']);
    gitDummyCommit(['Revert(ngOptions): bad commit', 'closes #24']);
  },
  function () {
    gitDummyCommit(['Feat(awesome): fix #88 #TR-55']);
  },
  function () {
    gitDummyCommit(['Feat(awesome): issue brought up by @bcoe! on Friday']);
  },
  function () {
    gitDummyCommit(['Docs(readme): make it clear', 'BREAKING CHANGE: The Change is huge.']);
    gitDummyCommit(['Style(whitespace): make it easier to read', 'BREAKING CHANGE: The Change is huge.']);
    gitDummyCommit(['Refactor(code): change a lot of code', 'BREAKING CHANGE: The Change is huge.']);
    gitDummyCommit(['Test(*): more tests', 'BREAKING CHANGE: The Change is huge.']);
    gitDummyCommit(['WIP: Just in the middle of something...']);
    gitDummyCommit(['Chore(deps): bump', 'BREAKING CHANGE: The Change is huge.']);
  },
  function () {
    gitDummyCommit(['Feat(deps): bump', 'BREAKING CHANGES Also works :)']);
  },
  function () {
    shell.exec('git tag v1.0.0');
    gitDummyCommit('Feat: some more features');
  },
  function () {
    gitDummyCommit(['Feat(foo): add thing', 'closes #1223 #OBG-23']);
  },
  function () {
    gitDummyCommit(['Revert \\"Feat: bad feature\\"', 'This reverts commit 12345.'], false);
    gitDummyCommit(['Revert: Feat: custom revert format', 'This reverts commit 5678.']);
  },
  function () {
    gitDummyCommit([
      'Pull request #550: Deps: Update dependency eslint-config-prettier to v7',
      'FP-1174 FP-1135 Chore: Add comments to shell scripts',
      'Merge in FP/fp-admin from dependencies/major-eslint to master',
    ]);
  },
]);

describe('lmc github preset', () => {
  it('should work if there is no semver tag', (done) => {
    preparing(1);

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/github-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();

          expect(chunk).toInclude('amazing new module');
          expect(chunk).toInclude('**compile:** avoid a bug');
          expect(chunk).toInclude('make it faster');
          expect(chunk).toInclude(', closes #1, #2'); // Links are not created
          expect(chunk).toInclude('Not backward compatible.');
          expect(chunk).toInclude('**compile:** The Change is huge.');
          expect(chunk).toInclude('Features');
          expect(chunk).toInclude('Bug Fixes');
          expect(chunk).toInclude('Performance Improvements');
          expect(chunk).toInclude('Reverts');
          expect(chunk).toInclude('bad commit');
          expect(chunk).toInclude('BREAKING CHANGE');
          expect(chunk).toInclude('Not so compatible change');
          expect(chunk).toInclude('Another big change that break things');

          // expect(chunk).not.toInclude('first commit');
          expect(chunk).not.toInclude('feat');
          expect(chunk).not.toInclude('fix');
          expect(chunk).not.toInclude('perf');
          expect(chunk).not.toInclude('revert');
          expect(chunk).not.toInclude('***:**');
          expect(chunk).not.toInclude(': Not backward compatible.');
          expect(chunk).not.toInclude('Pull request');

          expect(chunk).toEqual(
            expect.stringMatching(
              /oops \(\[[0-9a-z]{7}\]\(https:\/\/github.internal.example.com\/owner\/repo-name\/commit\/[0-9a-z]{7}\)\)/,
            ),
          ); // commit hash is linked

          done();
        }),
      );
  });

  it('should generate issue links if package.json has a bugs URL', (done) => {
    preparing(2);

    conventionalChangelogCore({
      config: preset,
      // Default package data (this repo!)
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('in [#133](https://github.com/lmc-eu/issues/133)');
          done();
        }),
      );
  });

  it('should not generate issue links when package.json does NOT have a bugs URL', (done) => {
    preparing(3);

    conventionalChangelogCore(
      {
        config: preset,
        pkg: {
          path: path.join(__dirname, '/fixtures/github-host.json'),
        },
      },
      {
        packageData: {}, // Empty package data
      },
    )
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('in #133');
          done();
        }),
      );
  });

  it('should not generate issue refs in-the-footer when the issue(s) appear in the subject line (the issues remain in the subject line)', (done) => {
    preparing(3);

    conventionalChangelogCore({
      config: preset,
      // Default package data (this repo!)
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('**awesome:** fix [#88](');
          expect(chunk).toInclude('88) [#TR-55](');
          expect(chunk).not.toInclude('closes [#88](');
          done();
        }),
      );
  });

  it('should not replace @username with GitHub user URL as feature is not available on BitBucket', (done) => {
    preparing(4);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('issue brought up by @bcoe! on Friday');
          done();
        }),
      );
  });

  it('should not discard commit if there is BREAKING CHANGE', (done) => {
    preparing(5);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();

          expect(chunk).toInclude('Documentation');
          expect(chunk).toInclude('Styles');
          expect(chunk).toInclude('Code Refactoring');
          expect(chunk).toInclude('Tests');
          expect(chunk).toInclude('Chores');

          done();
        }),
      );
  });

  it('should render BREAKING CHANGES the same as BREAKING CHANGE', (done) => {
    preparing(6);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();

          expect(chunk).toInclude('BREAKING CHANGE');
          expect(chunk).toInclude('Also works :)');

          done();
        }),
      );
  });

  it('should work if there is a semver tag', (done) => {
    preparing(7);
    let i = 0;

    conventionalChangelogCore({
      config: preset,
      outputUnreleased: true,
      pkg: {
        path: path.join(__dirname, '/__fixtures/github-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through(
          (chunk, enc, cb) => {
            chunk = chunk.toString();

            expect(chunk).toInclude('some more features');
            expect(chunk).not.toInclude('BREAKING');

            expect(chunk).toInclude('https://github.internal.example.com/owner/repo-name/compare/v1.0.0...v2.0.0');

            i++;
            cb();
          },
          () => {
            expect(i).toBe(1);
            done();
          },
        ),
      );
  });

  it('should work with unknown host', (done) => {
    preparing(7);
    let i = 0;

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/_unknown-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through(
          (chunk, enc, cb) => {
            chunk = chunk.toString();

            expect(chunk).toInclude('(/compare');
            expect(chunk).toMatch(/some more features \(.*\)/); // No commit hash!

            i++;
            cb();
          },
          () => {
            expect(i).toBe(1);
            done();
          },
        ),
      );
  });

  it('should always output the repo URL using http/https even when the repo URL in package.json is some other protocol', (done) => {
    preparing(8);
    let i = 0;

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/github-http-host.json'),
      },
    })
      .on('error', done)
      .pipe(
        through(
          (chunk, enc, cb) => {
            chunk = chunk.toString();

            expect(chunk).toInclude('https://github.internal.example.com/owner/repo-name/compare/');
            expect(chunk).toInclude('https://github.internal.example.com/owner/repo-name/commit/');
            expect(chunk).toMatch(/some more features \(.*\)/);

            i++;
            cb();
          },
          () => {
            expect(i).toBe(1);
            done();
          },
        ),
      );
  });

  it('should render multiple issues that are in the footer without links when package.json does NOT have a bugs URL', (done) => {
    preparing(9);

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/github-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('closes #1223, #OBG-23');
          done();
        }),
      );
  });

  it('should render multiple issues that are in the footer as links when package.json has a bugs URL', (done) => {
    preparing(9);

    conventionalChangelogCore({
      config: preset,
      // Default package data (this repo!)
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          // console.log(chunk);
          expect(chunk).toInclude('closes [#1223](');
          expect(chunk).toInclude('1223), [#OBG-23]');
          done();
        }),
      );
  });

  it.skip('should render revert commit using standard Git revert message convention', (done) => {
    preparing(10);

    conventionalChangelogCore({
      config: preset,
      // Default package data (this repo!)
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(
        through((chunk) => {
          chunk = chunk.toString();
          expect(chunk).toInclude('Feat: bad feature');
          expect(chunk).toInclude('Feat: custom revert format');
          done();
        }),
      );
  });
});
