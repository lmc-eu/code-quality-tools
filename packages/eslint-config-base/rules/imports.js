module.exports = {
  rules: {
    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Ensures that there is no resolvable path back to this module via its dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    'import/no-cycle': ['warn'],

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'config/**', // project configuration files
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          'scripts/*', // custom npm scripts
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.setup.{,m,c}{j,t}s', // jest setup
          '**/vitest.setup.{,m,c}{j,t}s', // vitest setup
          '**/gulpfile.{,m,c}{j,t}s', // gulp config
          '**/gulpfile.*.{,m,c}{j,t}s', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/.eslintrc.{,m,c}js', // eslint config
          '**/.prettierrc.js', // prettier config
          '**/*.config.{,m,c}{j,t}s', // other config
          '**/*.config.*.{,m,c}{j,t}s', // other config
          '**/*.conf.{,m,c}{j,t}s', // other conf
          '**/*.conf.*.{,m,c}{j,t}s', // other conf
        ],
        optionalDependencies: false,
      },
    ],
  },
};
