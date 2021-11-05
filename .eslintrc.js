'use strict'

module.exports = {

  reportUnusedDisableDirectives: true,

  ignorePatterns: [
    'node_modules',
    '!.*.js',
  ],

  extends: [
    './packages/eslint-config-base',
  ],

}
