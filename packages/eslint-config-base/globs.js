module.exports = {
  // Test files patterns
  tests: [
    'test/**',
    '**/*.test.*',
    '**/*.spec.*',
  ],

  // Configuration files patterns
  configs: [
    '*config.*',
    '**/config/**',
    '**/configuration/**',
  ],

  javascripts: [
    '*.js',
    '.*.js',
    '*.cjs',
    '.*.cjs',
  ],

  esmodules: [
    '*.mjs',
    '.*.mjs',
  ],

  typescripts: [
    '*.ts',
    '.*.ts',
    '*.tsx',
    '.*.tsx',
  ],

  storybook: [
    '*.stories.{js,jsx,ts,tsx}',
  ],

  nextJs: [
    'pages/**/*.{js,jsx,ts,tsx}', '*/pages/**/*.{js,jsx,ts,tsx}',
  ],
};
