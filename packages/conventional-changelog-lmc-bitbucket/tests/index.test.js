/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
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
    gitDummyCommit(['Feat(deps): bump', 'BREAKING CHANGE Also works :)']);
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

describe('lmc bitbucket preset', () => {
  it('should work if there is no semver tag', (done) => {
    preparing(1);

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/bitbucket-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();

        expect(stringifiedChunk).toInclude('amazing new module');
        expect(stringifiedChunk).toInclude('**compile:** avoid a bug');
        expect(stringifiedChunk).toInclude('make it faster');
        expect(stringifiedChunk).toInclude(', closes #1, #2'); // Links are not created
        expect(stringifiedChunk).toInclude('Not backward compatible.');
        expect(stringifiedChunk).toInclude('**compile:** The Change is huge.');
        expect(stringifiedChunk).toInclude('Features');
        expect(stringifiedChunk).toInclude('Bug Fixes');
        expect(stringifiedChunk).toInclude('Performance Improvements');
        expect(stringifiedChunk).toInclude('Reverts');
        expect(stringifiedChunk).toInclude('bad commit');
        expect(stringifiedChunk).toInclude('BREAKING CHANGE');

        // expect(stringifiedChunk).not.toInclude('first commit');
        expect(stringifiedChunk).not.toInclude('feat');
        expect(stringifiedChunk).not.toInclude('fix');
        expect(stringifiedChunk).not.toInclude('perf');
        expect(stringifiedChunk).not.toInclude('revert');
        expect(stringifiedChunk).not.toInclude('***:**');
        expect(stringifiedChunk).not.toInclude(': Not backward compatible.');
        expect(stringifiedChunk).not.toInclude('Pull request');

        expect(stringifiedChunk).toEqual(expect.stringMatching(/oops \(\[[0-9a-z]{7}\]\(http:\/\/any.bbucket.host\/projects\/proj\/repos\/repo-name\/commits\/[0-9a-z]{7}\)\)/)); // commit hash is linked

        done();
      }));
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
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('in [#133](https://jira.int.lmc.cz/browse/133)');
        done();
      }));
  });

  it('should not generate issue links when package.json does NOT have a bugs URL', (done) => {
    preparing(3);

    conventionalChangelogCore(
      {
        config: preset,
        pkg: {
          path: path.join(__dirname, '/fixtures/bitbucket-host.json'),
        },
      },
    }, {
      packageData: {}, // Empty package data
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('in #133');
        done();
      }));
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
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('**awesome:** fix [#88](');
        expect(stringifiedChunk).toInclude('88) [#TR-55](');
        expect(stringifiedChunk).not.toInclude('closes [#88](');
        done();
      }));
  });

  it('should not replace @username with GitHub user URL as feature is not available on BitBucket', (done) => {
    preparing(4);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('issue brought up by @bcoe! on Friday');
        done();
      }));
  });

  it('should not discard commit if there is BREAKING CHANGE', (done) => {
    preparing(5);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();

        expect(stringifiedChunk).toInclude('Documentation');
        expect(stringifiedChunk).toInclude('Styles');
        expect(stringifiedChunk).toInclude('Code Refactoring');
        expect(stringifiedChunk).toInclude('Tests');
        expect(stringifiedChunk).toInclude('Chores');

        done();
      }));
  });

  it('should render BREAKING CHANGES the same as BREAKING CHANGE', (done) => {
    preparing(6);

    conventionalChangelogCore({
      config: preset,
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();

        expect(stringifiedChunk).toInclude('BREAKING CHANGE');
        expect(stringifiedChunk).toInclude('Also works :)');

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
        path: path.join(__dirname, '/__fixtures/bitbucket-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk, enc, cb) => {
        stringifiedChunk = chunk.toString();

        expect(stringifiedChunk).toInclude('some more features');
        expect(stringifiedChunk).not.toInclude('BREAKING');

        expect(stringifiedChunk).toInclude('http://any.bbucket.host/projects/proj/repos/repo-name/compare/diff?targetBranch'
          + '=refs%2Ftags%2Fv1.0.0&sourceBranch=refs%2Ftags%2Fv2.0.0');

        i++;
        cb();
      }, () => {
        expect(i).toEqual(1);
        done();
      }));
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
      .pipe(through((chunk, enc, cb) => {
        stringifiedChunk = chunk.toString();

        expect(stringifiedChunk).toInclude('(http://unknown/compare');
        expect(stringifiedChunk).toMatch(/some more features \(.*\)/); // No commit hash!

        i++;
        cb();
      }, () => {
        expect(i).toEqual(1);
        done();
      }));
  });

  it('should always output the repo URL using http/https even when the repo URL in package.json is some other protocol', (done) => {
    preparing(8);
    let i = 0;

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/bitbucket-http-host.json'),
      },
    }).on('error', done).pipe(through((chunk, enc, cb) => {
      stringifiedChunk = chunk.toString();

      expect(stringifiedChunk).toInclude('https://bitbucket.example.com/projects/EX/repos/example-repo/compare/');
      expect(stringifiedChunk).toInclude('https://bitbucket.example.com/projects/EX/repos/example-repo/commits/');
      expect(stringifiedChunk).toMatch(/some more features \(.*\)/);

      i++;
      cb();
    }, () => {
      expect(i).toEqual(1);
      done();
    }));
  });

  it('should render multiple issues that are in the footer without links when package.json does NOT have a bugs URL', (done) => {
    preparing(9);

    conventionalChangelogCore({
      config: preset,
      pkg: {
        path: path.join(__dirname, '/__fixtures/bitbucket-host.json'),
      },
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('closes #1223, #OBG-23');
        done();
      }));
  });

  it.skip('should render multiple issues that are in the footer as links when package.json has a bugs URL', (done) => {
    preparing(9);

    conventionalChangelogCore({
      config: preset,
      // Default package data (this repo!)
    })
      .on('error', (err) => {
        done(err);
      })
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        // eslint-disable-next-line no-console
        console.log(stringifiedChunk);
        expect(stringifiedChunk).toInclude('closes [#1223](');
        expect(stringifiedChunk).toInclude('1223), [#OBG-23]');
        done();
      }));
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
      .pipe(through((chunk) => {
        stringifiedChunk = chunk.toString();
        expect(stringifiedChunk).toInclude('Feat: bad feature');
        expect(stringifiedChunk).toInclude('Feat: custom revert format');
        done();
      }));
  });
});
